import React from 'react';
import {AppRegistry} from 'react-native';

import App from './app/components/App';

export default class ReactNativeCodeReuse extends React.Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('ReactNativeCodeReuse', () => ReactNativeCodeReuse);
