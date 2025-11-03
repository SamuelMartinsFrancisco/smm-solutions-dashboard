'use client'

import React from 'react';
import Image from 'next/image';
import SmmLogo from '../../public/assets/img/logo.jpg';
import { joinClasses } from '@/utils/utils';
import SideBarItem from './SideBarItem';
import { BookmarkBook } from 'iconoir-react';

export default function SideBar({
  className,
}) {
  const defaultClasses = 'min-w-50 h-screen w-[25%] bg-gray-200 rounded-r-3xl';

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
          />
        </ul>
      </nav>
    </div>
  );
}

