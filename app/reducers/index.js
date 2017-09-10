import { combineReducers } from 'redux';

import help, * as helpSelectors from './help';

export default combineReducers({
    help,
});

export const getHelpRequestsNumber = store => helpSelectors.getRequestsNumber(store.help);
