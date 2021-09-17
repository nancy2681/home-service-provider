import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./defaultStyle";
//1 krta vdhre vastu export thti hoi to curly braces avse

export default class dflt extends React.Component {
  hetan = () => {
    this.props.navigation.navigate("Ghjk");
  };
  navigate = () => {
    this.props.navigation.navigate("Asdf");
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.t1}>Home Service Provider</Text>
        <Text style={styles.t2}>Your Home Service Expert</Text>
        <Image
          source={{
            uri: "https://deorwineinfo.b-cdn.net/wp-content/themes/deorwine/assets/img/home-service-1.png",
          }}
          style={styles.img}
        />
        <View style={styles.view}>
          <TouchableOpacity onPress={this.navigate} style={styles.btn1}>
            <Text style={styles.lgn}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={this.hetan}>
            <Text style={styles.sgn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
