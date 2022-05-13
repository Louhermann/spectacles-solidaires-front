// == Import
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import Catalog from 'src/components/Catalog';
import Error404 from 'src/components/Error404';
import Connexion from 'src/components/Connexion';
import Show from 'src/components/Show';

import { saveData } from '../../actions';
import { useSelector } from 'react-redux';


// Style
import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(
    () => {
      dispatch(saveData());
    },
    [],
  );

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Apropos" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Catalogue" element={<Catalog />} />
        {events.map((event) => (
        <Route path={`Catalogue/spectacle/:slug`}  element={<Show key={events.id} />} />
        ))};
        <Route path="Connexion" element={<Connexion />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
