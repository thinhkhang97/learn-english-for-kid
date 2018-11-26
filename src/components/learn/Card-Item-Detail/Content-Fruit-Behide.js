import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faCaretLeft, faCaretRight, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faEnvelope, faKey, faCaretLeft, faCaretRight, faVolumeUp);

class ContentFruitBehide extends Component {
    render() {
        return (
            this.props.cardId == 1 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Apple</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>['æpl]</h4>
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
                            <h3><b>Orange</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>['ɔrindʒ]</h4>
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
                            <h3><b>Pineapple</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>['painæpl]</h4>
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
                            <h3><b>Banana</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[bə'nɑ:nə]</h4>
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
                            <h3><b>Grape</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ɡreɪp]</h4>
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
                            <h3><b>StarFruit</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈstɑːr.fruːt]</h4>
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
                            <h3><b>Durian</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈdʊr.i.ən]</h4>
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
                            <h3><b>Papaya</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[pəˈpaɪ.ə]</h4>
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
                            <h3><b>Rambutan</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ræmˈbuː.tən]</h4>
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

export default ContentFruitBehide;