import React from 'react';
import { Alert } from 'react-native';

import AbstractHelpButtonContainer from './AbstractHelpButtonContainer';

export default class HelpButtonContainer extends AbstractHelpButtonContainer {
    displayMessage(message) {
        Alert.alert(message);
    }
}