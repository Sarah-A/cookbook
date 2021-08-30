type AmplifyFormFields = {
  type: string,
  label: string,
  placeholder: string,
  required: boolean
}

const signInFields : AmplifyFormFields[] = [
    {
      type: "email",
      label: "Email",
      placeholder: "Please enter your Email",
      required: true,
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Please enter your Password",
      required: true,
    },
  ];
  
  const signUpFields : AmplifyFormFields[]  = [
    {
      type: "username",
      label: "Username *",
      placeholder: "Please enter your Username",
      required: true,
    },
    {
      type: "email",
      label: "Email *",
      placeholder: "Please enter your Email",
      required: true,
    },
    {
      type: "password",
      label: "Password *",
      placeholder: "Please enter your Password",
      required: true,
    },
  ];
    
  export {signUpFields, signInFields};
  