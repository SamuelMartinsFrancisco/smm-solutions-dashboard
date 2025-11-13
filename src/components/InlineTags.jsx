import { joinClasses } from "../utils/utils";
import Tag from "./Tag";
import { XmarkCircleSolid } from "iconoir-react";

export default function InlineTags ({
  items,
  editionEnabled = false,
  onClick,
  className
}) {
  if (!Array.isArray(items)) return;
  debugger
  return (
    <div className='w-full flex flex-wrap'>
      {
        items.map((item, index) => {
          if (typeof item !== 'string') return;
          return (
            <span
              className={joinClasses('w-fit relative', className)}
              key={`${item.trim()}-${index}`}
              onClick={editionEnabled ? () => onClick(index) : () => {}}
            >
              {
                editionEnabled 
                  && <XmarkCircleSolid className='absolute text-xs text-gray-600 -right-[4px] -top-[7px] cursor-pointer' />
              }
              <Tag 
                text={item} 
              />
            </span>
          );
        })
      }
    </div>
  )
}
