import React, { useState, ChangeEvent, InputHTMLAttributes } from 'react';
import { Input } from '../input';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordToggleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode; // Allows any renderable node as a label
}

const PasswordToggleInput: React.FC<PasswordToggleInputProps> = ({
  id,
  name,
  value,
  onChange,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? 'text' : 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <div className='relative'>
        <Input
          type={inputType}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className='h-11 shadow-none border-[#D5D8DA] focus-visible:border-[#205BF3]' 
          {...restProps}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className='absolute top-1/2 -translate-y-1/2 right-4'
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
  );
};

export default PasswordToggleInput;