import React from 'react';
import { View } from 'react-native';

import styles from '../../native/styles';

import Title from '../Title';
import HelpButton from '../HelpButton';

export default () =>
    <View style={styles.container}>
        <Title/>
        <HelpButton/>
    </View>;