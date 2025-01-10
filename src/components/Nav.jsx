import { NavLink } from 'react-router-dom';

function Nav() {

  const menu = [
    { label: 'Home', path: '/' }
  ]

  return <nav>
    <ul className='d-flex align-items-center me-5 fs-5'>
      {
        menu.map(({path, label}, i) => {
          return <li key={i}>
            <NavLink to={path}>
              {({ isActive }) => {
                return <span className={ isActive ? 'active-link' : ''}>{
                  label
                }</span>
              }}
            </NavLink>
          </li>
        })
      }
    </ul>
  </nav>
}

export default Nav