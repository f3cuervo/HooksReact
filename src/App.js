import './App.css';
import ApisAjax from './components/ApisAjax';

import ComunicacionComponentes from './components/ComunicacionComponentes';
import {EventosES6,EventosES7,} from './components/Eventos';
import HookPersonalizado from './components/HookPersonalizado';
import MasEventos from './components/MasEventos';
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
      <hr/>
      <MasEventos></MasEventos>
      <hr/>
      <ComunicacionComponentes></ComunicacionComponentes>
      <hr/>
      <ApisAjax></ApisAjax>
      <hr/>
      <HookPersonalizado></HookPersonalizado>

    </>
  );
}

export default App;
