'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SmmLogo from '../../public/assets/img/logo.jpg';
import { joinClasses } from '@/utils/utils';
import SideBarItem from './SideBarItem';
import { BookmarkBook } from 'iconoir-react';
import { usePathname } from 'next/navigation';
import { ROUTES } from '../constants';

export default function SideBar({
  className,
}) {
  const defaultClasses = 'fixed min-w-50 h-screen w-[22%] bg-gray-200 rounded-r-3xl max-sm:hidden';
  const [currentSelected, setCurrentSelected] = useState(''); 
  const pagePath = usePathname();

  useEffect(() => {
    switch (pagePath) {
      case ROUTES.courses:
        setCurrentSelected('courses');
    }
  }, [pagePath])

  return (
    <div className={joinClasses(defaultClasses, className)}>
      <header className='w-full bg-gray-900 mb-7'>
        <div className='flex items-center'>
          <Image 
            className='max-w-[20%] ml-[3%] mr-[3%]'
            src={SmmLogo}
            width={100} 
            height={100} 
            alt='SMM Solutions organization logo'
          />
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

