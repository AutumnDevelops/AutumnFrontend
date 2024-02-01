import Nav from "./comps/Nav";
import Header from "./scenes/Header"
import Projects_recent from "./scenes/Projects_recent"
import About from "./scenes/About/About"
import Email_Form from "./scenes/Email"
import Footer from "./scenes/Footer"
import bg from "./animations/bg.scss";
function App() {
  return (
    <div className="App flex- flex-col">
      <Nav />
      <main className = "flex flex-col justify-center items-center">
           <Header />
           <About />
           <Projects_recent />
           <Email_Form />
           <Footer />
      </main>
    </div>
  );
}

export default App;
