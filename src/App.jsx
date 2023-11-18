import 'firebase/auth';

import Firebase from './firebase-config';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import PageBody from "./components/PageBody";


const App = () => {
  return (
      <Firebase />
      <div className="header">
      <NavBar />
      </div>
  )
}

export default App;