import logo from './logo.svg';
import BasicButton from './components/buttons/BasicButton'
import styled from 'styled-components';
import BasicTopbar from './components/topbars/BasicTopbar';


function App() {
  return (
    <div className="App">
      <BasicTopbar/>
      <BasicButton
      >Hola</BasicButton>
    </div>
  );
}

export default App;
