import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter,Route,Routes} from "react-router-dom";

import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import TvSeries from './pages/TvSeries/TvSeries';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Trending />} exact />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvseries' element={<TvSeries />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
