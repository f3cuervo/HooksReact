import './App.css';
import {EventosES6,EventosES7,} from './components/Eventos';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';

function App() {
  return (
    <>
      <RenderizadoCondicional/>
      <hr/>
      <RenderizadoElementos/>
      <hr/>
      <EventosES6></EventosES6>
      <hr/>
      <EventosES7></EventosES7>
    </>
  );
}

export default App;
