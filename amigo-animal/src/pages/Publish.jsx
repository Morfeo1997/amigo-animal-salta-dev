import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PublishForm from '../components/PublishForm';

const Publish = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-12">
        <PublishForm />
      </main>
      <Footer />
    </div>
  );
};

export default Publish;
