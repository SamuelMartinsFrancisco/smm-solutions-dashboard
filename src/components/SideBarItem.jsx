'use client'

import { useRouter } from 'next/navigation';
import { joinClasses } from "@/utils/utils";

export default function SideBarItem ({
  label,
  LeftIcon,
  className,
  link,
}) {
  const defaultClasses = 'w-[80%] list-none cursor-pointer ml-auto mr-auto shadow-sm';
  const router = useRouter();

  return (
    <li className={joinClasses(defaultClasses, className)} onClick={() => router.push(link)}>
      <div className='h-10 w-full pl-[5%] flex items-center rounded-md bg-white'>
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