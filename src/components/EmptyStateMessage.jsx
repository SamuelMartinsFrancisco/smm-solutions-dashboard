export default function EmptyStateMessage({
  text
}) {
  return (
    <div className='bg-gray-100 border boder-dotted border-gray-300 mt-[20vh] text-center p-4 border-dashed'>
      <span className='font-bold text-lg text-gray-600'>
        {text}
      </span>
    </div>
  )
}