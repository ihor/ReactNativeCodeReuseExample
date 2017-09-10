import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import AppView from './AppView';

export default class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppView/>
            </Provider>
        )
    }
}