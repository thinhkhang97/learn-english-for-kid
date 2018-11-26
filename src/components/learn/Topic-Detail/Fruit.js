import React, { Component } from 'react';

//import component
import CartItem from './card-item/CardItem'

// import image
import Apple from '../image/fruit/12316860561101736632rg1024_apple.svg.med.png'
import Orange from '../image/fruit/Large_Painted_Orange_PNG_Clipart.png'
import Pineapple from '../image/fruit/Pineapple.png'
import Banana from '../image/fruit/banana-clipart-sweet-food-4.png'
import Grape from '../image/fruit/f1b29ee56628bccf15df81d70c329643.png'
import StartFruit from '../image/fruit/Carambola_Transparent_Clip_Art_Image.png'
import Durian from '../image/fruit/61TBIlJAJLL.png'
import Papaya from '../image/fruit/Papaya-PNG-Vector-Clipart-Image.png'
import Rambutan from '../image/fruit/transcoder.png'

class Fruit extends Component {
    render() {
        return (
            <div>
                <div class='row'>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(1)}>
                            <CartItem image={Apple} title={'Apple'} />
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(2)}>
                            <CartItem image={Orange} title={'Orange'} />
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(3)}>
                            <CartItem image={Pineapple} title={'Pineapple'} />
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(4)}>
                            <CartItem image={Banana} title={'Banana'} />
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(5)}>
                            <CartItem image={Grape} title={'Grape'} />
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(6)}>
                            <CartItem image={StartFruit} title={'StartFruit'} />
                        </div>
                    </div>
                </div>
                <div class='row mb-3'>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(7)}>
                            <CartItem image={Durian} title={'Durian'} />
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(8)}>
                            <CartItem image={Papaya} title={'Papaya'} />
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content' onClick={() => this.props.onClickCard(9)}>
                            <CartItem image={Rambutan} title={'Rambutan'} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fruit;