import React from "react";
import { View, Text } from "react-native";

export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    return (
      <View>
          <Text>
     this is the test screen
     </Text>
      </View>
    );
  }
}
