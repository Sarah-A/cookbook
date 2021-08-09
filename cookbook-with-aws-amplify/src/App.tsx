import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import Recipes from "./Recipes";

Amplify.configure(awsconfig);

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h1>Cookbook</h1>
      </header>
       <Router>
         <Switch>
           <Route path="/" component={Recipes} />             
         </Switch>
       </Router>
    </div>
  );
}

export default withAuthenticator(App);
