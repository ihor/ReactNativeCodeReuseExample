import React from 'react';
import Button from 'react-native-button';

import styles from '../../native/styles';

export default props => 
    <Button
        onPress={props.onClick}
        style={styles.buttonText}
        containerStyle={styles.button}>
        About
    </Button>;