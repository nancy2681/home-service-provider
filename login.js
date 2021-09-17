import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import firebase from "firebase";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import styles from "./loginStyle";

export default class login extends React.Component {
  state = { change: true, password: "", email: "", data: "", error: "" };
  pressed = () => {
    if (this.state.change == false) this.setState({ change: true });
    if (this.state.change == true) this.setState({ change: false });
  };
  em = (text) => {
    this.setState({ email: text });
  };
  password = (num) => {
    this.setState({ password: num });
  };
  riddhi = () => {
    this.props.navigation.navigate("dflt");
  };
  navigate = async () => {
    firebase
      .database()
      .ref("/")
      .on("value", async (snapshot) => {
        await this.setState({ data: snapshot.val().user });
        var emails = [];
        var passwords = [];
        for (let i = 1; i < this.state.data.length; i++) {
          emails.push(this.state.data[i].email);
          passwords.push(this.state.data[i].password);
        }
        for (let i = 0; i < emails.length; i++) {
          if (
            emails[i] === this.state.email &&
            passwords[i] === this.state.password
          ) {
            this.setState({ error: "" });
            this.props.navigation.navigate("Xyz");
          }
          if (
            emails[i] !== this.state.email ||
            passwords[i] !== this.state.pass
          ) {
            this.setState({ error: "Incorrect email or password!" });
          }
        }
      });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <TouchableOpacity style={styles.arrowIcon} onPress={this.riddhi}>
            <IconAntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <Text style={styles.heading}>HomeOrzo</Text>
        </View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
        <View style={styles.view4}></View>
        <View style={styles.view5}></View>

        <Text style={styles.lgnTxt}>Login</Text>

        <View style={styles.view6}>
          <Text style={styles.txt1}>Email</Text>
          <TextInput onChangeText={this.em} style={styles.txtInput}></TextInput>
          <Text style={styles.txt2}>Password</Text>
          <View style={styles.view}>
            <TextInput
              secureTextEntry={this.state.change}
              onChangeText={this.password}
              style={styles.txtInput}
            ></TextInput>
            <TouchableOpacity onPress={this.pressed} style={styles.icon}>
              <IconEntypo name="eye" size={25} />
            </TouchableOpacity>
          </View>
          <Text style={styles.error}>{this.state.error}</Text>
          <TouchableOpacity onPress={this.navigate} style={styles.btn}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txt3}>Forgot your Password?</Text>
      </View>
    );
  }
}
