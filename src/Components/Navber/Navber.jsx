import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from 'react-icons/Hi';
import { AiOutlineClose } from 'react-icons/Ai';


const Navber = () => {

    const [open, setOpen] = useState(false)
    console.log(open);
    const routes = [
        { path: '/home', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/products', name: 'Products', id: 5 }
      ];
      
    return (
        <div>
            <nav>
              <div className="" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose className="text-4xl"></AiOutlineClose> :  <HiMenuAlt1 className="text-4xl"></HiMenuAlt1>  
                    
                }
              </div>

                <ul className={`duration-1000 md:flex ${open ? '' : 'hidden'}`}>
                {/* ${open ? 'top-16' : '-top-60'} */}
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
                </ul>
             
            </nav>
        </div>
    );
};

export default Navber;