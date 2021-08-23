import { ReactElement } from 'react';
import './App.css';
import Recipes from "./components/Recipes";
import { withAuthenticator } from "aws-amplify-react";

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Recipes />        
      </header>
    </div>
  );
}

export default withAuthenticator(App);
