import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
