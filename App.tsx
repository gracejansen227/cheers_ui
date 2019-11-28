import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getEstablishmentTypes } from '../src/api/routes/find-establishment-types';
import { getAllWineBars } from './src/api/routes/find-bars';
import { Navigation } from 'react-navigation';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'
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
    const { onBarPress } = this.props;
    return (
	<ScrollView>
	<View>
		<Header
			containerStyle={{ backgroundColor: '#1ac0c6'}}
			leftComponent={{ icon: 'menu', color: '#fb7756'}}
			centerComponent={{ text: 'cheers', style: { color: '#fff' } }}
  			rightComponent={{ icon: 'home', color: '#fb7756' }}
		/>
		<Card containerStyle={{padding: 0}} >
			{
			this.state.bars.map((bar) => {
			return (
				<View>
				<ListItem
				key={bar.id}
				title={bar.name}
				subtitle={bar.location.address}
				bottomDivider
				onPress={() => onBarPress(bar)}
				/>
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
    backgroundColor: '#fdfa66',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
