import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/components/HomeScreen"
import PictureScreen from "./src/components/PictureScreen"
import EditScreen from "./src/components/EditScreen"
import TestScreen from "./src/components/TestScreen"


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Picture: {screen: PictureScreen},
  Edit: {screen: EditScreen},
  Test: {screen: TestScreen}
});

const App = createAppContainer(MainNavigator);

export default App;