import {Routes,Route,Link} from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Book } from "./pages/Book"
import { Booklist } from "./pages/Booklist"
import { Contact } from "./pages/Contact"
import { Notefound } from "./pages/Notefound"
import "./App.css"
function App() {
  return (
    <>
    <nav className="nav">
      <li className="logo">
        <Link to="/">Logo</Link>
      </li>
      <ul>
        <li>
          <Link className="a" to="/">Home</Link>
          {/* <a className="a" href="/">Home</a> */}
        </li>
        <li>
          <Link to="/book">Book</Link>
          {/* <a className="a" href="/book">Book</a> */}
        </li>
        <li>
          <Link to="/booklist">Booklist</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/notefound">Notefound</Link>
        </li>
      </ul>
    </nav>
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="booklist" element={<Booklist />} />
    <Route path="/book" element={<Book />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/notefound" element={<Notefound />} />
   
  </Routes>

    </>
   );
}

export default App;
