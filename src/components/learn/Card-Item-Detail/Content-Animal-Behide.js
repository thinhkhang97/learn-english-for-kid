import React, { Component } from 'react'

//import components
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faCaretLeft, faCaretRight, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faEnvelope, faKey, faCaretLeft, faCaretRight, faVolumeUp);


class ContentAnimalBehide extends Component {
    render() {
        return (
            this.props.cardId == 1 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Bee</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[biː]</h4>
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
                            <h3><b>Dragon</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈdræɡ.ən]</h4>
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
                            <h3><b>Turtle</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈtɝː.t̬əl]</h4>
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
                            <h3><b>Dinosaurs</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈdaɪ.nə.sɔːr]</h4>
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
                            <h3><b>Woodpecker</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈwʊdˌpek.ɚ]</h4>
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
                            <h3><b>Lion</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈlaɪ.ən]</h4>
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
                            <h3><b>Snake</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[sneɪk]</h4>
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
                            <h3><b>Cow</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[kaʊ]</h4>
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
                            <h3><b>Mouse</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[maʊs]</h4>
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

export default ContentAnimalBehide;