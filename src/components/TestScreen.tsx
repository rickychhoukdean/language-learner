import React from "react";
import { View, Text, Image, TextInput } from "react-native";

const testObj = {
  1: {
    picture:
      "https://dmp0bw3rmgwlj.cloudfront.net/catalog/product/cache/2d30c628ca84d1fb5bde9dd708affbe5/r/1/r11_teastain_a_1.jpg",
    english: "hat",
    french: "chapeau"
  },
  2: {
    picture:
      "https://www.surrey.ca/images/cos-master/pageImages/Hawthorne%20Park.JPG",
    english: "park",
    french: "parc"
  },
  3: {
    picture:
      "https://thumbs-prod.si-cdn.com/hvIzKWngNTG1O6GIGB3-Zqz5uws=/fit-in/1072x0/https://public-media.si-cdn.com/filer/0e/00/0e0095f9-7c68-4d1c-b82a-6496ceb3d276/b5t5cc.jpg",
    english: "fish",
    french: "poisson"
  },
  4: {
    picture:
      "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Maine-Coon_01.jpg?bust=1538148971&width=2000",
    english: "cat",
    french: "chat"
  }
};

export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    return (
      <View>
        <Image
          style={{ height: `50%`, left: 0, right: 0 }}
          source={{ uri: testObj[1].picture }}
        />
        <Text>{testObj[1].english}</Text>
        <TextInput
          style={{
            height: 40,
            left: 0,
            right: 0,
            borderColor: "gray",
            borderWidth: 1
          }}
          onSubmitEditing={() => {
            console.log("Test");
          }}
        />
      </View>
    );
  }
}
