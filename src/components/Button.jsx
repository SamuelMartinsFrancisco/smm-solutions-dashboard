import { joinClasses } from "@/utils/utils";

export default function Button ({
  label,
  LeftIcon,
  RightIcon,
  onClick,
  className,
  ...props
}) {
  const defaultClasses = 'p-2 cursor-pointer rounded-md text-center';

  return (
    <button
      type="button"
      className={joinClasses(defaultClasses, className)}
      onClick={onClick}
      { ...props }
    > 
      <span className="flex justify-center">
        {
          LeftIcon && <span><LeftIcon /></span>
        }
        { label && <span className='pl-1 pr-1'>{ label }</span>}
        {
          RightIcon && <span><RightIcon /></span>
        }
      </span>
    </button>
  )
}
