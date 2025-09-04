import { Heart, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-secondary-100/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-8 animate-bounce">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Encuentra tu mejor amigo</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Dale una segunda <br />
          <span className="text-primary-500">oportunidad</span> al amor
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Conectamos corazones con patitas. Miles de mascotas están esperando 
          encontrar una familia que les brinde amor, cuidado y un hogar para siempre.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
            <span>Empezar a adoptar</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Conocer más
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <Heart className="h-8 w-8 text-primary-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
            <div className="text-gray-600">Mascotas adoptadas</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-3">🏠</div>
            <div className="text-3xl font-bold text-gray-800 mb-2">200+</div>
            <div className="text-gray-600">Familias felices</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-3">🐾</div>
            <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-gray-600">Soporte disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
