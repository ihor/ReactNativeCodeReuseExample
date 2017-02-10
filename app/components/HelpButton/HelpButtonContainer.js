import React from 'react';
import AbstractHelpButtonContainer from './AbstractHelpButtonContainer';

export default class HelpButtonContainer extends AbstractHelpButtonContainer {
    onClick() {
        alert('How can we help you?');
    }
}