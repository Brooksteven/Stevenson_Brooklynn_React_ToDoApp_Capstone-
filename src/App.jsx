import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MainPage from './pages/MainPage/MainPage';
import EditItemPage from './pages/EditITemPage/EditItemPage';
import CreateItemPage from './pages/CreateItemPage/CreateItemPage';


export default function App() {
  return (
    <>
      <Routes>
        {/* here is where we make our individual routes */}
        <Route path='/' element={<MainPage />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/edit/:id' element={<EditItemPage />}/>
        <Route path='/new' element={<CreateItemPage />}/>
      </Routes>
    </>
  )
}
