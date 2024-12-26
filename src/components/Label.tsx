import { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
}

function Label({ children }: LabelProps) {
  return (
    <div className='text-gray-500 text-lg font-bold'>
      {children}
    </div>
  );
}

export default Label;
