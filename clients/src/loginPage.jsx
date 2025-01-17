import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLoginMutation } from "./api/auh";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "./components/dashBoard";

const schema = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().min(3, 'il faut au moins 3 caracteres').required(),
});

export default function LoginPage() {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const [login, {data, isLoading, isSuccess, isError, error}] = useLoginMutation();
    useEffect(() => {
        if(isSuccess) {
            localStorage.setItem('user', JSON.stringify(data))
                navigate('/admin');
        }
    }, [isSuccess]);

    const onSubmit = (data) => {
        login(data);
    };
  
    return (
        <div className="min-h-screen w-full grid grid-cols-2 place-items-center">
            <div className="px-8 w-full flex flex-col">
                <h1 className="text-3xl font-bold text-center mb-4">Se connecter</h1>
                <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-4 w-full max-w-lg">
                    <div className="flex flex-col space-y-2 bg-#05445E" >
                        <label className="font-semibold text-lg w-full" htmlFor="email">
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
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="password">Mot de passe</label>
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
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'bg-blue-200 cursor-not-allowed' : ' '}`}
                    >
                        {isLoading ? 'Chargement...' : 'Se connecter'}
                    </button>
                   
                    <button type="submit" className={`bg-blue-500 m-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'bg-blue-200 cursor-not-allowed' : ''}`}>
                    <Link to="/admin/registerPage" >Inscription</Link>
                    </button>
                </form>
            </div>
            <div className="h-screen">
                <img src="https://www.sytrad.fr/files/Images/Reduction%20des%20dechets/Un%20plan%20de%20prevention/Au%20magasin/liste%20de%20courses.jpg" alt="image liste course" className="h-full" />
            </div>
        </div>
    );
}


/*import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLoginMutation } from "./api/auh";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "./components/dashBoard";

const schema = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().min(3, 'il faut au moins 3 caracteres').required(),
});


export default function LoginPage() {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const [login, {data, isLoading, isSuccess, isError, error}] = useLoginMutation();
    useEffect(() => {
        if(isSuccess) {
            localStorage.setItem('user', JSON.stringify(data))
                navigate('/admin');
        }
    }, [isSuccess]);

    const onSubmit = (data) => {
        login(data);
    };
  
  return (
    <div className="min-h-screen w-full grid grid-cols-2 place-items-center">
      <div className="px-8 w-full flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-4">Se connecter</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-4 w-full max-w-lg">
          <div className="flex flex-col space-y-2 bg-#05445E" >
            <label className="font-semibold text-lg w-full" htmlFor="email">
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
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="password">Mot de passe</label>
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
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'bg-blue-200 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Chargement...' : 'Se connecter'}
          </button>
        </form>
      </div>
      <div>
        <img src="https://www.sytrad.fr/files/Images/Reduction%20des%20dechets/Un%20plan%20de%20prevention/Au%20magasin/liste%20de%20courses.jpg" alt="image liste course"  />
      </div>
    </div>
  );
}
   */