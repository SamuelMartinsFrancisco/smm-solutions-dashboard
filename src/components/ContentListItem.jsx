import Image from "next/image";
import SmmLogo from '../../public/assets/img/logo.jpg';
import Button from "./Button";
import { joinClasses } from "@/utils/utils";
import { Trash, EditPencil } from "iconoir-react";

export default function ContentListItem({
  id,
  title,
  description,
  imgAlt,
  img,
  onDelete,
  onEdit,
}) {
  const defaultButtonClasses = 'min-w-10 m-1 text-white block';

  const onClick = (operation) => {
    switch (operation) {
      case 'edit':
        window.alert('Edited: ' + id);
        break;
      case 'delete':
        window.alert('Deleted: ' + id);
        break;
    }
  }

  return (
    <div className='w-full flex gap-[3%] items-center mb-7'>
      <Image 
        src={img ?? SmmLogo}
        className='min-w-20 w-[10%] rounded-sm'
        width={100}
        height={100}
        alt={imgAlt ?? 'list item image'}
      />
      <div className='w-full max-h-32 p-3 rounded-md basis-auto border text-wrap text-ellipsis flex flex-col'>
        <h3 className='font-bold mb-1 text-gray-800'>{title}</h3>
        <p className='md:line-clamp-4 sm:line-clamp-3 flex-grow-1 text-gray-700'>
          {description}
        </p>
      </div>
      <div className='flex flex-col justify-evenly'>
        <Button 
          LeftIcon={() => <EditPencil />}
          className={joinClasses(defaultButtonClasses, 'bg-sky-600')}
          onClick={onEdit}
          aria-label='Edit course'
        />
        <Button 
          LeftIcon={() => <Trash />}
          className={joinClasses(defaultButtonClasses, 'bg-red-500')}
          onClick={onDelete}
          aria-label='Delete course'
        />
      </div>
    </div>
  );
}