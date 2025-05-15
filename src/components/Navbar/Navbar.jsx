import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <Link to='/'>KAI·ZEN</Link>
        </div>
        <ul className='nav__links'>
            <li className='nav__link'>
                <Link to='/'>Introduction</Link>
            </li>
            <li className='nav__link'>
                <Link to='/home'>Home</Link>
            </li>
            <li className='nav__link'>
                <Link to='/edit/${id}'>Edit Kiazen</Link>
            </li>
            <li className='nav__link'>
                <Link to='/new'>Add Kiazen</Link>
            </li>
        </ul>
    </nav>
  )
}
