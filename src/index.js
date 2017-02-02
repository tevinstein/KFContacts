//@flow

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import createDataStore from './helpers/createDataStore';

import CONTACTS from './db/contacts';

let initialState = {
  contacts: CONTACTS,
  selectedContact: null,
};

let dataStore = createDataStore(initialState, () => {
  update();
});

function update() {
  ReactDOM.render(<App dataStore={dataStore}/>, document.getElementById('app'));
}

update();
