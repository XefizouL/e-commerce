import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Aquí podrías agregar un Footer en el futuro */}
    </>
  );
};

export default Layout;