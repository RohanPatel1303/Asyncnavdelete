/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Datadisplay from './screens/datadisplay';
import Root from './components/Rootrenderer';
import FlatList_1 from './screens/Flatlist';
import Grid from './screens/grid';
import Basic from './screens/Swipablelist';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Basic);
