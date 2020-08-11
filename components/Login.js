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
import { darkGreen, textGray, white } from "../theme";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.whiteLogo}
        source={require("../logos/Breadcrumbs-WH.png")}
      />
      
      <TextInput style={styles.textInput}
        placeholder="Username"></TextInput>
        <TextInput style={styles.textInput} secureTextEntry={true}
        placeholder="Password"></TextInput>
      <TouchableHighlight
      onPress={() => navigation.navigate("Dash")}
      style={styles.btn}
      underlayColor="green"
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
},
textInput: {
    backgroundColor: white,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: 275,
    marginTop: 30,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: textGray,
    borderRadius: 8, 
}
});
