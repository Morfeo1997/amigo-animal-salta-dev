import { useState } from 'react';
import { User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    wantsToAdoptOrPublish: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formData.wantsToAdoptOrPublish && !formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio si planeas adoptar o publicar';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Formulario de registro enviado:', formData);
      // Aquí iría la lógica para enviar el formulario al backend
      alert('¡Registro exitoso! Bienvenido a AdoptaMe');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Crear Cuenta</h2>
        <p className="text-gray-600">Únete a la comunidad AdoptaMe</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ingresa tu nombre completo"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Correo electrónico *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="tu@email.com"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Campo Contraseña */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Contraseña *
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Mínimo 6 caracteres"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Checkbox para adoptar/publicar */}
        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="wantsToAdoptOrPublish"
              checked={formData.wantsToAdoptOrPublish}
              onChange={handleInputChange}
              className="mt-1 text-primary-500 focus:ring-primary-500"
            />
            <div>
              <span className="text-sm font-medium text-gray-700">
                Quiero adoptar mascotas o publicar mascotas perdidas/encontradas
              </span>
              <p className="text-xs text-gray-500 mt-1">
                Si seleccionas esta opción, necesitaremos tu número de teléfono
              </p>
            </div>
          </label>
        </div>

        {/* Campo Teléfono (condicional) */}
        {formData.wantsToAdoptOrPublish && (
          <div className="animate-in fade-in duration-200">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Número de teléfono *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+52 55 1234 5678"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Necesario para contacto directo en adopciones
            </p>
          </div>
        )}

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Crear Cuenta
        </button>
      </form>

      {/* Enlace para login */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <p className="text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <a href="#" className="text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
