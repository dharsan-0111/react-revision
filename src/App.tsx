import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import ProtectedRoute from './layouts/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import Accordian from './components/accordian/Accordian'
import NestedComments from './components/comments/NestedComments'

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
        </Route>
      </Routes>
    </>
  )
}

export default App
