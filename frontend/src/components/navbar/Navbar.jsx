import { Link, useLocation } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './navigation';
import { Container } from '../ui';
import { useAuth } from '../../context/AuthContext';
import { twMerge } from 'tailwind-merge';
import { IoLogOutOutline } from "react-icons/io5";


function Navbar() {

  const location = useLocation();
  const {isAuth, signout, user} = useAuth();
 

  return (
    <nav className='bg-zinc-950'>
        <Container className="flex justify-between py-3">
        <Link to="/">    
        <h1 className="font-bold text-2xl">PERN tasks</h1>
        </Link>
        
        <ul className="flex items-center justify-center md:gap-x-1 ">
          {isAuth
           ?
           <>
           { privateRoutes.map(({path, name, icon}) => (
              <li  key={path}>
              
              <Link to={path} className={twMerge(
                'text-slate-300 flex items-center px-3 py-1 gap-x-1',
                location.pathname === path && "bg-sky-700")}
              >
                {icon}
              <span className="hidden sm:block">
                {name}
              </span>  
              
              </Link>
              </li>
            ))}

               <li className="text-slate-300 flex items-center px-3 py-1 hover:cursor-pointer"
                onClick={() => {
                  signout()
                }} 
                >
                <IoLogOutOutline className='w-5 h-5' /> 
                  <span className="hidden sm:block">Logout</span>
                </li>
                
                <li className="flex gap-x-1 items-center justify-center">
                  <img src={user.gravatar} alt="Gravatar" className="h-8 w-8 rounded-full"/>
                  <span className="font-medium"> {user.username} </span>
                </li>
           </>

           : publicRoutes.map(({path, name}) => (
                <li className={twMerge(
                'text-slate-300 flex items-center px-3 py-1',
                location.pathname === path && "bg-sky-700"     
            )} key={path}>
                        <Link to={path}>{name}</Link>
                </li>
            ))}    
                     
        </ul>
        </Container>
        
    </nav>
  );
}

export default Navbar
