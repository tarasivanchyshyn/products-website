import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <footer>2022</footer> */}
    </>
  );
}

export default Layout;
