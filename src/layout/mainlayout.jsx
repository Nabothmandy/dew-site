import { Outlet } from 'react-router-dom';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}