import { PluginProps } from 'interfaces';
import { createContext } from 'react';

interface Context {
  onLeftArrow: PluginProps['onLeftArrow'];
  onRightArrow: PluginProps['onRightArrow']
}

const ButtonsCallbacks = createContext({} as Context);

export default ButtonsCallbacks;
