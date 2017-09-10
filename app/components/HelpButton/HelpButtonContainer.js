import React from 'react';
import AbstractHelpButtonContainer from './AbstractHelpButtonContainer';

export default class HelpButtonContainer extends AbstractHelpButtonContainer {
    displayMessage(message) {
        alert(message);
    }
}