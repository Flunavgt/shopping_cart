import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Authentification from './pages/authentification';
import CrelosaMainPage from './pages/crelosa_main_page';
import * as routes from './pages/routes';
import QuieneSomos from './components/crelosa_page_components/quienes_somos';

const App = () => (
  <>
    <Routes>
      <Route path={`${routes.loginPage}/*`} element={<Authentification />} />
      <Route path={`${routes.store}/*`} element={<Main />} />
      <Route path={`${routes.crelosaPage}/*`} element={<CrelosaMainPage />} />
      <Route path="/quienes_somos" element={<QuieneSomos />} />
    </Routes>
  </>
);

export default App;
