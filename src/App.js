import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import BookStore from "./pages/store/BookStore";
import About from "./components/about/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import EditPost from "./pages/edit/EditPost";
import Search from "./pages/search/Search";


function App() {

  return (
    <div classname="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookstore" element={<BookStore />} />
          <Route path="A9B8C7D6E5F4G3H2I1" element={<Login />} />
          <Route path="/write" element={<Write />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="post/:postId/Edit" element={<EditPost />} />
          <Route path="search/:filter" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;