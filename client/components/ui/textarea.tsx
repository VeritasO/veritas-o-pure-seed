import React from 'react';

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className={
        'w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 ' +
        (props.className || '')
      }
    />
  );
}
