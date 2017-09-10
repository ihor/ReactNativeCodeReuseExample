import React from 'react';
import AboutButtonView from './AboutButtonView';

export default class AbstractAboutButtonContainer extends React.Component {
    constructor(props) {
        // new.target is not working on Android
        // if (new.target === AbstractAboutButtonContainer) {
        //     throw new TypeError('Cannot construct AbstractAboutButtonContainer instances directly');
        // }

        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        throw new TypeError('Abstract method onClick is not implemented');
    }
    
    render() {
        return <AboutButtonView onClick={this.onClick}/>;
    }
}