import Profil from './Profil/Profil';
import './App.css';

function App() {
  const handleAlert = (name) => {
        alert (`Hi! My name is ${name}`);
    };
  return (
    
    <div className="App">
      < Profil fullName="Soulayma" bio="Developer" profession=" Developer" handleAlert={handleAlert}  children="myImage.jpg"/>
     
    </div>
  );
  
}

export default App;