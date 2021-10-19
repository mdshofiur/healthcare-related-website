import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Log from "./components/Log/Log";
import PostDetail from "./components/PostDetail/PostDetail";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Service from "./components/Services/Service";
import AuthProvider from "./Context/AuthProvider";


function App() {


  return (
    <div className="App">
          <AuthProvider>
          <Router>
          <Header></Header>
            <Switch>
              <Route path="/home">
               <Home></Home>
              </Route>
              <PrivateRoute path="/service/:id">
               <PostDetail></PostDetail>
              </PrivateRoute>
              <Route exact path="/service/">
               <Service></Service>
              </Route>
              <Route path="/blog">
               <Blog></Blog>
              </Route>
              <Route path="/about">
               <About></About>
              </Route>
              <Route exact path="/register/">
               <Register></Register>
              </Route>
              <Route exact path="/log/">
               <Log></Log>
              </Route>
              <Route exact path="/">
               <Home></Home>
              </Route>
              <Route exact path="*">
                <Error404></Error404>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
          </AuthProvider>
    </div>
  );
}

export default App;
