import React, { Component } from 'react'

//Import images for animal
import Bee from '../image/Animal/bee.png'
import Dragon from '../image/Animal/dragon.png'
import Turtle from '../image/Animal/turtle.png'
import Dinosaurs from '../image/Animal/dinosaurous.png'
import Woodpecker from '../image/Animal/woodpecker.png'
import Lion from '../image/Animal/lion.png'
import Snake from '../image/Animal/snake.png'
import Cow from '../image/Animal/cows.png'
import Mouse from '../image/Animal/mouse.png'

class ContentAnimal extends Component {
    render() {
        return (
            this.props.cardId == 1 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Bee}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Bee</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 2 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Dragon}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Dragon</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 3 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Turtle}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Turtle</h1>
                        </div>
                    </div>
                </div> 
            : this.props.cardId == 4 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Dinosaurs}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Dinosaurs</h1>
                        </div>
                    </div>
                </div>    
            : this.props.cardId == 5 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Woodpecker}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Woodpecker</h1>
                        </div>
                    </div>
                </div>                       
            : this.props.cardId == 6 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Lion}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Lion</h1>
                        </div>
                    </div>
                </div> 
            : this.props.cardId == 7 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Snake}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Snake</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 8 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Cow}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Cow</h1>
                        </div>
                    </div>
                </div>
            :
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Mouse}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Mouse</h1>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ContentAnimal;