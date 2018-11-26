import React, { Component } from 'react'

//import components
import CartItem from './card-item/CardItem'

//Import images for animal
import Car from '../image/Vehicles/car.png'
import Truck from '../image/Vehicles/truck.png'
import Bus from '../image/Vehicles/bus.png'
import Bicycle from '../image/Vehicles/bicycle.png'
import Train from '../image/Vehicles/train.png'
import Flight from '../image/Vehicles/flight.png'
import Van from '../image/Vehicles/van.png'
import Ship from '../image/Vehicles/Ship.png'
import Taxi from '../image/Vehicles/taxi.png'

class Vehicles extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class="card-content" onClick={() => this.props.onClickCard(1)}>
                            <CartItem image={Car} title={"Car"} />
                        </div>
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class="card-content" onClick={() => this.props.onClickCard(2)}>
                            <CartItem image={Truck} title={"Truck"} />
                        </div>
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class="card-content" onClick={() => this.props.onClickCard(3)}>
                            <CartItem image={Bus} title={"Bus"} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class='card-content' onClick={() => this.props.onClickCard(4)}>
                            <CartItem image={Bicycle} title={"Bicycle"} />
                        </div>
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class='card-content' onClick={() => this.props.onClickCard(5)}>
                            <CartItem image={Train} title={"Train"} />
                        </div>
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class='card-content' onClick={() => this.props.onClickCard(6)}>
                            <CartItem image={Flight} title={"Flight"} />
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class='card-content' onClick={() => this.props.onClickCard(7)}>
                            <CartItem image={Van} title={"Van"} />
                        </div>
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class='card-content' onClick={() => this.props.onClickCard(8)}>
                            <CartItem image={Ship} title={"Ship"} />
                        </div>
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class='card-content' onClick={() => this.props.onClickCard(9)}>
                            <CartItem image={Taxi} title={"Taxi"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vehicles;