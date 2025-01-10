import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function DefaultLayout() {
  return <>
    <Header />
    <main className='flex-grow-1'>
      <Outlet />
    </main>
    <Footer />
  </>
}

export default DefaultLayout;