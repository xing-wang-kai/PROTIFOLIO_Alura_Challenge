import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import NavRight from './Components/navRight/menuright';
import NavLeft from './Components/navLeft/navleft';
import NavCenter from './Components/navCenter/navCenter';


function App() {
  return (
    <section className='container'>
      <Header/>
      <section className='body_container'>
        <NavRight className="body_container-item"/>
        <NavCenter/>
        <NavLeft className="body_container-item"/>
      </section>
    </section>
  );
}

export default App;
