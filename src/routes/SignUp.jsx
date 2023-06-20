import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/userSlice";

function SignUp() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch all users
      const response = await fetch("http://localhost:3000/api/v1/users");
      const users = await response.json();

      // Check if there isn't a user with the submitted username
      const userExists = users.some((user) => user.username === username);

      if (userExists) {
        setErrorMessage("User already exists");
        return;
      } else {
        // Dispatch the createUser action to store the username
        dispatch(createUser(username));
        // Redirects to the login page
        redirect("/login");
      }
    } catch (error) {
      console.error("Error:", error); // Log any other errors
    }
  };

  return (
    <div>
      <h1>Signup page</h1>
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

export default SignUp;
