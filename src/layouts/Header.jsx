import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

function Header() {
  return <header className='page-header'>
      <div>
        <Link to='/'> HOME
        </Link>
        <Nav />
      </div>
    </header>
}

export default Header;