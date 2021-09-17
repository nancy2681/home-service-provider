import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainView: { flex: 1 },
  heading: {
    alignSelf: "center",
    fontSize: 22,
    marginTop: windowHeight * 0.12,
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "black",
  },
  view: {
    backgroundColor: "white",
    height: windowHeight * 0.8,
    width: windowWidth * 0.85,
    marginTop: windowHeight * 0.045,
    marginHorizontal: windowWidth * 0.08,
    borderRadius: 10,
    borderColor: "#899499",
    borderWidth: 1,
  },
  txt: {
    marginStart: "5%",
    marginTop: windowHeight * 0.035,
    fontSize: 18,
    color: "#7393B3",
  },
  btn: {
    borderColor: "#7393B3",
    width: windowWidth * 0.75,
    height: windowHeight * 0.055,
    marginStart: "5%",
    marginTop: windowHeight * 0.03,
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 10,
  },
  content: { color: "#7393B3", marginTop: "2%", fontSize: 15 },
  line: {
    borderBottomColor: "#7393B3",
    borderBottomWidth: 1,
    marginTop: windowHeight * 0.025,
    marginStart: "5%",
    marginEnd: "5%",
  },
  icon: { color: "#7393B3", padding: "3%" },
  iconReturns: { marginLeft: "40%", color: "#7393B3", padding: "3%" },
});
export default styles;
