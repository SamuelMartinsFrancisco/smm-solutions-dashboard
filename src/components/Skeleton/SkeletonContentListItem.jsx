export default function SkeletonContentListItem () {
  return (
    <div className='mt-[15vh] mb-7 w-full flex gap-[3%] items-center justify-center'>
      <div className='w-20 h-20 bg-gray-200 rounded-sm'></div>
      <div className='w-[70%] h-20 p-3 rounded-md bg-gray-200'></div>
      <div className='h-32 flex flex-col justify-evenly'>
        <div className='h-10 w-10 bg-gray-200'></div>
        <div className='h-10 w-10 bg-gray-200'></div>
      </div>
    </div>
  )
}