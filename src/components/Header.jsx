export default function Header ({
  title,
  subtitle,
}) {
  return (
    <header className='ml-5 mb-5'>
      <h1 className='text-3xl font-bold pb-1'>{ title }</h1>
      {
        subtitle && <h2 className='text-1xl text-gray-600 pl-1'>{ subtitle }</h2>
      }
    </header>
  );
}