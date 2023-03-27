import Home from "./src/pages/home/Home";
import TopBar from "./src/components/topbar/TopBar";
import BookStore from "./src/pages/store/BookStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function User_view() {
  
  return (
    <div classname = "App">
    <Router>
          <TopBar />
          <Routes>
            <Route path="/" exact element={<Home></Home>}></Route> 

            <Route path="/bookstore" element={ <BookStore />} ></Route>
            

          </Routes>
        </Router>
        </div>
  );
}

export default User_view;