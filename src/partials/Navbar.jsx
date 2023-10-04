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
                <div className=" relative ml-36 flex">
                    <div className="justify-center  w-full flex items-center">
                        <nav className="  ">
                            <ul className="flex gap-2">
                                <li className=" py-2 ">
                                    <CustomLink to="/">Home</CustomLink>
                                </li>
                                <li className="py-2">
                                    <CustomLink to="/product">Products</CustomLink>
                                </li>
                                <li className="py-2">
                                    <CustomLink to="/">Jasa</CustomLink>
                                </li>
                                <li className=" py-2 ">
                                    <CustomLink to='/'>
                                        Your Cart
                                    </CustomLink>
                                </li> 
                            </ul>
                        </nav>
                    </div>
                    <div className="gap-2  items-center flex flex-row">
                        <Link to="auth/login">
                            <div className="border border-brown-500 p-1 hover:text-white hover:bg-brown-500 px-6 rounded-3xl text-gray-700 ">

                            <h1 className="tracking-wide text-md font-semibold">SignIn </h1>
                            </div>
                        </Link>
                        <Link to="/auth/register">
                            <div className="bg-brown-500 hover:bg-brown-300 p-1 px-6 rounded-3xl text-white ">
                            <h1 className="tracking-wide text-md font-semibold">Register </h1>
                            </div>
                        </Link>
                    </div>        
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
<li className={isActive ? 'text-base text-brown-500 border-b-2 border-brown-500 border-shadow font-extrabold  text-[1.3rem] p-2 ' : 'text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-brown-500 p-2 hover:text-brown-500 hover:text-base '}>
  <Link to={to} {...props}>
    {children}
  </Link>
</li>
)
}