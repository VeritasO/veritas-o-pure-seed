import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant = 'default', size = 'md', className = '', ...props }: ButtonProps) {
  const base = 'rounded px-3 py-1 font-medium focus:outline-none transition';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  const sizes = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-2 px-3',
    lg: 'text-base py-3 px-4',
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
