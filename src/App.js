import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Authentification from './pages/authentification';
import CrelosaMainPage from './pages/crelosa_main_page';
import * as routes from './pages/routes';

const App = () => (
  <>
    <Routes>
      <Route path={`${routes.loginPage}/*`} element={<Authentification />} />
      <Route path={`${routes.store}/*`} element={<Main />} />
      <Route path={`${routes.crelosaPage}/*`} element={<CrelosaMainPage />} />
    </Routes>
  </>
);

export default App;
