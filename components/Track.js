import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableHighlight,
  Image
} from "react-native";
import { darkGreen, textGray, darkRed, white } from "../theme";
import MapView, {
  PROVIDER_GOOGLE,
  LATITUDE,
  LONGITUDE,
  AnimatedRegion,
  Marker,
  google,
} from "react-native-maps";
// import { getDistance, getPreciseDistance } from 'geolib';

export default function Track({ navigation, initialParams }) {
  const [data, setData] = useState({});
  const [startPoint, setStartPoint] = useState({lat: 0, lng: 0})
  const [endPoint, setEndPoint] = useState({lat: 0, lng: 0})
  const [pdis, setPdis] = useState()
  const [startTrue, isStartTrue] = useState(false)
  const [endTrue, isEndTrue] = useState(false)
  const [timer, setTimer] = useState(null)
  const [location, setLocation] = useState({
    latitude: 43.96,
    longitude: -74.04,
    latitudeDelta: 0.09,
    longitudeDelta: 0.05,
  });

const [currentPin, setPin] = useState({})
const [trackedPins, setTrackedPins] = useState([{}])

  useEffect(() => {
    let mounted = true;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = position;

        setData(data);
        setLocation({
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.05,
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    mounted = false;
  }, []);

  const addStart = (e) => {
    e.preventDefault();
    if (startTrue === false) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const data = position;
          setStartPoint({
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
          });
          
        },
        (error) => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      )} else {
          return Alert.alert("Start Point has already been set")
      }
    isStartTrue(true)
    // preciseDistance()
    dropPin();
  };
  
  function dropPin(){
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const data = position;
          setPin({
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
          });
          
        },
        (error) => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      )
      setTrackedPins([...trackedPins, currentPin])
        console.log('these are tracked pins', trackedPins)
        setTimer(setTimeout(dropPin, 1000));

        //FIGURING OUT HOW TO CREATE A NEW PIN EVERY TIME THIS DROP PIN FUNCTION RUNS -- THIS DOESNT WORK
        // return <Marker
        // coordinate={{
        //   latitude: currentPin.latitude,
        //   longitude: currentPin.longitude,
        // }}
    //   ><Text>Crumb</Text></Marker>
}

  const addEnd = (e) => {
    e.preventDefault();
    if (endTrue === false) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const data = position;
          setEndPoint({
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
          });
        },
        (error) => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      )} else {
        return Alert.alert("End Point has already been set")
    }
    // console.log(location);
    // const latlng = { lat: location.latitude, lng: location.longitude };
    // console.log(latlng);
    isEndTrue(true)
    setTimer(clearTimeout(timer))
    console.log('tracked pins', trackedPins)
  };

//   const preciseDistance = () => {
//     let precDis = getPreciseDistance(
//      { latitude: startPoint.latitude, longitude: startPoint.longitude },
//      { latitude: location.latitude, longitude: location.longitude }
//    );

//    setPdis(precDis)
//    console.log("pdis", pdis)
   
//  };

  const resetTrack = (e) => {
      e.preventDefault()
      isEndTrue(false)
      isStartTrue(false)
  }

//   console.log(startPoint)
//   console.log(endPoint)

  
console.log('pinned', currentPin)
  
//   console.log("End Point", endPoint)
//   console.log("tracked pins", trackedPins)

//   function placeMarker(location) {
//     var clickedLocation = new google.maps.LatLng(location);
//     var marker = new google.maps.Marker({
//         position: location,
//         map: map
//     });
// }

// google.maps.event.addListener(map, 'click', function(event) {
//     placeMarker(event.latLng);
// })

  return (
    <View style={styles.container}>
      <Text>My location is</Text>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        rotateEnabled={true}
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE}
        region={location}
      >
        {startTrue ? <Marker
          coordinate={{
            latitude: startPoint.latitude,
            longitude: startPoint.longitude,
          }}
        ><Image
        style={styles.markers}
        source={require("../markers/StartMarker.png")}
      /></Marker> : null}

         {endTrue ? <Marker
          coordinate={{
            latitude: endPoint.latitude,
            longitude: endPoint.longitude,
          }}
        ><Image
        style={styles.markers}
        source={require("../markers/EndMarker.png")}
      /></Marker> : null}
      </MapView>
      <View style={styles.nav}>
        <TouchableHighlight
          style={styles.navItemOne}
          underlayColor="green"
          onPress={addStart}
        >
          <Text style={styles.btnText}>Start</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.navItemTwo}
          underlayColor="green"
          onPress={addEnd}
        >
          <Text style={styles.btnText}>End</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.navItemThree}
          underlayColor="green"
          onPress={resetTrack}
        >
          <Text style={styles.btnText}>Save/Clear</Text>
        </TouchableHighlight>
      </View>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-evenly",
    bottom: 25,
    width: "100%",
  },
  navItemOne: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#4C8100",
    justifyContent: "center",
    backgroundColor: "#4C8100",
    padding: 10,
  },
  navItemTwo: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#810000",
    justifyContent: "center",
    backgroundColor: "#810000",
    padding: 10,
  },
  navItemThree: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#004CA0",
    justifyContent: "center",
    backgroundColor: "#004CA0",
    padding: 10,
  },
  btnText: {
    color: textGray,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Helvetica",
  },
  
});
