import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-violet-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Línea divisora y copyright */}
        <div className=" flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AdoptaMe. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0">
            Hecho con <Heart className="h-4 w-4 text-red-400 inline mx-1" /> para las mascotas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
