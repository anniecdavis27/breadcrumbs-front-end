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

export default function Home({ navigation }) {
    
  return (
      <>
    <View style={styles.container}>
      <Image
        style={styles.whiteLogo}
        source={require("../logos/Breadcrumbs-WH.png")}
      />
      
      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate("Sign In")}
        underlayColor="green"
      >
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableHighlight>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Not registered yet? Sign up </Text><Text style={styles.hl} onPress={() => navigation.navigate("Register")}>here!</Text>
      </View>
      </View>
      </>
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
    justifyContent: "center",
  },
  text: {
      color: textGray,
  },
  hl: {
      color: '#ffffff',
  },
  textContainer: {
      display: "flex",
      flexDirection: "row",
  }
});
