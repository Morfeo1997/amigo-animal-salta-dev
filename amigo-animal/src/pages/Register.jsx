import Navbar from '../components/navbar';
import Footer from '../components/footer';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-12">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
