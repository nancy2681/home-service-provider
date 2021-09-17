import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainView: { flex: 1 },
  arrowIcon: {
    marginStart: windowWidth * 0.025,
    marginTop: windowHeight * 0.06,
  },
  view1: {
    backgroundColor: "#120E43",
    borderBottomRightRadius: 20,
    height: windowHeight * 0.06,
    width: windowWidth * 0.98,
    marginTop: windowHeight * 0.005,
  },
  heading: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  view2: {
    backgroundColor: "#0F52BA",
    borderBottomRightRadius: 20,
    height: windowHeight * 0.05,
    width: windowWidth * 0.85,
  },
  view3: {
    backgroundColor: "#0096FF",
    borderBottomRightRadius: 20,
    height: windowHeight * 0.05,
    width: windowWidth * 0.65,
  },
  view4: {
    backgroundColor: "#00ccff",
    borderBottomRightRadius: 20,
    height: windowHeight * 0.05,
    width: windowWidth * 0.45,
  },
  view5: {
    backgroundColor: "#99ebff",
    borderBottomRightRadius: 20,
    height: windowHeight * 0.05,
    width: windowWidth * 0.25,
  },
  signupTxt: {
    fontSize: 35,
    fontWeight: "bold",
    marginStart: windowWidth * 0.08,
    textDecorationLine: "underline",
    marginTop: windowHeight * 0.02,
  },
  view: {
    marginTop: windowHeight * 0.015,
  },

  error: { color: "red", marginStart: windowWidth * 0.08 },
  view6: { flexDirection: "row" },
  txtInput: {
    borderRadius: 9,
    marginTop: windowHeight * 0.02,
    borderWidth: 2,
    width: windowWidth * 0.85,
    height: windowHeight * 0.05,
    marginStart: windowWidth * 0.08,
    paddingLeft: 10,
    borderBottomColor: "#CAD5E2",
    fontSize: 17,
  },
  icon: {
    marginLeft: windowWidth * -0.1,
    padding: 5,
    marginTop: windowHeight * 0.025,
  },

  btn: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    width: windowWidth * 0.45,
    borderRadius: 12,
    backgroundColor: "#12B0E8",
    marginTop: windowHeight * 0.04,
  },

  btn1: {
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: "black",
    padding: 7,
    width: windowWidth * 0.82,
    borderRadius: 5,
    backgroundColor: "transparent",
    opacity: 0.6,
    marginTop: windowHeight * 0.04,
  },
  txt: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  txt1: {
    // alignSelf: "center",
    fontSize: 15,
    color: "gray",
    fontWeight: "bold",
  },

  dropdown: {
    width: "80%",
    alignSelf: "center",
    marginTop: windowHeight * 0.02,
  },
});
export default styles;
