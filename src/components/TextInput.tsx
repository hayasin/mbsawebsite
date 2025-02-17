import React from 'react';
import './TextInput.css';

interface TextInputProps {
  label?: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  type,
  value,
  onChange,
  required,
  error,
  placeholder
}) => {
  return (
    <div className="text-input-group">
      {label && <label className="text-input-label" htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`text-input ${error ? 'error' : ''}`}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default TextInput; 