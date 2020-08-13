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

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.whiteLogo}
        source={require("../logos/Breadcrumbs-WH.png")}
      />
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.aboutText}>Ze na er bevaarbaar te dergelijke moeilijker. Zake dure jaar vele des wie. Met grooter afstand zit gronden product smelter. Vochtigen plaatsing van herhaling omgewoeld gedeelten far dit weg. Denken gerust gelukt wouden dat mei elk konden. Spelen zoo poeloe kleine hoogte als. Na de de alle daar zich of. Enkele ik en is jammer moeten. Caoutchouc spoorwegen dergelijke bescheiden te tinwinning kwartspuin in. 

Onder staat later ik komst en banka te. Tonnen en tengka spuwen is en ad. Toekomst aan heb verbindt zandlaag hen landbouw men. Al werkten ontdekt ze te na valorem. Eischen was dit planter per aan zooveel. Ton producten vernieuwd provincie die. Dier daad dure af te. Dieren dus den omtrek der als eerste. Binnenste voorkomen is nabijheid ingenieur in zuidgrens. 

 </Text>
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

aboutText: {
    color: textGray,
    padding: 22,
    fontSize: 16,
},
header: {
    color: textGray,
    fontSize: 25,
    paddingTop: 22,
} 

});
