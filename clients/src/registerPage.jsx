import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSignupMutation } from './api/auh';
import { useNavigate } from 'react-router-dom';


const schema = yup.object().shape({
  firstName: yup.string().required('Prénom obligatoire'),
  lastName: yup.string().required('Nom obligatoire'),
  email: yup.string().email().required('Email obligatoire'),
  password: yup.string().min(3, 'Il faut au moins 3 caractères').required('Mot de passe obligatoire'),
});

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [registerUser, { data, isLoading, isSuccess, isError, error }] = useSignupMutation(); // Utilisez votre mutation d'inscription

  useEffect(() => {
    if (isSuccess) {
      // Stockez les informations de l'utilisateur localement (localStorage) si nécessaire
      localStorage.setItem('user', JSON.stringify(data));

      // Redirigez l'utilisateur vers la page appropriée après l'inscription réussie
      navigate('/admin'); // Remplacez '/dashboard' par la page souhaitée
    }
  }, [isSuccess]);

  const onSubmit = (data) => {
    // Appelez la mutation d'inscription avec les données du formulaire
    registerUser(data);
  };
  /* const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Ici, vous pouvez ajouter la logique pour envoyer les données d'inscription au serveur
    register(data);
  };
 */
  return (
    <div className="min-h-screen w-full grid grid-cols-2 place-items-center">
      <div className="px-8 w-full flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-4">Inscription</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-4 w-full max-w-lg">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-lg" htmlFor="firstName">
              Prénom
            </label>
            <input
              {...register("firstName")}
              type="text"
              name="firstName"
              id="firstName"
              className="border border-gray-400 rounded-lg p-2"
            />
            {
              errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>
            }
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-lg" htmlFor="lastName">
              Nom
            </label>
            <input
              {...register("lastName")}
              type="text"
              name="lastName"
              id="lastName"
              className="border border-gray-400 rounded-lg p-2"
            />
            {
              errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>
            }
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-lg" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              className="border border-gray-400 rounded-lg p-2"
            />
            {
              errors.email && <p className="text-red-500">{errors.email.message}</p>
            }
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-lg" htmlFor="password">
              Mot de passe
            </label>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              className="border border-gray-400 rounded-lg p-2"
            />
            {
              errors.password && <p className="text-red-500">{errors.password.message}</p>
            }
          </div>
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'bg-blue-200 cursor-not-allowed' : ''} `}
          > {isLoading ? 'Chargement...' : 'S"inscrire'}
          </button>
        </form>
      </div>
      {/* Ajoutez une image ou tout autre élément à droite si nécessaire */}
    </div>
  );
};

export default RegisterPage;
