import Intro from "./components/Intro/Intro.jsx"
import About from "./components/About/About.jsx"
import ProductList from "./components/PortfolioList/PortfolioList.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Nav from './components/Nav/nav.jsx'

const App = () => {
  return (
  <div >
    
    <Nav/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  
  </div>
)
};

export default App;
