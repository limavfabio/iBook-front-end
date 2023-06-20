import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to retrieve all users
      const response = await fetch('http://localhost:3000/api/v1/users');
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
      } else {
        setErrorMessage('User does not exist'); // Set an error message
      }
    } catch (error) {
      console.error('Error:', error); // Log any other errors
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="mb-2 block">
          <p className="font-semibold">Username</p>

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
          className="mt-4 bg-[#97BF0F] px-6 py-2 text-white hover:bg-[#85a80d] focus:bg-[#6d8a0a]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
