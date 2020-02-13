import React from "react";
import ReactDom from "react-dom";
import App from './components/App'

ReactDom.render(
  <App headerMessage="This is a prop validated with PropTypes" />,
  document.getElementById("root")
);
