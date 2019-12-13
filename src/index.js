import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Button from "./container/RenderButtons";
import configureStore from "./configureStore"

const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <Button />
    </Provider>,
    rootElement
);
