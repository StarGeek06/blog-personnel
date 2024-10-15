import './assets/scss/_app.scss'
import Home from './components/Home';
import { Realisations } from './components/Realisations';
import Articles from './components/Articles';
import Contacts from './components/Contacts';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {


  return (
    <>

  <Router>
    
       
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
       
      </Router>
       
    </>
  )
}

export default App;
