import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import { auth } from "../firebase.init";

const Navbar = ({ children }) => {
  
  const { pathname } = useLocation();
  const [user] = useAuthState(auth);
  console.log(pathname);

  // const [admin] = useAdmin(user);
  // console.log(admin)
  const [dark, setDark] = useState(localStorage.isDark);
  const toggleTheme = () => {
    console.log(dark);
    localStorage.removeItem("isDark");
    localStorage.setItem("isDark", JSON.stringify(!dark));
    setDark(!dark);
    console.log(dark);
  };

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    console.log(isDark);
    
    // }
    setDark(isDark);
  }, []);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <div class='drawer  drawer-end' data-theme={dark ? "dark" : "light"}>
      <input id='my-drawer-3' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col'>
        <div class='w-full navbar bg-base-100 fixed top-0 z-50 lg:px-20'>
          {pathname.includes("dashboard") && (
            <label
              tabindex='0'
              for='my-drawer-2'
              class='btn btn-ghost lg:hidden '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
          )}
          <div class='flex-1 px-2 mx-2 text-2xl'>
          Beriye Pori</div>
          <div class='flex-none lg:hidden'>
            <label for='my-drawer-3' class='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                class='inline-block w-6 h-6 stroke-current'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>

          <div class='flex-none hidden lg:block'>
            <ul class='menu menu-horizontal gap-x-2'>
              <li>
                <NavLink to='/' className='rounded-lg'>
                  Home
                </NavLink>
              </li>
              
                <li>
                  <NavLink to='/dashboard/add-service' className='rounded-lg'>
                    Dashboard
                  </NavLink>
                </li>
              
              <li>
                <NavLink to='/about' className='rounded-lg'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/package' className='rounded-lg'>
                  Package
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='rounded-lg'>
                  Contact
                </NavLink>
              </li>
              <li>
               { user?  <button className="btn btn-ghost" onClick={logout}>
            Sign Out
          </button>:<NavLink to='/login' className='rounded-lg'>
                  Login
                </NavLink>}
              </li>

              <li class='dropdown dropdown-hover dropdown-end'>
                <label
                  tabindex='0'
                  class='btn btn-primary btn-outline rounded-lg'
                >
                  BOOK NOW
                </label>
                <ul
                  tabindex='0'
                  class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </li>
              <label class='swap swap-rotate'>
                <input type='checkbox'  onClick={toggleTheme} />

                {dark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </label>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class='drawer-side'>
        <label for='my-drawer-3' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100'>
          <li>
            <NavLink to='/' className='rounded-lg'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='rounded-lg'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/services' className='rounded-lg'>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='rounded-lg'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className='rounded-lg'>
              Login
            </NavLink>
          </li>
          <div
            tabindex='0'
            class='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'
          >
            <div class='collapse-title text-xl font-medium'>Book Now</div>
            <div class='collapse-content'>
              <li>
                <NavLink to='/contact' className='rounded-lg'>
                  Quick book
                </NavLink>
              </li>
              <li>
                <NavLink to='/login' className='rounded-lg'>
                  Pre book
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;