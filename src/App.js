
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {core} from './_moraga-config';
import {routerDomSpreadCore} from './morgana-soul/core/routerDomSpread';

function App() {
  return (
    routerDomSpreadCore(core)
  );
}

export default App;
