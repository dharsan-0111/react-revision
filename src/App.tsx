import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import ProtectedRoute from './layouts/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import Accordian from './components/accordian/Accordian'
import NestedComments from './components/comments/NestedComments'
import ImageSlider from './components/imageslider/ImageSlider'
import PaginatedComponent from './components/pagination/PaginatedComponent'
import Autocomplete from './components/autocomplete/Autocomplete'

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/nested-comments" element={<NestedComments />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/pagination" element={<PaginatedComponent />} />
          <Route path="/autocomplete-search" element={<Autocomplete />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
