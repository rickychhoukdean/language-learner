import React from "react";
import { Button, View } from "react-native";

interface IHomeScreenProps {
  navigation: any;
}

export default class HomeScreen extends React.Component<IHomeScreenProps> {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Take a picture"
          onPress={() => navigate("Picture")}
        />
        <Button
          title="Edit your library"
          onPress={() => navigate("Edit")}
        />
        <Button
          title="Test yourself"
          onPress={() => navigate("Test")}
        />
      </View>
    );
  }
}
