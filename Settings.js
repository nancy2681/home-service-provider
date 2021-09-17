import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./settingStyle";

export default class Pqr extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.heading}>Account Info and Settings</Text>
        <View style={styles.view}>
          <Text style={styles.txt}>bhadiyadranancy@gmail.com</Text>
          <Text style={styles.txt}>Password:**********</Text>
          <Text style={styles.txt}>Phone:1234567890</Text>
          <View style={styles.line} />
          <TouchableOpacity style={styles.btn}>
            <IconMaterialCommunityIcons
              name="email"
              size={18}
              style={styles.icon}
            />
            <Text style={styles.content}>Change email</Text>
            <IconFontisto
              name="angle-right"
              size={18}
              style={styles.iconReturns}
            />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.btn}>
            <IconEntypo name="lock" size={18} style={styles.icon} />
            <Text style={styles.content}>Change Password</Text>
            <IconFontisto
              name="angle-right"
              size={18}
              style={{ color: "#7393B3", padding: "3%", marginLeft: "30%" }}
            />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.btn}>
            <IconFontAwesome5 name="phone-alt" size={18} style={styles.icon} />
            <Text style={styles.content}>Change Phone</Text>
            <IconFontisto
              name="angle-right"
              size={18}
              style={styles.iconReturns}
            />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.btn}>
            <IconMaterialIcons
              name="location-pin"
              size={18}
              style={styles.icon}
            />
            <Text style={styles.content}>Change Location</Text>
            <IconFontisto
              name="angle-right"
              size={18}
              style={{ color: "#7393B3", padding: "3%", marginLeft: "30%" }}
            />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.btn}>
            <IconIonicons
              name="color-palette-sharp"
              size={18}
              style={styles.icon}
            />
            <Text style={styles.content}>Appearance</Text>
            <IconFontisto
              name="angle-right"
              size={18}
              style={{ color: "#7393B3", padding: "3%", marginLeft: "45%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
