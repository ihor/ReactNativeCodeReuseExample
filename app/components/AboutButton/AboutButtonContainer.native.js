import React from 'react';
import { Alert } from 'react-native';

import AbstractAboutButtonContainer from './AbstractAboutButtonContainer';

export default class AboutButtonContainer extends AbstractAboutButtonContainer {
    onClick() {
        Alert.alert('This is an example application to show how to reuse code between React and React Native');
    }
}