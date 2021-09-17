import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: windowHeight * 0.1,
    backgroundColor: "white",
  },
  t1: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#120E43",
  },
  t2: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: windowHeight * 0.04,
    color: "#120E43",
    fontWeight: "bold",
  },
  img: {
    height: windowHeight * 0.55,
    aspectRatio: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },
  view: { justifyContent: "space-around", flex: 0.75 },
  btn1: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    width: windowWidth * 0.6,
    borderRadius: 12,
    backgroundColor: "#12B0E8",
  },
  lgn: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  btn2: {
    alignSelf: "center",
    borderWidth: 2,
    padding: 10,
    borderColor: "white",
    width: windowWidth * 0.6,
    borderRadius: 12,
    backgroundColor: "#12B0E8",
  },
  sgn: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
});
export default styles;
//ek j vstu export krvta hoi here styles to default avse baaki nai
