import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getEstablishments } from 'src/api/routes/find-bar';


export default class HelloWorldApp extends Component {
  getResult(){
  // const response = await getEstablishments();
  // console.log('response', response);
  return 'hehehe';
  };
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world! {this.getResult()}</Text>
      </View>
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

// export default function App() {

//   const [result, setResult] = useState(null);

  // const getResult(
  //   const response = await getEstablishments.get();
  //   setResult(response.data);
  //   console.log('response', response);
  // );

//   useEffect(() => {
//     getResult();
//   }, []);

//   if (!result){
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Here is a list of bars that are in Dallas</Text>
//       <Text>{result}</Text>

//     </View>
//   );
// }