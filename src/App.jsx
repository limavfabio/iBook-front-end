import { RouterProvider } from 'react-router-dom';

import router from './router';

function App() {
  return (
    <div className="text-stone-800">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
