import { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
}

function Title({children}: TitleProps) {
  return (
    <h2 className='flex justify-center text-2xl text-gray-600 font-bold'>
        {children}
    </h2>
  )
}

export default Title