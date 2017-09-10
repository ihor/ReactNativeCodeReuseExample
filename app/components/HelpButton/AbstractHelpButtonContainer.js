import React from 'react';
import PropTypes from 'prop-types';

import HelpButtonView from './HelpButtonView';

export default class AbstractHelpButtonContainer extends React.Component {
    constructor(props) {
        // new.target is not working on Android
        // if (new.target === AbstractHelpButtonContainer) {
        //     throw new TypeError('Cannot construct AbstractHelpButtonContainer instances directly');
        // }

        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.displayMessage(`You asked for help ${this.props.helpRequests + 1} time(s)`);
        this.props.helpRequested();
    }

    displayMessage(message) {
        throw new TypeError('Abstract method displayMessage is not implemented');
    }
    
    render() {
        return <HelpButtonView onClick={this.onClick}/>;
    }
}

AbstractHelpButtonContainer.propTypes = {
    helpRequests: PropTypes.number.isRequired,
    helpRequested: PropTypes.func.isRequired,
};