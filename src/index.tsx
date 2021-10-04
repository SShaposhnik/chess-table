import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App/App';
import { PluginProps } from 'interfaces';

const renderApp = (props: PluginProps) => {
  const { containerId } = props;
  const rootElement = document.getElementById(containerId);

  // eslint-disable-next-line react/jsx-props-no-spreading
  ReactDOM.render(<App {...props} />, rootElement);
};

window.BelePlugin = (props: PluginProps) => renderApp(props);
