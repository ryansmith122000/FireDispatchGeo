import { incidentData } from './02-constants';
import { Map } from './03-components/OpenStreetMap/Map';
import './App.css';

const App = () => {
  return <Map incidentData={incidentData}></Map>;
};

export default App;
