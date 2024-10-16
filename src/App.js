import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { signIn } from 'aws-amplify/auth';
import { I18n } from 'aws-amplify/utils';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom"
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from './component/ResponsiveAppBar';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "eu-west-2_79ByWrZEp",
      userPoolClientId: "5mdg5eo2f8g7b42e5isf8ppm6u",
      loginWith: {
        username: true,
      },
    },
  },
})

function App() {

  const formFields = {
    signIn: {
      username: {
        labelHidden: true,
      },
    },
  }

  const components = {
    SignIn: {
      Header() {
        return (
          <Stack spacing={4} my={5} >
            <h1 style={{ textAlign: 'center' }}>Evelyn + Gareth</h1>
            <p style={{ textAlign: 'center' }}>Saturday 27th September</p>
          </Stack>
        );
      },
      Footer() {
        return (
          <></>
        );
      },
    }
  }

  const services = {
    async handleSignIn(input) {
      const { username, password, options } = input;
      return signIn({
        username: 'ev-and-gareth',
        password,
      });
    },
  };

  I18n.putVocabulariesForLanguage('en', {
    'Sign in': 'Enter', // Button label
  });


  return (
    <Authenticator
      initialState='signIn'
      hideSignUp
      formFields={formFields}
      components={components}
      services={services}
    >
      {
        (props) => (
          <>
            <ResponsiveAppBar {...props} />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              {/* <Route path='/area' element={<Area />}></Route>
              <Route path='/logistics' element={<Logistics />}></Route>
              <Route path='/accommodation' element={<Accommodation />}></Route>
              <Route path='/faqs' element={<Faqs />}></Route> */}
            </Routes>
          </>
        )
      }
    </Authenticator>
  );
}

export default App;