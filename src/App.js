 import enTranslations from '@shopify/polaris/locales/en.json';
 import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import Routers from './route/router';
const App = () => {
  return (
    <div>
    <AppProvider i18n={enTranslations}>
    <Routers/>
  </AppProvider>
  </div>
  );
}
export default App;

