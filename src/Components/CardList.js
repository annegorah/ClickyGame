import React, { Component } from "react";
import personajes from "../personajes.json";
import Card from "./Cards"
import "./style.css"

class CardList extends Component {
    state = {
        personajes: personajes,
        personajesSeleccionados: []
    }
    shuffle = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    imageClick = (id) => {


        let personajesSeleccionados = this.state.personajesSeleccionados;
        if (!personajesSeleccionados.includes(id)) {
            personajesSeleccionados.push(id);
            if (personajesSeleccionados.length === 12) {
                this.setState({
                    selected: []
                })
                this.props.scoreChangeHandle();
                this.props.onEndGame(false);
                return;
            }
        } else {
            this.setState({
                personajesSeleccionados: []
            })
            this.props.onEndGame(true);
            return;
        }

        this.setState({
            personajes: this.shuffle(this.state.personajes),
            personajesSeleccionados: personajesSeleccionados
        })
        this.props.scoreChangeHandle();

    }


    render() {
        return (
            <div className="row">
                {
                    this.shuffle(this.state.personajes)
                        .map((personaje) => {
                            return <Card
                                ImageClick={this.imageClick}
                                image={personaje.image}
                                id={personaje.id} />
                        })
                }
            </div>
        )
    }
}


export default CardList;