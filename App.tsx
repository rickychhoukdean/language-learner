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