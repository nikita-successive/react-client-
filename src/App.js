import enTranslations from '@shopify/polaris/locales/en.json';
import React from 'react';
import { AppProvider } from "@shopify/polaris";

//import Routers from './route/route';
//import TextField from './components/TextField/TextField';
import TextFieldDemo from './pages';
const App = () => {

  return (
    <div>
      <AppProvider i18n={enTranslations}>
      <TextFieldDemo/>
      </AppProvider>
    </div>
  );
}
export default App;

