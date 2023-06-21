import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser } from '../redux/userSlice';

function SignUp() {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch all users
      const response = await fetch('http://localhost:3000/api/v1/users');
      const users = await response.json();

      // Check if there isn't a user with the submitted username
      const userExists = users.some((user) => user.username === username);

      if (userExists) {
        setErrorMessage('User already exists, please log in.');
        return;
      }
      dispatch(createUser(username));
      // Handle user created

      toast.success('User created successfully! Procceed to login page.', { theme: 'dark' });

      redirect('/login');
    } catch (error) {
      console.error('Error:', error); // Log any other errors
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-100 items-center justify-center">
      <div className="border p-5 rounded-lg bg-white shadow w-min">
        <form onSubmit={handleSubmit} className="flex flex-col items-end">
          <label htmlFor="username" className="mb-2 block">
            <p className="font-semibold text-center text-slate-700 pb-3">Sign up with your username</p>
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
            Sign Up
          </button>
        </form>
        <div className="flex flex-col items-center text-slate-700">
          <p className="mt-4">Already have an username?</p>
          <Link to="/login" className="hover:text-black hover:underline">Click here to log in.</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
