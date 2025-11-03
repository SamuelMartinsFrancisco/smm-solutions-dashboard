import { joinClasses } from "@/utils/utils";

const Input = ({ 
  value,
  onChange,
  placeholder, 
  className,
  ...props
}) => {
  const defaultClasses = 'p-1 mb-2 border-2 border-gray-200 bg-white rounded-md';

  return (
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange} 
      className={joinClasses(defaultClasses, className)}
      { ...props }
    />
  )
};

export default Input;