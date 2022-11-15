import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import ShowOne from './views/ShowOne';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<Create />} />
        <Route path='/show/:id' element={<ShowOne />} />
      </Routes>
    </div>
  );
}

export default App;
