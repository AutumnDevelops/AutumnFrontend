import Nav from "./comps/Nav";
import Header from "./scenes/Header"
import Projects_recent from "./scenes/Projects_recent"
import Projects_old from "./scenes/Projects_old"
import About from "./scenes/About/About"
import Email_Form from "./scenes/Email"
import Footer from "./scenes/Footer"
import background from "./assets/background.png"; 

function App() {
  return (
    <div className="App flex flex-col h-[100vh] w-[100vw]" style={{ backgroundImage: `url(${background})`, backgroundPosition: "repeat", backgroundSize: "cover"}}>
      <Nav />
      <main className="flex flex-col justify-center items-center">
           <Header />
           <About />
           <Projects_recent />
           <Projects_old />
           <Email_Form />
           <Footer />
      </main>
    </div>
  );
}

export default App;
