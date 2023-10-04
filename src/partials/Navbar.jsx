import React, { Fragment } from "react";
// react-dom
import { useMatch, useResolvedPath,Link} from 'react-router-dom';

export default function NavbarPar(){
    return(
        <Fragment>
        <div className='border-b-2 font-body md:fixed bg-white bg-opacity-95 md:z-[30] shadow md:static flex w-full z-[30] md:block md:top-0 '>
            <div className="container py-2  md:mx-auto max-w-7xl ">
                <div className="items-center py-2 absolute  w-full flex-none "> 
                    <h1 className="font-semibold  text-primary h-full justify-center inline-flex items-center text-3xl">Tech<span className="text-black underline decoration-primary">Sandyakala</span>.</h1>
                </div>
                <div className=" justify-center w-full flex items-center">
                    <nav className=" hidden md:block">
                        <ul className="flex gap-2">
                            <li className=" py-2 ">
                                <CustomLink to="/">Home</CustomLink>
                            </li>
                            <li className="py-2">
                                <CustomLink to="/jadwal-panen">Products</CustomLink>
                            </li>
                            <li className="py-2">
                                <CustomLink to="/jadwal-panen">Jasa</CustomLink>
                            </li>
                            <li className=" py-2 ">
                                <CustomLink to='/pesanan'>
                                    Your Cart
                                </CustomLink>
                            </li> 
                        </ul>
                    </nav>
                </div>         
            </div>       
{/* mobilee  */}          
        </div>
    </Fragment>
)
}
function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })

return (
<li className={isActive ? 'text-base text-teal-500 border-b-2 border-teal-500 border-shadow font-extrabold  text-[1.3rem] p-2 ' : 'text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-teal-500 p-2 hover:text-teal-500 hover:text-base '}>
  <Link to={to} {...props}>
    {children}
  </Link>
</li>
)
}