import React from "react";
import ReactDOM from "react-dom";
import PasswordForm from "src/components/PasswordForm";
import "./styles.css";

function App() {
 return (
  <div className="App">
   <PasswordForm />
  </div>
 );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
