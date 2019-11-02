import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/components/HomeScreen"
import PictureScreen from "./src/components/PictureScreen"
import EditScreen from "./src/components/EditScreen"
import TestScreen from "./src/components/TestScreen"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'

const rootReducer = (state = {}, action) => {
  return state
}

const store = createStore(rootReducer)



const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Picture: {screen: PictureScreen},
  Edit: {screen: EditScreen},
  Test: {screen: TestScreen}
});

const App = <Provider store={store}>createAppContainer(MainNavigator)</Provider>;

export default App;