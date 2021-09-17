import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import styles from "./signupStyle";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import DropDownPicker from "react-native-dropdown-picker";

export default class signup extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    temp: "",
    temp1: "",
    temp2: "",
    nov: 0,
    press: true,
    press1: true,
    error1: "",
    error2: "",
    selectedCity: "",
    state: "",
    city: "",
    street: "",
    locationError: "",
    open: false,
    opens: false,
    items: [
      { label: "Chhattisgarh", value: "Chhattisgarh" },
      { label: "Goa", value: "Goa" },
      { label: "Gujarat", value: "Gujarat" },
      { label: "Haryana", value: "Haryana" },
      { label: "Jharkhand", value: "Jharkhand" },
      { label: "Karnataka", value: "Karnataka" },
      { label: "Kerala", value: "Kerala" },
      { label: "Madhya Pradesh", value: "Madhya Pradesh" },
      { label: "Maharashtra", value: "Maharashtra" },
      { label: "Punjab", value: "Punjab" },
      { label: "Rajasthan", value: "Rajasthan" },
      { label: "Tamil Nadu", value: "Tamil Nadu" },
      { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    ],
    item: [],
    value: null,
    values: null,
    finalLocation: "Click Here to add Location",
    mobile: "",
    mobileError: "",
  };
  pressed = () => {
    if (this.state.press == true) {
      this.setState({ press: false });
    }
    if (this.state.press == false) {
      this.setState({ press: true });
    }
  };
  pressed1 = () => {
    if (this.state.press1 == true) {
      this.setState({ press1: false });
    }
    if (this.state.press1 == false) {
      this.setState({ press1: true });
    }
  };
  manan = () => {
    this.props.navigation.navigate("dflt");
  };
  pass = (xyz) => {
    this.setState({ temp: xyz });
  };
  confpass = async (text) => {
    await this, this.setState({ temp2: text });
    if (this.state.temp2 != this.state.temp) {
      this.setState({ error2: "Invalid password" });
    }
    if (this.state.temp2 == this.state.temp) {
      this.setState({ error2: "" });
    }
  };

  validation = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  };

  em = (abc) => {
    this.setState({ temp1: abc });
    setTimeout(async () => {
      if (this.validation(abc) == false) {
        await this.setState({ error1: "Please enter correct input" });
      }
      if (this.validation(abc) == true) {
        await this.setState({ error1: "" });
      }
    }, 3000);
  };
  nancy = async () => {
    await firebase
      .database()
      .ref("/")
      .once("value", async (snapshot) => {
        await this.setState({ nov: snapshot.val().nov + 1 });
      });

    await firebase
      .database()
      .ref("/user/" + this.state.nov)
      .update({
        email: this.state.temp1,
        password: this.state.temp,
      });

    await firebase.database().ref("/").update({
      nov: this.state.nov,
    });
    this.props.navigation.navigate("Xyz");
  };
  location = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationError: "Permission to access location was denied",
      });
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    let place1 = await Location.reverseGeocodeAsync(location.coords);
    console.log(place1);
    this.setState({ city: place1[0].subregion });
    this.setState({ street: place1[0].name });
    this.setState({ state: place1[0].region });
    this.setState({
      finalLocation:
        this.state.street + ", " + this.state.city + ", " + this.state.state,
    });
  };
  setOpen = (open) => {
    this.setState({ open });
  };
  setValue = async (callback) => {
    await this.setState({
      value: callback(this.state.value),
    });
    if (this.state.value == "Gujarat")
      this.setState({
        item: [
          { label: "Ahmedabad", value: "Ahmedabad" },
          { label: "Anand", value: "Anand" },
          { label: "Bhavnagar", value: "Bhavnagar" },
          { label: "Gandhinagar", value: "Gandhinagar" },
          { label: "Jamnagar", value: "Jamnagar" },
          { label: "Rajkot", value: "Rajkot" },
          { label: "Surat", value: "Surat" },
          { label: "Vadodara", value: "Vadodara" },
        ],
      });
    if (this.state.value == "Maharastra")
      this.setState({
        item: [
          { label: "Akola", value: "Akola" },
          { label: "Kalyan", value: "Kalyan" },
          { label: "Mumbai", value: "Mumbai" },
          { label: "Navi Mumbai", value: "Navi Mumbai" },
          { label: "Panvel", value: "Panvel" },
          { label: "Pune", value: "Pune" },
        ],
      });
    if (this.state.value == "Chhattisgarh")
      this.setState({
        item: [
          { label: "Raipur", value: "Raipur" },
          { label: "Bilaspur", value: "Bilaspur" },
          { label: "Bastar", value: "Bastar" },
          { label: "Jashpur", value: "Jashpur" },
          { label: "Durg", value: "Durg" },
          { label: "Koriya", value: "Koriya" },
        ],
      });
    if (this.state.value == "Madhya Pradesh")
      this.setState({
        item: [
          { label: "Bhopal", value: "Bhopal" },
          { label: "Indore", value: "Indore" },
          { label: "Gwalior", value: "Gwalior" },
          { label: "Jabalpur", value: "Jabalpur" },
          { label: "Sagar", value: "Sagar" },
          { label: "Ujjain", value: "Ujjain" },
        ],
      });
    if (this.state.value == "Karnataka")
      this.setState({
        item: [
          { label: "Mangalore", value: "Mangalore" },
          { label: "Bangalore", value: "Bangalore" },
          { label: "Mysore", value: "Mysore" },
          { label: "Bijapur", value: "Bijapur" },
        ],
      });
    if (this.state.value == "Rajasthan")
      this.setState({
        item: [
          { label: "Kota", value: "Kota" },
          { label: "Udaipur", value: "Udaipur" },
          { label: "Jaipur", value: "Jaipur" },
          { label: "Jodhpur", value: "Jodhpur" },
          { label: "Sikar", value: "Sikar" },
          { label: "Ajmer", value: "Ajmer" },
        ],
      });
    if (this.state.value == "Uttar Pradesh")
      this.setState({
        item: [
          { label: "Kanpur", value: "Kanpur" },
          { label: "Lucknow", value: "Lucknow" },
          { label: "Ghaziabad", value: "Ghaziabad" },
          { label: "Agra", value: "Agra" },
          { label: "Varanasi", value: "Varanasi" },
          { label: "Prayagraj", value: "Prayagraj" },
        ],
      });
    if (this.state.value == "Tamil Nadu")
      this.setState({
        item: [
          { label: "Coimbatore", value: "Coimbatore" },
          { label: "Salem", value: "Salem" },
          { label: "Madurai", value: "Madurai" },
          { label: "Tiruchirapalli", value: "Tiruchirapalli" },
        ],
      });
    if (this.state.value == "Jharkhand")
      this.setState({
        item: [
          { label: "Ranchi", value: "Ranchi" },
          { label: "Bokaro", value: "Bokaro" },
          { label: "Deoghar", value: "Deoghar" },
          { label: "Dhanbad", value: "Dhanbad" },
          { label: "Dumka", value: "Dumka" },
          { label: "Ghatshila", value: "Ghatshila" },
          { label: "Hazaribagh", value: "Hazaribagh" },
          { label: "Jamshedpur", value: "Jamshedpur" },
        ],
      });
    if (this.state.value == "Kerala")
      this.setState({
        item: [
          { label: "Thiruvananthapuram", value: "Thiruvananthapuram" },
          { label: "Kochi", value: "Kochi" },
          { label: "Thrissur", value: "Thrissur" },
          { label: "Kollam", value: "Kollam" },
          { label: "Kozhikode", value: "Kozhikode" },
        ],
      });
  };
  validateMobile = (number) => {
    if (!(number.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !number.match(/0{5,}/)))
      this.setState({ mobileError: "Enter Proper mobile number" });
    else this.setState({ mobileError: "" });
  };
  setMobile = (mobile) => {
    this.validateMobile(mobile);
    this.setState({ mobile });
  };
  setItems = (items) => {
    this.setState({ items });
  };
  setO = (opens) => {
    this.setState({ opens });
  };
  setV = (callback) => {
    this.setState({
      values: callback(this.state.values),
    });
  };
  setI = (item) => {
    this.setState({ item });
  };
  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <TouchableOpacity style={styles.arrowIcon} onPress={this.manan}>
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
        <Text style={styles.signupTxt}>Sign Up{this.state.error1}</Text>
        <View style={{}}>
          <TextInput
            placeholder="Email"
            onChangeText={this.em}
            style={styles.txtInput}
          ></TextInput>
          {this.state.error1 !== "" && (
            <Text style={styles.error}>{this.state.error1}</Text>
          )}

          <View style={{ flexDirection: "row" }}>
            <TextInput
              secureTextEntry={this.state.press}
              placeholder="Password"
              onChangeText={this.pass}
              style={styles.txtInput}
            ></TextInput>
            <TouchableOpacity onPress={this.pressed} style={styles.icon}>
              <IconEntypo name="eye" size={25} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              secureTextEntry={this.state.press1}
              placeholder="Confirm Password"
              onChangeText={this.confpass}
              style={styles.txtInput}
            ></TextInput>

            <TouchableOpacity onPress={this.pressed1} style={styles.icon}>
              <IconEntypo name="eye" size={25} />
            </TouchableOpacity>
          </View>
          {this.state.error2 !== "" && (
            <Text style={styles.error}>{this.state.error2}</Text>
          )}
          <TextInput
            keyboardType="numeric"
            maxLength={10}
            onChangeText={this.setMobile}
            placeholder="Mobile No."
            style={styles.txtInput}
          ></TextInput>
          <Text>{this.state.mobileError}</Text>
          {this.state.locationError !== "" && (
            <DropDownPicker
              zIndex={4000}
              dropDownDirection="TOP"
              style={styles.dropdown}
              open={this.state.open}
              value={this.state.value}
              items={this.state.items}
              setOpen={this.setOpen}
              setValue={this.setValue}
              setItems={this.setItems}
              placeholder="Select State"
            />
          )}
          {this.state.locationError !== "" ? (
            <DropDownPicker
              zIndex={3000}
              dropDownDirection="TOP"
              style={styles.dropdown}
              open={this.state.opens}
              value={this.state.values}
              items={this.state.item}
              setOpen={this.setO}
              setValue={this.setV}
              setItems={this.setI}
              placeholder="Select City"
            />
          ) : (
            <></>
          )}
          {this.state.locationError == "" ? (
            <TouchableOpacity style={styles.btn1} onPress={this.location}>
              <Text style={styles.txt1}>{this.state.finalLocation}</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}

          <TouchableOpacity style={styles.btn} onPress={this.nancy}>
            <Text style={styles.txt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
