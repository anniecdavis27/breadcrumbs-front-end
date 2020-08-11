import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  TextInput
} from "react-native";
import { darkGreen, textGray } from "../theme";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.whiteLogo}
        source={require("../logos/Breadcrumbs-WH.png")}
      />
      <TextInput style={{height: 40}}
        placeholder="Type here to translate!"></TextInput>
      <TouchableHighlight
      style={styles.btn}
      underlayColor="orange"
    >
        
        <Text style={styles.btnText}>
          Sign In
        </Text>

    </TouchableHighlight>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Not registered yet? Sign up </Text><Text style={styles.hl} onPress={() => navigation.navigate("Register")}>here!</Text>
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
