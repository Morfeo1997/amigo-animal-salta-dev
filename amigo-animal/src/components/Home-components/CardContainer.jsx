const CardContainer = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Mascotas en busca de hogar
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Conoce a nuestros adorables amigos que están esperando encontrar una familia amorosa
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
