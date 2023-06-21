import { Link, useLocation } from 'react-router-dom';
function SidebarLink({ text, path, icon }) {
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <Link to={path}>
      <li
        className={`ml-2 py-4 pl-3 flex  items-center  font-bold ${isActive ? 'bg-lime-500 text-white' : 'text-slate-700'
      }`}
      >
        <span className='mr-5 text-xl'>{icon}</span>
        {text}
      </li>
    </Link>
  );
}

export default SidebarLink;
