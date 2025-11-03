import { joinClasses } from "@/utils/utils";

const Form = ({
  onSubmit,
  className,
  children
}) => {
  const defaultClasses = 'bg-white rounded-2xl flex justify-center align-center p-3 min-w-[75%]';

  return (
    <div
      className={joinClasses(defaultClasses, className)}
    >
      <form className='w-full flex flex-col' onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}

export default Form;