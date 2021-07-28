import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import StopWatch from "./components/stopwatch";

ReactDOM.render(<StopWatch />, document.getElementById("root"));
serviceWorker.unregister();
