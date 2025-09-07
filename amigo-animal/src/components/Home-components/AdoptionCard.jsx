import { Heart, MapPin, Calendar, Info } from 'lucide-react';
import { useState } from 'react';

const AdoptionCard = ({ 
  name, 
  image, 
  age, 
  breed, 
  location = "Ciudad de México", 
  description,
  gender = "Macho"
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Imagen y botón de favorito */}
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-5">
        {/* Nombre */}
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>

        {/* Información básica */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-4 w-4 mr-2 text-primary-500" />
            <span>{age}</span>
            <span className="mx-2">•</span>
            <span>{gender}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Info className="h-4 w-4 mr-2 text-primary-500" />
            <span>{breed}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary-500" />
            <span>{location}</span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Botón de adopción */}
        <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
          Conocer más
        </button>
      </div>
    </div>
  );
};

export default AdoptionCard;
