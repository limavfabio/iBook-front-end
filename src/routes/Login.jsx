import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from '../redux/userSlice';

function Login() {
  const API_URL = 'https://venom-precision.onrender.com/api/v1';
  // const API_URL = 'http://127.0.0.1:3000/api/v1';

  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to retrieve all users
      const response = await fetch(`${API_URL}/users`);
      const users = await response.json();

      // Check if the submitted username exists in the retrieved users and get the user id
      const userExists = users.some((user) => {
        if (user.username === username) {
          // Dispatch the setUsername action to store the username and id
          dispatch(setUser({ id: user.id, username }));
          return true;
        }
        return false;
      });

      if (userExists) {
        setErrorMessage(''); // Reset the error message
        redirect('/'); // Redirect to the home page
        toast.success('Login Successfully!!!', { theme: 'dark' });
      } else {
        setErrorMessage('User does not exist, please choose another username'); // Set an error message
        toast.error('Login failed. Please try again.', { theme: 'dark' });
      }
    } catch (error) {
      toast.error('Login failed. Please try again.', { theme: 'dark' });
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-100 items-center justify-center">

      <img className="w-56 mb-20" src="/venom-precision-logo.png" alt="logo" />

      <div className="border p-5 rounded-lg bg-white shadow w-min">
        <form onSubmit={handleSubmit} className="flex flex-col items-end">
          <label htmlFor="username" className="mb-2 block">
            <p className="font-semibold text-center text-slate-700 pb-3">Log in with your username</p>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              className="my-2 border border-[#BFD872] px-6 py-2 focus:border-[#85a80d] focus:bg-white focus:outline-none"
              required
            />
          </label>
          {errorMessage && (
            <p className="text-sm font-semibold text-red-500">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="mt-2 bg-[#97BF0F] px-6 py-2 text-white hover:bg-[#85a80d] focus:bg-[#6d8a0a]"
          >
            Log In
          </button>
        </form>
        <div className="flex flex-col items-center text-slate-700">
          <p className="mt-4">Dont have an username?</p>
          <Link to="/signup" className="hover:text-black hover:underline">Click here to sign up.</Link>
        </div>
      </div>

    </div>
  );
}

export default Login;
