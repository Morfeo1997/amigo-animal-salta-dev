import { useState } from 'react';
import { Camera, MapPin, Calendar, Phone, Mail, Shield, X, Upload } from 'lucide-react';

const PublishForm = () => {
  const [formData, setFormData] = useState({
    photos: [],
    type: '',
    species: '',
    description: '',
    zone: '',
    date: new Date().toISOString().split('T')[0],
    contactType: 'email',
    contact: '',
    captcha: false
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhotoUpload = (files) => {
    const newPhotos = Array.from(files).slice(0, 3 - formData.photos.length);
    const photoUrls = newPhotos.map(file => ({
      file,
      url: URL.createObjectURL(file),
      id: Date.now() + Math.random()
    }));
    
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...photoUrls].slice(0, 3)
    }));
  };

  const removePhoto = (photoId) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter(photo => photo.id !== photoId)
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handlePhotoUpload(e.dataTransfer.files);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.photos.length === 0) {
      alert('Debes subir al menos una foto');
      return;
    }
    if (!formData.captcha) {
      alert('Debes completar el captcha');
      return;
    }
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Publicar Mascota</h2>
        <p className="text-gray-600">Ayuda a reunir mascotas con sus familias</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subir Fotos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Camera className="inline h-4 w-4 mr-2" />
            Fotos (mínimo 1, máximo 3)
          </label>
          
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
              dragActive 
                ? 'border-violet-500 bg-violet-50' 
                : 'border-gray-300 hover:border-violet-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">Arrastra las fotos aquí o</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handlePhotoUpload(e.target.files)}
              className="hidden"
              id="photo-upload"
              disabled={formData.photos.length >= 3}
            />
            <label
              htmlFor="photo-upload"
              className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
            >
              Seleccionar fotos
            </label>
          </div>

          {/* Preview de fotos */}
          {formData.photos.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {formData.photos.map((photo) => (
                <div key={photo.id} className="relative">
                  <img
                    src={photo.url}
                    alt="Preview"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(photo.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors duration-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tipo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            🐾 Tipo
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
              <input
                type="radio"
                name="type"
                value="perdido"
                checked={formData.type === 'perdido'}
                onChange={handleInputChange}
                className="mr-3 text-violet-500"
              />
              <span className="font-medium">Perdido</span>
            </label>
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
              <input
                type="radio"
                name="type"
                value="encontrado"
                checked={formData.type === 'encontrado'}
                onChange={handleInputChange}
                className="mr-3 text-violet-500"
              />
              <span className="font-medium">Encontrado</span>
            </label>
          </div>
        </div>

        {/* Especie */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            🐶 Especie
          </label>
          <select
            name="species"
            value={formData.species}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200"
          >
            <option value="">Selecciona una especie</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-3">
            📝 Descripción breve
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={4}
            placeholder="Describe las características de la mascota (color, tamaño, comportamiento, etc.)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200 resize-none"
          />
        </div>

        {/* Zona */}
        <div>
          <label htmlFor="zone" className="block text-sm font-medium text-gray-700 mb-3">
            <MapPin className="inline h-4 w-4 mr-2" />
            Zona aproximada
          </label>
          <input
            type="text"
            id="zone"
            name="zone"
            value={formData.zone}
            onChange={handleInputChange}
            required
            placeholder="Ej: Colonia Roma Norte, Parque México"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200"
          />
          <p className="text-xs text-gray-500 mt-1">
            Por seguridad, no incluyas tu dirección exacta
          </p>
        </div>

        {/* Fecha */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-3">
            <Calendar className="inline h-4 w-4 mr-2" />
            Fecha
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200"
          />
        </div>

        {/* Contacto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            📞 Contacto
          </label>
          <div className="space-y-3">
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactType"
                  value="email"
                  checked={formData.contactType === 'email'}
                  onChange={handleInputChange}
                  className="mr-2 text-violet-500"
                />
                <Mail className="h-4 w-4 mr-1" />
                Email
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactType"
                  value="whatsapp"
                  checked={formData.contactType === 'whatsapp'}
                  onChange={handleInputChange}
                  className="mr-2 text-primary-500"
                />
                <Phone className="h-4 w-4 mr-1" />
                WhatsApp
              </label>
            </div>
            <input
              type={formData.contactType === 'email' ? 'email' : 'tel'}
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
              placeholder={
                formData.contactType === 'email' 
                  ? 'tu@email.com' 
                  : '+52 55 1234 5678'
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Captcha */}
        <div>
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <input
              type="checkbox"
              name="captcha"
              checked={formData.captcha}
              onChange={handleInputChange}
              required
              className="text-violet-500"
            />
            <Shield className="h-5 w-5 text-violet-500" />
            <span className="text-sm">
              ✔️ Confirmo que no soy un robot y que la información es verídica
            </span>
          </label>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-violet-500 hover:bg-violet-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default PublishForm;
