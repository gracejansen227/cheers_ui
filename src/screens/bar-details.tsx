// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { getEstablishmentTypes } from '../api/routes/find-establishment-types.ts';
// import { getAllBars } from '../api/routes/find-bars.ts';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

// export default class BarDetails extends Component {

//   // constructor(props){
//   //   super(props);
//   //   this.state = { bars: []};
//   // }
//   // async getEstablishments() {
//   //   // const response = await getEstablishments;
//   //   // console.log('response', response);
//   //  let response = await getEstablishmentTypes();
//   //  const barsData = response.data.establishments.map(record => {
//   //      return record.establishment.name;
//   //    });
//   //    this.setState({ bars: barsData });
//   // }

//   // async getResult() {
//   //  let response = await getAllBars();
//   //  const barsData = response.data.restaurants.map(record => {
//   //      return record.restaurant.id;
//   //    });
//   //    this.setState({ bars: barsData });
//   // }
  
//   // componentWillMount(){
//   //   this.getResult();
//   // }
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       {/* {this.state.bars.map(bar => (
//         <Text>Hello, {bar}!</Text>)
//       )} */}
//       <Text> Hi boo</Text>
//       </View>
//     );
//   }
// }


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });


import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getEstablishmentTypes } from '../api/routes/find-establishment-types.ts';
import { getAllWineBars } from '../api/routes/find-bars.ts';
import { Navigation, createStackNavigator, createAppContainer } from 'react-navigation';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'
// import { goToBarSearch } from './src/navigation'
// import { registerScreens } from './src/screens';
// import HomeScreen from '../cheers_ui/src/screens/home-screen';
// import BarDetails from '../cheers_ui/src/screens/bar-details';
// import BarSearch from '../cheers_ui/src/screens/bar-search';

export default class BarDetails extends Component {

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
    return (
	<ScrollView>
	<View>
		<Header
			containerStyle={{ backgroundColor: '#1ac0c6'}}
			leftComponent={{ icon: 'menu', color: '##fff'}}
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
				onPress={() => this.props.navigation.navigate('Search')}
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