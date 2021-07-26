import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";

Amplify.configure(awsconfig);

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h1>Welcome to my app!!</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
