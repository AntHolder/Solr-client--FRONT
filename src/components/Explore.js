import * as React from 'react';

import { View,ScrollView,StyleSheet,Image, ImageBackground} from 'react-native';
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
  Card
} from "react-native-elements";
import FlareContainer from "./FlareContainer.js";
import { useState, useEffect} from 'react';


function Explore({ navigation },props) {
  
  const getFlares = () => { 
    fetch("http://0.0.0.0:3000/flares")
    .then(resp => resp.json())
    .then(fflares => updateFlares(fflares))
  };
  let [flares, updateFlares] = useState([]);
  
  useEffect(()=> {
    getFlares()
  },[])
  
  // getFlares()
  console.log("explore props:",flares)

  
  return (
      <View>
    
      <Button style={styles.ExploreButton} title="Back to Login" onPress={() => navigation.navigate('Login')} />
     
      <FlareContainer flares={flares}/>
  </View>
  );
}
export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    bottom: 2,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    top: 4,
  },
  ExploreButton: {
    position: "absolute",
    justifyContent: "center",
    flex: 1,
    top: 115,
    right:1,
    height: 100,
    width: 120,
  }
});

