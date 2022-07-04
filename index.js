/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Root from './components/Rootrenderer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
