import { ReactElement } from 'react';
import './App.css';
import Recipes from "./components/Recipes";
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from "@aws-amplify/ui-react";
import {signUpFields, signInFields} from './Amplify/CustomAmplifyFields';

function App(): ReactElement {
  return (
    <div className="App">
      <AmplifyAuthenticator>
        <AmplifySignUp slot="sign-up" formFields={signUpFields} />
        <AmplifySignIn slot="sign-in" formFields={signInFields} />

        <header className="App-header">   
          <AmplifySignOut />             
          <h1>CookBook</h1>
        </header>

        <main>
          <Recipes />        
        </main>

      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
