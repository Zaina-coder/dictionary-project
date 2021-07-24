import logo from "./shecode.png";
import './App.css';
import Dictionary from "./Dictionary"

 export  default function  App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header"> 
      
        <img src={logo} className="App-logo img-fluid" alt="logo" />

      
      </header>
      <main >
        <Dictionary defaultKeyword= "sunset" />
      </main>
      <footer className="text-center">
        coded by Zainab 
        <br /> 
        <a href="https://github.com/Zaina-coder/dictionary-project">open sourced on GitHub</a> 
      </footer>
    </div>
    </div>
  );
}


