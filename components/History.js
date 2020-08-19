import React, { useState, useEffect } from "react";
import Nav from './Nav'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  ListView,
} from "react-native";
import { darkGreen, textGray } from "../theme";
// import apiUrl from '../apiConfig'
import axios from 'axios'
import ShowHistory from './ShowHistory'

export default function History({ navigation }) {
    const [trails, setTrails] = useState([])

    // const fetchJson = async (url) => {
    //     const response = await fetch(url);
    //     return response.json();
    //   };

    // useEffect(() => {
    //     fetchJson("http://localhost:3000/trails")
    //   .then(({ disclaimer }) => setData(disclaimer));
    // //     const makeAPICall = () => {
    // //       try {
    // //         const response = axios('http://localhost:3000/trails')
    // //         // setTrails(response)
    // //         console.log('this', response)
    // //       } catch (err) {
    // //         console.error("test", err)
    // //       }
    // //     }
    // //     makeAPICall()
    //   }, [])

    function getData() {
        return fetch('http://localhost:3000/trails')
          .then(response => response.json())
          .then(responseJson => {
            return responseJson;
          })
          .catch(error => {
            console.error(error);
          });
      }
      console.log(getData())

    // const getData = async () => {
    //     var getData = await getImgSize("<Image URL>");
    //     console.log(imgSize);
    //   }

  return (
    <View style={styles.container}>
        {/* <ShowHistory /> */}
      
      <Nav navigation={navigation} />
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

});
