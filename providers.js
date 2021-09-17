import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import * as mocks from "./mocks";

class Providers extends React.Component {
  request = (req) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          marginTop: 20,
          padding: 20,
          marginBottom: 15,
          borderRadius: 10,
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          flexDirection: "row",
        }}
      >
        <View flex={0.25} card column style={styles.requestStatus}>
          <Image source={req.profile} style={{ height: 128, width: 128 }} />
          {/* <Image
            source={{ uri: req.profile }}
            style={{ height: 128, width: 128 }}
          /> */}
        </View>

        <View flex={0.75}>
          <Text
            h3
            style={{ paddingVertical: 8, fontSize: 18, fontWeight: "bold" }}
          >
            {req.name}
          </Text>
          <Text style={{ fontSize: 15 }}>
            {req.price} rating:{req.rating}
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              marginTop: "3%",
              width: "32%",
              padding: 1,
              borderRadius: 8,
              marginLeft: "15%",
            }}
          >
            <Text style={{ fontSize: 15 }}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderRequests() {
    return (
      <View flex={1} column color="gray2" style={styles.requests}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {mocks.requests.map((request) => (
            <TouchableOpacity activeOpacity={0.8} key={`request-${request.id}`}>
              {this.request(request)}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.safe}>{this.renderRequests()}</SafeAreaView>
    );
  }
}

export default Providers;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#12B0E8",
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 12,
    marginRight: 5,
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  request: {
    padding: 20,
    marginBottom: 15,
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90,
  },
});
