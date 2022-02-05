import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Exercise from './components/Exercise';
import CommentState from './context/Comment/CommentState';

function App() {
  return (
  <>
    <CommentState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={ <Home /> } />
                <Route path="/ejercicio" element={ <Exercise /> } />
            </Route>
          </Routes>
      
      
        </BrowserRouter>
      </CommentState>

    


  </>
  )
}

export default App;
