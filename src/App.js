import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import BookStore from "./pages/store/BookStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const user = true;
  return (
    <div classname = "App">
    <Router>
          <TopBar/>
          <Routes>
            <Route path="/" exact element={<Home></Home>}></Route> 
            <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
            <Route path="/bookstore" element={ <BookStore />} ></Route>
            <Route path="Login" element={<Login />} />
            <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
            <Route path="/settings" element={user ? <Settings /> : <Register/>} ></Route>
            <Route path="/post/:postId" element={<Single />} ></Route> 
          </Routes>
        </Router>
        </div>
  );
}

export default App;