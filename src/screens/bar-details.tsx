import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getEstablishmentTypes } from '../api/routes/find-establishment-types.ts';
import { getAllBars } from '../api/routes/find-bars.ts';
import { Navigation } from 'react-navigation';

export default class BarDetails extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = { bars: []};
  // }
  // async getEstablishments() {
  //   // const response = await getEstablishments;
  //   // console.log('response', response);
  //  let response = await getEstablishmentTypes();
  //  const barsData = response.data.establishments.map(record => {
  //      return record.establishment.name;
  //    });
  //    this.setState({ bars: barsData });
  // }

  // async getResult() {
  //  let response = await getAllBars();
  //  const barsData = response.data.restaurants.map(record => {
  //      return record.restaurant.id;
  //    });
  //    this.setState({ bars: barsData });
  // }
  
  // componentWillMount(){
  //   this.getResult();
  // }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* {this.state.bars.map(bar => (
        <Text>Hello, {bar}!</Text>)
      )} */}
      <Text> Hi boo</Text>
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
