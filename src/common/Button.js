import classNames from 'classnames';
import React from 'react';

function Button({ className, disabled, ...props }) {
  return (
    <button
      className={classNames(
        'bg-blue-500 hover:bg-blue-700 text-white rounded px-2',
        className,
        disabled ? 'opacity-50 pointer-events-none' : '',
      )}
      disabled={disabled}
      {...props}
    />
  );
}

export default Button;
