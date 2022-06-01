import './App.css';
import Image from './assetes/Уроборос-Улица36.jpg';

function App() {
  return (
    <>
      <Album
        title="Уроборос:Улица 36"
        artist="Скриптонит"
        year={2017}
        label="Gazgolder Records"
        cover={Image}
      />
     
    </>
  );
}

function Album({ title, artist, year, label, cover }) {
  return (
    <div className="background">
      <div className="album-cover">
        <img src={cover} alt="album cover" />
      </div>
      <div className="album">
        <div>{title}</div>
        <div>{artist}</div>
        <div>{year}</div>
        <div>{label}</div>
      </div>
    </div>
  );
}




export default App;
