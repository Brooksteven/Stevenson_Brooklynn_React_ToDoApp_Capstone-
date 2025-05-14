import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <Link to='/'>KIAZEN</Link>
        </div>
        <ul>
            <li className='nav-item'>
                <Link to='/'>Introduction</Link>
            </li>
            <li className='nav-item'>
                <Link to='/home'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/edit/${id}'>Edit Kiazen</Link>
            </li>
        </ul>
    </nav>
  )
}
