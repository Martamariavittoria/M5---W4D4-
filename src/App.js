import 'bootstrap/dist/css/bootstrap.min.css' // Import necessario per usare React-Bootstrap
import CustomNavbar from './components/Navbar'
import AllTheBooks from './components/AllTheBooks'
import CustomFooter from './components/Footer'

function App() {

  return (
    <div>

      <CustomNavbar />
      
 
      <AllTheBooks />


      <CustomFooter />
    </div>
  )
}

export default App