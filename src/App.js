import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Loginpage from "./pages/Loginpage";
import Viewdetails from "./pages/Viewdetails";
import Tvseries from "./pages/Tvseries";
import Videoplayer from "./pages/Videoplayer";
import About from "./pages/About";
import Movies from "./pages/Movies";

import SearchResult from "./pages/SearchResult";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="" element={<Layout />}>
            <Route path="/tv" element={<Tvseries />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/view/:media_type/:id" element={<Viewdetails />} />
            <Route path="/play/:media_type/:id" element={<Videoplayer />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite/>}/>
            <Route path="/search/:query" element={<SearchResult/>}/>
           
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
