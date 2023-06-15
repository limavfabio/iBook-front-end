import { RouterProvider} from 'react-router-dom'

import router from './AppRouter.jsx'
import Header from './components/layout/Header.jsx'

function App() {
  return (
  <div>
    <Header />
    <RouterProvider router={router} />
  </div>
  )
}

export default App
