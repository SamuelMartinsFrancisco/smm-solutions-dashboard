import { joinClasses } from "../utils/utils";
import { EyeSolid, EyeClosed } from "iconoir-react";
import { useState } from "react";

const Input = ({ 
  value,
  onChange,
  placeholder, 
  className,
  ...props
}) => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const isPasswordInput = props?.type === 'password'
  const defaultClasses = 'p-1 mb-2 border-2 border-gray-200 bg-white rounded-md w-full';
  const passwordTypeToggle = hiddenPassword ? 'password' : 'text';
  const inputType = 
    isPasswordInput 
      ? passwordTypeToggle 
      : props.type || 'text'

  const VisibilityIcon = ({
    onClick
  }) => {
    const defaultIconClasses = 'absolute -ml-7 -mt-2 bg-white w-6'

    return (
      <span onClick={onClick} className='cursor-pointer flex items-center'>
        {
          hiddenPassword 
            ? <EyeSolid aria-label='show password' className={defaultIconClasses} />
            : <EyeClosed aria-label='hide password' className={defaultIconClasses} />
        }
      </span>
    )
  }

  return (
    <div className={
        'flex justify-center items-center'
      }
    >
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        className={joinClasses(defaultClasses, className)}
        { ...props }
        type={inputType}
      />

      {
        isPasswordInput 
          ? <VisibilityIcon onClick={() => setHiddenPassword(prev => !prev)} />
          : null
      }
    </div>
  )
};

export default Input;