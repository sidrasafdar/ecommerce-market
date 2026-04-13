import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'

export function Layout() {
      return (
    <>

    <Header />
    <Outlet />
    <Footer />

  </>
    )
}

export default Layout;

// import Header from "./Header";
// import { Outlet } from "react-router-dom";

// function Layout() {
//   return (
//     <>
//       <Header />
//       <Outlet />
//     </>
//   );
// }

// export default Layout;