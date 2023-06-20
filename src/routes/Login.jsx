import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setUsername as setUsernameRedux } from "../redux/userSlice";

function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setUsernameRedux(username));
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

const mapDispatchToProps = {
  setUsernameRedux,
};

export default connect(null, mapDispatchToProps)(Login);
