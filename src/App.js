import "./App.scss";
import Wrapper from "./Components/wrapper";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/reducer.js";
const Login = lazy(() => import("./Pages/login/loginpage"));
const Home = lazy(() => import("./Pages/homepage"));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Wrapper>
          <Routes>
            <Route path={`/`} element={<Login />}>
              <Route index element={<Login />} />
            </Route>
            <Route path={`/home`} element={<Home />}></Route>
          </Routes>
        </Wrapper>
      </Provider>
    </div>
  );
}

export default App;
