import React from "react";
import Nav from './Nav'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";
import { darkGreen, textGray } from "../theme";

export default function Dash({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.whiteLogo}
        source={require("../logos/Breadcrumbs-WH.png")}
      />
      {/* <Button title="Sign In" style={styles.btn} color="#b5b5b5" />
      <StatusBar style="auto" /> */}
      <TouchableHighlight style={styles.btn} underlayColor="green">
        <Text style={styles.btnText}>Dash</Text>
      </TouchableHighlight>
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
  nav: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    width: "25%",
    height: 85,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: darkGreen,
    justifyContent: "center",
    backgroundColor: "#0d2e00"
  },
});
