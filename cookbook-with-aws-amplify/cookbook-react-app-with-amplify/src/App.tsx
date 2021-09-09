import React, { ReactElement } from 'react';
import './App.css';
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { signInFields, signUpFields } from './Amplify/CustomAmplifyFields';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

function App() : ReactElement {
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
          <h2>This is where my main screen goes</h2>   
        </main>
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
