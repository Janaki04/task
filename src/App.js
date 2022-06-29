import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import DataTable from './Component/DataTable';
import Form from './Component/Form';

function App() {
  return (
    <div className="App">


<Router>
{/* <DataTable/> */}

  <Routes>
  <Route path='/' element={<DataTable/>}/>
 <Route path='/form' element={<Form/>}/>
  </Routes>

</Router>


      
    </div>
  );
}

export default App;
