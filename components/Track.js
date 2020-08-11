import React, { useState, useEffect } from "react";
import Nav from './Nav'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  Dimensions,
  Alert
} from "react-native";
import { darkGreen, textGray } from "../theme";
import MapView, { PROVIDER_GOOGLE, LATITUDE, LONGITUDE, AnimatedRegion } from 'react-native-maps';

export default function Track({ navigation }) {
    const [latitude, setlatitude] = useState({})
    const [longitude, setlongitude] = useState({})
    
		useEffect(
            () => {
                let mounted = true
            navigator.geolocation.getCurrentPosition(
			position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);
                
                setlatitude({ latitude });
                setlongitude({ longitude });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    mounted = false
    },[setlatitude])

    console.log(latitude, longitude)


  return (
    <View style={styles.container}>
        <Text>My location is</Text>
    {/* <MapView style={styles.mapStyle} /> */}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: textGray,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Helvetica",
  },
  btn: {
    margin: 20,
    width: 150,
    height: 60,
    borderWidth: 5,
    borderColor: textGray,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});
