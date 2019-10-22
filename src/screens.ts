import { Navigation } from 'react-native-navigation';
import BarSearch from './screens/bar-search/bar-search';
import BarDetails from './screens/bar-details/bar-details';


export function registerScreens(store, Provider) {
  Navigation.registerComponent('BarDetails', () => BarDetails);
  Navigation.registerComponent('BarSearch', () => BarSearch);
}