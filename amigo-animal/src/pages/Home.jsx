import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardContainer from '../components/CardContainer';
import AdoptionCard from '../components/AdoptionCard';

const Home = () => {
  // Datos de ejemplo para las mascotas
  const pets = [
    {
      id: 1,
      name: "Luna",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
      age: "2 años",
      breed: "Golden Retriever",
      gender: "Hembra",
      location: "Ciudad de México",
      description: "Luna es una perrita muy cariñosa y juguetona. Le encanta correr en el parque y es excelente con los niños. Está buscando una familia activa que le dé mucho amor."
    },
    {
      id: 2,
      name: "Max",
      image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400",
      age: "3 años",
      breed: "Pastor Alemán",
      gender: "Macho",
      location: "Guadalajara",
      description: "Max es un perro muy leal y protector. Ha sido entrenado básicamente y es perfecto para familias que buscan un compañero fiel y guardián."
    },
    {
      id: 3,
      name: "Mia",
      image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400",
      age: "1 año",
      breed: "Gato Persa",
      gender: "Hembra",
      location: "Monterrey",
      description: "Mia es una gatita muy tranquila y elegante. Le gusta tomar siestas al sol y recibir caricias. Es perfecta para personas que buscan una compañía serena."
    },
    {
      id: 4,
      name: "Rocky",
      image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400",
      age: "4 años",
      breed: "Bulldog Francés",
      gender: "Macho",
      location: "Puebla",
      description: "Rocky es un perrito muy sociable y divertido. Le encanta jugar y hacer nuevos amigos. Es ideal para familias con niños pequeños."
    },
    {
      id: 5,
      name: "Bella",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400",
      age: "2 años",
      breed: "Labrador Mix",
      gender: "Hembra",
      location: "Tijuana",
      description: "Bella es una perrita muy inteligente y obediente. Ha sido rescatada y está lista para encontrar su hogar definitivo con una familia amorosa."
    },
    {
      id: 6,
      name: "Simba",
      image: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400",
      age: "6 meses",
      breed: "Gato Naranja",
      gender: "Macho",
      location: "Cancún",
      description: "Simba es un gatito muy juguetón y curioso. Le encanta explorar y es muy cariñoso. Busca una familia que le dé mucha atención y amor."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <CardContainer>
          {pets.map(pet => (
            <AdoptionCard
              key={pet.id}
              name={pet.name}
              image={pet.image}
              age={pet.age}
              breed={pet.breed}
              gender={pet.gender}
              location={pet.location}
              description={pet.description}
            />
          ))}
        </CardContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
