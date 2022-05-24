import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900 bg-opacity-30 transition-opacity duration-200 lg:z-auto lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden='true'
      ></div>

      {/* Sidebar */}
      <div
        id='sidebar'
        ref={sidebar}
        className={`no-scrollbar lg:sidebar-expanded:!w-64 absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 transform flex-col overflow-y-scroll bg-slate-800 p-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 lg:overflow-y-auto 2xl:!w-64 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className='mb-10 flex justify-between pr-3 sm:px-2'>
          {/* Close button */}
          <button
            ref={trigger}
            className='text-slate-500 hover:text-slate-400 lg:hidden'
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls='sidebar'
            aria-expanded={sidebarOpen}
          >
            <span className='sr-only'>Close sidebar</span>
            <svg
              className='h-6 w-6 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to='/' className='block'>
            <svg width='32' height='32' viewBox='0 0 32 32'>
              <defs>
                <linearGradient
                  x1='28.538%'
                  y1='20.229%'
                  x2='100%'
                  y2='108.156%'
                  id='logo-a'
                >
                  <stop stopColor='#A5B4FC' stopOpacity='0' offset='0%' />
                  <stop stopColor='#A5B4FC' offset='100%' />
                </linearGradient>
                <linearGradient
                  x1='88.638%'
                  y1='29.267%'
                  x2='22.42%'
                  y2='100%'
                  id='logo-b'
                >
                  <stop stopColor='#38BDF8' stopOpacity='0' offset='0%' />
                  <stop stopColor='#38BDF8' offset='100%' />
                </linearGradient>
              </defs>
              <rect fill='#6366F1' width='32' height='32' rx='16' />
              <path
                d='M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z'
                fill='#4F46E5'
              />
              <path
                d='M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z'
                fill='url(#logo-a)'
              />
              <path
                d='M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z'
                fill='url(#logo-b)'
              />
            </svg>
          </NavLink>
        </div>

        {/* Links */}
        <div className='space-y-8'>
          {/* Pages group */}
          <div>
            <h3 className='pl-3 text-xs font-semibold uppercase text-slate-500'>
              <span
                className='lg:sidebar-expanded:hidden hidden w-6 text-center lg:block 2xl:hidden'
                aria-hidden='true'
              >
                •••
              </span>
              <span className='lg:sidebar-expanded:block lg:hidden 2xl:block'>
                Pages
              </span>
            </h3>
            <ul className='mt-3'>
              {/* Dashboard */}
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 ${
                  pathname === '/' && 'bg-slate-900'
                }`}
              >
                <NavLink
                  end
                  to='/dashboard'
                  className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                    pathname === '/' && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <svg className='h-6 w-6 shrink-0' viewBox='0 0 24 24'>
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname === '/dashboard' && '!text-indigo-500'
                        }`}
                        d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z'
                      />
                      <path
                        className={`fill-current text-slate-600 ${
                          pathname === '/dashboard' && 'text-indigo-600'
                        }`}
                        d='M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z'
                      />
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname === '/dashboard' && 'text-indigo-200'
                        }`}
                        d='M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z'
                      />
                    </svg>
                    <span className='lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100'>
                      Dashboard
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Cameras */}
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 ${
                  pathname.includes('analytics') && 'bg-slate-900'
                }`}
              >
                <NavLink
                  end
                  to='/dashboard/camera'
                  className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                    pathname.includes('analytics') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <svg className='h-6 w-6 shrink-0' viewBox='0 0 24 24'>
                      <path
                        className={`fill-current text-slate-600 ${
                          pathname.includes('camera') && 'text-indigo-500'
                        }`}
                        d='M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z'
                      />
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname.includes('camera') && 'text-indigo-300'
                        }`}
                        d='M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z'
                      />
                      <path
                        className={`fill-current text-slate-600 ${
                          pathname.includes('camera') && 'text-indigo-500'
                        }`}
                        d='M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z'
                      />
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname.includes('camera') && 'text-indigo-300'
                        }`}
                        d='M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z'
                      />
                    </svg>
                    <span className='lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100'>
                      IP Cameras
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Event */}
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 ${
                  pathname.includes('analytics') && 'bg-slate-900'
                }`}
              >
                <NavLink
                  end
                  to='/dashboard/events'
                  className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                    pathname.includes('analytics') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <svg className='h-6 w-6 shrink-0' viewBox='0 0 24 24'>
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname.includes('events') && 'text-indigo-300'
                        }`}
                        d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z'
                      />
                      <path
                        className={`fill-current text-slate-700 ${
                          pathname.includes('events') && '!text-indigo-600'
                        }`}
                        d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z'
                      />
                      <path
                        className={`fill-current text-slate-600 ${
                          pathname.includes('events') && 'text-indigo-500'
                        }`}
                        d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z'
                      />
                    </svg>
                    <span className='lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100'>
                      Events
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Event */}
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 ${
                  pathname.includes('analytics') && 'bg-slate-900'
                }`}
              >
                <NavLink
                  end
                  to='/dashboard/upload-data'
                  className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                    pathname.includes('analytics') && 'hover:text-slate-200'
                  }`}
                >
                  <div className='flex items-center'>
                    <svg className='h-6 w-6 shrink-0' viewBox='0 0 24 24'>
                      <path
                        className={`fill-current text-slate-600 ${
                          pathname.includes('upload-data') && 'text-indigo-500'
                        }`}
                        d='M8 1v2H3v19h18V3h-5V1h7v23H1V1z'
                      />
                      <path
                        className={`fill-current text-slate-600 ${
                          pathname.includes('upload-data') && 'text-indigo-500'
                        }`}
                        d='M1 1h22v23H1z'
                      />
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname.includes('upload-data') && 'text-indigo-300'
                        }`}
                        d='M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z'
                      />
                    </svg>
                    <span className='lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100'>
                      Upload Data
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className='mt-auto hidden justify-end pt-3 lg:inline-flex 2xl:hidden'>
          <div className='px-3 py-2'>
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className='sr-only'>Expand / collapse sidebar</span>
              <svg
                className='sidebar-expanded:rotate-180 h-6 w-6 fill-current'
                viewBox='0 0 24 24'
              >
                <path
                  className='text-slate-400'
                  d='M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z'
                />
                <path className='text-slate-600' d='M3 23H1V1h2z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
