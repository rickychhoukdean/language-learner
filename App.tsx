import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createStore } from "redux";
import HomeScreen from "./src/components/HomeScreen";
import PictureScreen from "./src/components/PictureScreen";
import EditScreen from "./src/components/EditScreen";
import TestScreen from "./src/components/TestScreen";
import { Provider } from "react-redux";
import React from "react";

const rootReducer = (state = {}, action) => {
  return state;
};

const store = createStore(rootReducer);

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Picture: { screen: PictureScreen },
  Edit: { screen: EditScreen },
  Test: { screen: TestScreen }
});

const Navigation = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
