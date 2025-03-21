import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import AllTheBooks from './components/AllTheBooks';
import DettagliLibro from './components/BookDetails';
import CustomFooter from './components/Footer';

function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<AllTheBooks />} />
        <Route path="/details/:asin" element={<DettagliLibro />} />
      </Routes>
      <CustomFooter />
    </>
  );
}

export default App;

/* import 'bootstrap/dist/css/bootstrap.min.css' // Import necessario per usare React-Bootstrap
import CustomNavbar from './components/Navbar'
import AllTheBooks from './components/AllTheBooks'
import CustomFooter from './components/Footer'

function App() {

  return (
    <div>

      <CustomNavbar />
      
 
      <AllTheBooks />
      <a href="https://reactjs.org">Learn React</a>;

      <CustomFooter />
    </div>
  )
}

export default App */
