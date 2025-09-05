import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-violet-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-violet-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AdoptaMe</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Nuestra misión es conectar mascotas necesitadas con familias amorosas, 
              creando lazos que duran toda la vida.
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200">
                  Adoptar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200">
                  Dar en adopción
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200">
                  Consejos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200">
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-violet-400" />
                <span>hola@adoptame.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-violet-400" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-violet-400" />
                <span>Ciudad de México</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisora y copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
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
