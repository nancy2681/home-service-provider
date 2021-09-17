import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconOcticons from "react-native-vector-icons/Octicons";
import styles from "./firstStyle";

export default class Xyz extends React.Component {
  electrical = () => {
    this.props.navigation.navigate("Nancy");
  };
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <TouchableOpacity style={styles.icons} onPress={this.electrical}>
              <View style={styles.views}>
                <IconIonicons name="md-bulb-outline" size={40} />
                <Text>Electrical</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <View style={styles.views}>
                <IconMaterialIcons name="carpenter" size={40} />
                <Text>Carpententing</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icons}>
              <View style={styles.views}>
                <IconFontAwesome5 name="paint-roller" size={40} />
                <Text>Painting</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <TouchableOpacity style={styles.icons}>
              <View style={styles.views}>
                <IconMaterialIcons name="plumbing" size={40} />
                <Text>Plumbing</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <View style={styles.views}>
                <IconMaterialIcons name="cleaning-services" size={40} />
                <Text>Cleaning</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <View style={styles.views}>
                <IconMaterialIcons name="car-repair" size={40} />
                <Text>Mechanical</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <TouchableOpacity style={styles.icons}>
              <View style={styles.views}>
                <IconMaterialCommunityIcons name="hair-dryer" size={40} />
                <Text>Beauty</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <View style={styles.views}>
                <IconOcticons name="bug" size={40} />
                <Text>Pest-Control</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
              <View style={styles.views}>
                <IconMaterialIcons name="local-laundry-service" size={40} />
                <Text>Laundry</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view3}>
          <Text style={styles.heading}>Welcome to HomeOrzo!</Text>
          <Text style={styles.tagLine}>You name it. We do it.</Text>
        </View>
      </View>
    );
  }
}
