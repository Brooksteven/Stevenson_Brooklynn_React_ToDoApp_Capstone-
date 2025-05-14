import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';


export default function App() {
  return (
    <>
      <Routes>
        {/* here is where we make our individual routes */}
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </>
  )
}
