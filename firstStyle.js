import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  view1: { flex: 0.65 },
  view2: {
    flex: 0.34,
    flexDirection: "row",
    alignSelf: "center",
  },
  icons: {
    flex: 0.33,
    borderRadius: 12,
    backgroundColor: "#66CCFF",
    margin: 4,
    height: windowHeight * 0.18,
  },
  views: { alignItems: "center", marginTop: windowWidth * 0.1 },
  view3: {
    flex: 0.35,
    marginBottom: windowHeight * 0.03,
    backgroundColor: "#4682b4",
    borderBottomRightRadius: 55,
    borderBottomLeftRadius: 55,
  },
  heading: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: windowHeight * 0.1,
    letterSpacing: 3,
    color: "white",
    textDecorationLine: "underline",
    padding: 3,
  },
  tagLine: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
    marginTop: windowHeight * 0.06,
    color: "white",
  },
});
export default styles;
