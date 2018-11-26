import React, { Component } from 'react'

//import images
import Apple from '../image/fruit/12316860561101736632rg1024_apple.svg.med.png'
import Orange from '../image/fruit/Large_Painted_Orange_PNG_Clipart.png'
import Pineapple from '../image/fruit/Pineapple.png'
import Banana from '../image/fruit/banana-clipart-sweet-food-4.png'
import Grape from '../image/fruit/f1b29ee56628bccf15df81d70c329643.png'
import StartFruit from '../image/fruit/Carambola_Transparent_Clip_Art_Image.png'
import Durian from '../image/fruit/61TBIlJAJLL.png'
import Papaya from '../image/fruit/Papaya-PNG-Vector-Clipart-Image.png'
import Rambutan from '../image/fruit/transcoder.png'

class ContentFruit extends Component {
    render() {
        return (
            this.props.cardId == 1 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Apple}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Apple</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 2 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Orange}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Orange</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 3 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Pineapple}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Pineapple</h1>
                        </div>
                    </div>
                </div> 
            : this.props.cardId == 4 ?
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Banana}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Banana</h1>
                        </div>
                    </div>
                </div>    
            : this.props.cardId == 5 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Grape}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Grape</h1>
                        </div>
                    </div>
                </div>                       
            : this.props.cardId == 6 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={StartFruit}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>StartFruit</h1>
                        </div>
                    </div>
                </div> 
            : this.props.cardId == 7 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Durian}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Durian</h1>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 8 ? 
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Papaya}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Papaya</h1>
                        </div>
                    </div>
                </div>
            :
                <div>
                    <div class='card-item-img mt-2'>
                        <img class="img-fluid img-card-custome" alt="Responsive image" src={Rambutan}></img>
                    </div>
                    <div class='card-info mt-2'>
                        <div class='info-box'>
                            <h1>Rambutan</h1>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ContentFruit;