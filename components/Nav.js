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

export default function Nav({ navigation }) {
  return (
      <View style={styles.nav}>
          <TouchableHighlight style={styles.navItem} underlayColor="green" onPress={() => navigation.navigate("Dash")}>
          <Text style={styles.btnText}>D</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navItem} underlayColor="green" onPress={() => navigation.navigate("History")}>
          <Text style={styles.btnText}>H</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navItem} underlayColor="green" onPress={() => navigation.navigate("Account")}>
          <Text style={styles.btnText}>A</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navItem} underlayColor="green" onPress={() => navigation.navigate("Track")}>
          <Text style={styles.btnText}>T</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navItem} underlayColor="green" onPress={() => navigation.navigate("About")}>
          <Text style={styles.btnText}>A</Text>
        </TouchableHighlight>
      </View>
  );
}

const styles = StyleSheet.create({
    nav: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        width: "100%",
      },
      navItem: {
        width: "20%",
        height: 85,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: darkGreen,
        justifyContent: "center",
        backgroundColor: "#0d2e00"
      },
      btnText: {
        color: textGray,
        textAlign: "center",
        fontSize: 22,
        fontFamily: "Helvetica",
      },
});
