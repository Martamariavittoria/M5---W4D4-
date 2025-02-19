import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
/* import romanceBooks from './jsonbooks/romance.json'
 */
import NavbarElement from './Componenti/navbar';
import FooterElement from './Componenti/footer';
import WelcomeElement from './Componenti/welcome';
import AllTheBooksElement from './Componenti/AllTheBooks';


function App() {
  return (

      <div className="App">
        <BrowserRouter>
        <NavbarElement />
        <WelcomeElement />
        <AllTheBooksElement />
    
        <FooterElement />
        </BrowserRouter>
      </div>

  );
}

export default App;