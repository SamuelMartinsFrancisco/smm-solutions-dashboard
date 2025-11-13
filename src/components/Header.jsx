import { joinClasses } from '../utils/utils';

export default function Header ({
  title,
  subtitle,
  titleClasses,
  subtitleClasses,
}) {

  return (
    <header className='ml-5 mb-5'>
      <h1 className={joinClasses('text-3xl font-bold pb-1', titleClasses)}>{ title }</h1>
      {
        subtitle && <h2 className={joinClasses('text-1xl pl-1', subtitleClasses)}>{ subtitle }</h2>
      }
    </header>
  );
}