import { ChangeEvent } from 'react';
import './TextInput.css';

interface TextInputProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const TextInput = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required = false,
  error
}: TextInputProps) => {
  return (
    <div className="text-input-group">
      <label htmlFor={id} className="text-input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="text-input"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default TextInput; 