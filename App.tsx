import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getEstablishmentTypes } from '../src/api/routes/find-establishment-types';
import { getAllWineBars } from './src/api/routes/find-bars';
import { Navigation } from 'react-native-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
// import { goToBarSearch } from './src/navigation'
// import { registerScreens } from './src/screens';
// import HomeScreen from '../cheers_ui/src/screens/home-screen';
// import BarDetails from '../cheers_ui/src/screens/bar-details';
// import BarSearch from '../cheers_ui/src/screens/bar-search';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { bars: []};
  }

  async getResult() {
   let response = await getAllWineBars();
   const barsData = response.data.restaurants.map(record => {
       return record.restaurant;
     });
     this.setState({ bars: barsData });
  }
  
  componentWillMount(){
    this.getResult();
  }
  render() {
    console.log('THIS IS BARS YO',this.state.bars);
    return (
	<ScrollView>
	<View>
		<Card containerStyle={{padding: 0}} >
			{
			this.state.bars.map((bar) => {
			return (
				<View>
				<ListItem
				key={bar.id}
				title={bar.name}
				subtitle={bar.location.address}
				/>
				<Button
				small
				raised
				rounded
				>Hello</Button>
				</View>
			);
			})
			}
		</Card>
	</View>
	</ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
