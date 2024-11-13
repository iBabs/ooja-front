import { useState } from 'react';
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { IoIosMenu, IoMdClose } from "react-icons/io";


function Navigation() {
  const {state:{user}, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(false);
 
  const {first_name} = user.user

  const handleLogout = () => {
    const sure = confirm("Are you sure you want to log out?");
    if (sure) {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("user");
    }
  };

  return (
    <header className="bg-white py-5">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/" className="flex items-center justify-center">
              <img src="/svgs/buy.svg" alt="Ooja logo" width={75} />
              <span className="font-iceberg font-extrabold text-primary text-4xl">
                Ooja
              </span>
            </Link>
          </div>

          <div className={`${open?"block":"hidden"} md:block`}>
            <nav aria-label="Global" className='hidden md:block'>
              <ul className="md:flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    {" "}
                    About{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    {" "}
                    Careers{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    {" "}
                    History{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    {" "}
                    Services{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    {" "}
                    Projects{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    {" "}
                    Blog{" "}
                  </NavLink>
                </li>
                <li>
                  <p className="text-center font-bold ">Hi, {first_name}</p>
                  <button
                    onClick={handleLogout}
                    className="bg-primary text-tertiary py-2 px-4 rounded-md font-bold transition-all ease-linear duration-150 hover:bg-secondary"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </nav>

            {/* mobile */}
            {open && (<nav aria-label="Global" className='w-screen fixed py-5 left-0 top-20 bg-black/20 z-30 md:hidden transition-all duration-200 ease-linear'>
              <ul className="flex flex-col items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className="text-black transition "
                    to="#"
                  >
                    {" "}
                    About{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-black transition "
                    to="#"
                  >
                    {" "}
                    Careers{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-black transition "
                    to="#"
                  >
                    {" "}
                    History{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-black transition "
                    to="#"
                  >
                    {" "}
                    Services{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-black transition "
                    to="#"
                  >
                    {" "}
                    Projects{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-black transition "
                    to="#"
                  >
                    {" "}
                    Blog{" "}
                  </NavLink>
                </li>
                <li>
                  <p className="text-center font-bold ">Hi, {first_name}</p>
                  <button
                    onClick={handleLogout}
                    className="bg-primary text-tertiary py-2 px-4 rounded-md font-bold transition-all ease-linear duration-150 hover:bg-secondary"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </nav>)}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={()=>{
                setOpen(!open)
              }}
              >
               {open? <IoMdClose size={30}/> : <IoIosMenu size={30}/>}
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
