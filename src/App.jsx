import NavBar from "./components/NavBar.jsx";

const App = () => {

  let isLoggedIn = verifyLogin();

  return (
    <div>
      <p>Hello world</p>
      <NavBar isLoggedIn = {isLoggedIn} />
    </div>
  )
}

const verifyLogin = () => {
  let isLoggedIn = false;
  return isLoggedIn;
}

export default App;