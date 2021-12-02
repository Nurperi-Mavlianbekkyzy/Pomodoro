import './App.css';
import  Block  from './components/Info/infoPomo'
import { Footer } from './components/Footer/footer';
import Content from './components/Main/main';
import Head from './components/Header/header';
import { useSelector } from 'react-redux';

function App() {
let colorB = useSelector(state => state.change)

  return (
      <div className="App">
      <div className={colorB}>
        <Head />
        <Content/>
     </div>
     <Block />
     <Footer />
    </div>
  );
}

export default App;
