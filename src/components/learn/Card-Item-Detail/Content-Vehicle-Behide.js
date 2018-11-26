import React, { Component } from 'react' 

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faCaretLeft, faCaretRight, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faEnvelope, faKey, faCaretLeft, faCaretRight, faVolumeUp);

class ContentVehicleBehide extends Component {
    render() {
        return (
            this.props.cardId == 1 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Car</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>['kɑːr]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x"/>
                            </span>
                        </div>
                    </div>                                                            
                </div>
            : this.props.cardId == 2 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Truck</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[trʌk]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x"/>
                            </span>
                        </div>
                    </div>                                                            
                </div>
            : this.props.cardId == 3 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Bus</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[bʌs]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x"/>
                            </span>
                        </div>
                    </div>                                                            
                </div> 
            : this.props.cardId == 4 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Bicycle</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈbaɪ.sə.kəl]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>    
            : this.props.cardId == 5 ? 
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Train</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[treɪn]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>                        
            : this.props.cardId == 6 ? 
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Flight</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[flaɪt]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div> 
            : this.props.cardId == 7 ? 
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Van</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[væn]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 8 ? 
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Ship</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ʃɪp]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>
            :
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Taxi</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈtæk.si]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ContentVehicleBehide;