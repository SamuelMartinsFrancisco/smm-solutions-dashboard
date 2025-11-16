'use client'

import { useRouter } from 'next/navigation';
import { joinClasses } from "../utils/utils";

export default function SideBarItem ({
  label,
  LeftIcon,
  className,
  link,
  onClick,
  isSelected
}) {
  const defaultClasses = 'w-[80%] list-none cursor-pointer ml-auto mr-auto shadow-sm';
  const router = useRouter();

  const handleOnClick = () => {
    router.push(link);
    if (onClick) onClick();
  }

  return (
    <li className={joinClasses(defaultClasses, className)} onClick={handleOnClick}>
      <div className={
        joinClasses(
          'h-10 w-full pl-[5%] flex items-center rounded-md bg-white',
          isSelected ? 'border-l-6 border-cyan-300' : undefined
        )
      }>
        {
          LeftIcon 
            && <span className='mr-2'>{ <LeftIcon /> }</span>
        }
        <span className='text-xl h-fit'>
          { label }
        </span>
      </div>
    </li>
  );
}