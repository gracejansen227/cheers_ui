import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import { getEstablishmentTypes } from '../src/api/routes/find-establishment-types';
import { getAllWineBars } from './src/api/routes/find-bars';
import { Navigation } from 'react-native-navigation';
import { Card, Screen, Tile, Title, Subtitle, ListView, NavigationBar } from '@shoutem/ui';
// import { goToBarSearch } from './src/navigation'
// import { registerScreens } from './src/screens';
// import HomeScreen from '../cheers_ui/src/screens/home-screen';
// import BarDetails from '../cheers_ui/src/screens/bar-details';
// import BarSearch from '../cheers_ui/src/screens/bar-search';

export default class App extends Component {

  constructor(props){
    super(props);

	this.renderRow = this.renderRow.bind(this);
    this.state = { bars: [], fontsAreLoaded: false };
  }

  async getResult() {
   let response = await getAllWineBars();
   const barsData = response.data.restaurants.map(record => {
       return record.restaurant;
     });
     this.setState({ bars: barsData, fontsAreLoaded: true });
  }
  
  componentWillMount = async() => {
	await Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });
    this.getResult();
  }

	renderRow(bar){
		if (!bar){
			return null;
		}
		if (!this.state.fontsAreLoaded){
			return <AppLoading />;
		}
		return (
			<View>
				<Tile>
					<Title styleName="md-gutter-bottom">{bar.name}</Title>
					<Subtitle styleName="sm-gutter-horizontal">{bar.location.address}</Subtitle>
				</Tile>
				<Divider styleName="line" />
			</View>
		)
	}

	render() {
		const { bars } = this.state.bars;
		return (
			<Screen>
			<NavigationBar
				title="Bars"
				styleName="inline"
			/>
			 <ListView
        		data={bars}
        		renderRow={this.renderRow}
      		/>
			</Screen>
		);
	}

}
