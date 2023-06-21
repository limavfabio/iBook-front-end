import { Link, useLocation } from 'react-router-dom';

function SidebarLink({ text, path }) {
  const location = useLocation();

  const isActive = location.pathname === path

  return (
    <Link to={path}>
      <li
        className={`ml-2 py-2 pl-3 font-bold ${isActive ? 'bg-lime-500 text-white' : 'text-slate-700'
          }`}
      >
        {text}
      </li>
    </Link>
  )
}

export default SidebarLink;
