import { joinClasses } from "@/utils/utils";
import { Xmark } from "iconoir-react";

export default function Modal ({
  className,
  onClose,
  ...props
}) {
  const defaultBackgroundClasses = 'fixed top-0 left-0 w-full h-full bg-gray-500/40 z-999 flex justify-center items-center backdrop-blur-xs';
  const defaultModalBoxClasses = 'm-auto p-3 rounded-xl z-1000 opacity-100';

  return (
    <div className={defaultBackgroundClasses}>
      <div 
        className={joinClasses(defaultModalBoxClasses, className)} 
        {...props}
      >
        <div 
          className='w-fit ml-auto mr-2 mb-1 cursor-pointer' 
          onClick={onClose} 
          aria-label='fechar formulário'
        >
          <Xmark />
        </div>
        <div className='w-full min-h-20 max-h-[80vh]'>
          {props.children}
        </div>
      </div>
    </div>
  )
}