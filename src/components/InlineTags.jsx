import Tag from "./Tag";

export default function InlineTags ({
  items
}) {
  if (!Array.isArray(items)) return;
  debugger
  return (
    <div className='w-full flex flex-wrap'>
      {
        items.map((item, index) => {
          if (typeof item !== 'string') return;
          debugger
          return (
            <Tag 
              text={item} 
              key={`${item.trim()}-${index}`} 
            />
          );
        })
      }
    </div>
  )
}
