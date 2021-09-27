import React from 'react';
import { hydrate } from 'react-dom';
import App from 'App/App';

const rootElement = document.getElementById('calendar_plugin');

hydrate(<App />, rootElement);
