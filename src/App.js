import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AddSong, EditSong, ViewSong } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addsong" element={<AddSong />} />
          <Route exact path="/editsong/:id" element={<EditSong />} />
          <Route exact path="/viewsong/:id" element={<ViewSong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
