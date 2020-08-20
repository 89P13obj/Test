import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MyStack from "./screens/MyStack";

function App () {
    return (
      <Provider store={store}>
        <MyStack/>
      </Provider>
    );
  };



export default App;
