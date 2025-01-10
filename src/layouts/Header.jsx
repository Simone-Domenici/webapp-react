import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

function Header() {
  return <header>
      <div className='page-header align-items-center'>
        <Link to='/'><img className='logo' src="src\assets\duck_logo.png"/>
        </Link>
        <Nav />
      </div>
    </header>
}

export default Header;