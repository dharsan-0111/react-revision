import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="w-full flex gap-6 justify-between items-center p-4 my-4 bg-black">
      <div className="flex gap-6">
        <Link to="/home" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/accordian" className="text-white">Accordian</Link>
        <Link to="/nested-comments" className="text-white">Nested Comments</Link>
        <Link to="/image-slider" className="text-white">Image Slider</Link>
        <Link to="/pagination" className="text-white">Pagination</Link>
        <Link to="/autocomplete-search" className="text-white">Autocomplete</Link>
      </div>

      {
        localStorage.getItem('user') &&
        <button 
          onClick={handleLogout}
          className="text-white cursor-pointer"
        >
          Logout
        </button>
      }
    </div>
  )
}

export default Header