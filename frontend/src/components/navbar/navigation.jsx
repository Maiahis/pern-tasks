import { MdTask } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

export const publicRoutes = [    
    {name: 'About',
     path: '/about'
    },
    {name: 'Login',
     path: '/login'   
    },
    {name: 'Register',
     path: '/register'
    },
]

export const privateRoutes = [
   
    {name: 'Tasks',
     path: '/tasks',
     icon:  <BiTask className="w-5 h-5"/>   
    },
    {name: 'Add',
     path: '/tasks/new',
     icon:   <MdTask />
    },
     
    {name: 'Profile',
     path: '/profile',
     icon: <FaRegUserCircle />   
    }
]