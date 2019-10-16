// import React from "react";
// import { Text, View, TouchableOpacity } from "react-native";
// import * as Permissions from "expo-permissions";
// import { Camera } from "expo-camera";
// import * as FileSystem from 'expo-file-system';


// export default class CameraExample extends React.Component {
//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back
//   };
//   camera: any;

//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === "granted" });
//   }
//   takePicture() {
//     this.setState({
//       takeImageText: "... PROCESSING PICTURE ..."
//     });
//     this.camera.takePictureAsync({ skipProcessing: true }).then(data => {
//       this.setState(
//         {
//           takeImageText: "PICTURE TAKEN",
//           photo: data.uri
//         },
//         (this.state.photo)
//       );
//     }).then();
//   }
//   render() {
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera
//             style={{ flex: 1 }}
//             type={this.state.type}
//             ref={ref => {
//               this.camera = ref;
//             }}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: "transparent",
//                 flexDirection: "row"
//               }}
//             >
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: "flex-end",
//                   alignItems: "center"
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type:
//                       this.state.type === Camera.Constants.Type.back
//                         ? Camera.Constants.Type.front
//                         : Camera.Constants.Type.back
//                   });
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 18, marginBottom: 10, color: "white" }}
//                 >
//                   Flip
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//           <TouchableOpacity onPress={this.takePicture.bind(this)}>
//             <Text>Take photo</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     }
//   }
// }


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./HomeScreen"
import PictureScreen from "./PictureScreen"
import EditScreen from "./EditScreen"
import TestScreen from "./TestScreen"


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Picture: {screen: PictureScreen},
  Edit: {screen: EditScreen},
  Test: {screen: TestScreen}
});

const App = createAppContainer(MainNavigator);

export default App;