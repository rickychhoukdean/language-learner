import React from "react";
import { Text, View, TouchableOpacity, Platform } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";

export default class PictureScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    photo: null,
    data: {}
  };
  camera: any;

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.5,
        base64: true,
        fixOrientation: true,
        exif: true,
        autoFocus: false
      };

      await this.camera.takePictureAsync(options).then(data => {

        
        FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "photos/");
        FileSystem.moveAsync({
          from: data.uri,
          to: FileSystem.documentDirectory + "photos/imagename.png"
        });
      });
    }
  };
  processPicture() {
    throw new Error("Method not implemented.");
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  Flip
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
            <Text>Take photo</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
