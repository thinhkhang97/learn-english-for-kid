import React, { Component } from 'react'

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

class ContentVehicle extends Component {
    render() {
        return (
            this.props.cardId == 1 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Car}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Car</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 2 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Truck}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Truck</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 3 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Bus}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Bus</h1>
                        </div>
                    </div>
                </div> 
            : this.props.cardId == 4 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Bicycle}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Bicycle</h1>
                        </div>
                    </div>
                </div>    
            : this.props.cardId == 5 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Train}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Train</h1>
                        </div>
                    </div>
                </div>                       
            : this.props.cardId == 6 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Flight}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Flight</h1>
                        </div>
                    </div>
                </div> 
            : this.props.cardId == 7 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Van}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Van</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 8 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Ship}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Ship</h1>
                        </div>
                    </div>
                </div>
            :
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Taxi}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Taxi</h1>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ContentVehicle;