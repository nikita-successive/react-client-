import Login from './user/login';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
const App = () => {
  return (
    <div>
    <AppProvider i18n={enTranslations}>
    <Login/>
  </AppProvider>
  </div>
  );
}

export default App;
