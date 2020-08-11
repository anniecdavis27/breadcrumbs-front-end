import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";
import { darkGreen, textGray } from "../theme";

export default function Register() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.whiteLogo}
        source={require("../logos/Breadcrumbs-WH.png")}
      />
      {/* <Button title="Sign In" style={styles.btn} color="#b5b5b5" />
      <StatusBar style="auto" /> */}
      <TouchableHighlight
      style={styles.btn}
      underlayColor="orange"
    >
        <Text style={styles.btnText}>
          Register
        </Text>

    </TouchableHighlight>
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

  whiteLogo: {
    width: 200,
  },
  btn: {
      margin: 20,
      width: 150,
      height: 60,
      borderWidth: 5,
      borderColor: textGray,
      borderRadius: 40,
      display: "flex",
      justifyContent: "center"
  }
});
