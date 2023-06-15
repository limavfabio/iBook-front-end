import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link to="/about">Link to the about page</Link>
    </div>
  )
}

export default Home
