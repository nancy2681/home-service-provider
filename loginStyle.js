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
    marginTop: windowHeight * 0.02,
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
  lgnTxt: {
    fontSize: 35,
    fontWeight: "bold",
    marginStart: windowWidth * 0.08,
    textDecorationLine: "underline",
    marginTop: windowHeight * 0.04,
  },
  view6: {
    marginTop: windowHeight * 0.02,
  },
  txt1: {
    alignSelf: "flex-start",
    marginStart: windowWidth * 0.08,
    fontSize: 25,
    color: "gray",
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 9,
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.85,
    height: windowHeight * 0.05,
    marginStart: windowWidth * 0.08,
    borderBottomColor: "#CAD5E2",
    borderWidth: 2,
    paddingLeft: 10,
  },
  txt2: {
    alignSelf: "flex-start",
    marginStart: windowWidth * 0.08,
    fontSize: 25,
    color: "gray",
    marginTop: windowHeight * 0.04,
  },
  view: { flexDirection: "row" },
  icon: {
    marginLeft: windowWidth * -0.09,
    padding: 5,
    marginTop: windowHeight * 0.01,
  },
  error: { color: "red", marginStart: windowWidth * 0.08 },
  btn: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 7,
    width: windowWidth * 0.6,
    borderRadius: 12,
    backgroundColor: "#12B0E8",
    marginTop: windowHeight * 0.07,
  },
  btnTxt: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  txt3: {
    alignSelf: "center",
    color: "black",
    textDecorationLine: "underline",
    marginTop: windowHeight * 0.06,
  },
});
export default styles;
