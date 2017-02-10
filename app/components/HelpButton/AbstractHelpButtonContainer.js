import React from 'react';
import HelpButtonView from './HelpButtonView';

export default class AbstractHelpButtonContainer extends React.Component {
    constructor(props) {
        if (new.target === AbstractHelpButtonContainer) {
            throw new TypeError('Cannot construct AbstractHelpButtonContainer instances directly');
        }
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        throw new TypeError('Abstract method onClick is not implemented');
    }
    
    render() {
        return (
            <HelpButtonView onClick={this.onClick} />
        );
    }
}