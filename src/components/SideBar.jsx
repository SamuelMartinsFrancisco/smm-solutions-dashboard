'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SmmLogo from '../../public/assets/img/logo.jpg';
import { joinClasses } from '../utils/utils';
import SideBarItem from './SideBarItem';
import { BookmarkBook, Menu } from 'iconoir-react';
import { usePathname } from 'next/navigation';
import { ROUTES } from '../constants';
import useWindowWidth from '../hooks/useWindowWidth';

export default function SideBar({
  className,
}) {
  const [currentSelected, setCurrentSelected] = useState(''); 
  const windowWidth = useWindowWidth();
  const [hideSideBar, setHideSideBar] = useState(true);
  const pagePath = usePathname();
  const normalModeClasses = 'min-w-50 h-screen w-[22%] rounded-r-3xl max-lg:min-w-full';
  const hiddenSideBarClasses = 'min-w-10 w-10 h-10 top-0 left-0 overflow-hidden rounded-r-sm max-lg:min-w-full';

  const defaultClasses = () => {
    const base = 'bg-gray-200 fixed';
    if (windowWidth > 1022) return joinClasses(base, normalModeClasses);
    if (hideSideBar) return joinClasses(base, hiddenSideBarClasses);

    return joinClasses(base, normalModeClasses);
  }

  useEffect(() => {
    switch (pagePath) {
      case ROUTES.courses:
        setCurrentSelected('courses');
    }
  }, [pagePath])

  return (
    <div className={joinClasses(defaultClasses(), className)}>
      <header className='w-full bg-gray-900 mb-7'>
        <div className='flex items-center'>
          <div className='m-4 max-lg:m-2.5 max-lg:cursor-pointer' onClick={() => setHideSideBar(prev => !prev)}>
            <Menu className='text-white' />
          </div>
          <h1 className='text-white text-2xl font-bold'> 
            SMM Solutions 
          </h1>
        </div>
      </header>
      <nav>
        <ul className='flex flex-col gap-3'>
          <SideBarItem 
            label='Cursos'
            link='/courses'
            LeftIcon={() => <BookmarkBook />}
            onClick={() => setCurrentSelected('courses')}
            isSelected={currentSelected === 'courses'}
          />
        </ul>
      </nav>
    </div>
  );
}

