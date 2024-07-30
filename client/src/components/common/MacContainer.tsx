import React from 'react'

interface MacContainerProps {
    children: React.ReactNode;
    customStyles?: string
  }

const MacContainer: React.FC<MacContainerProps> = ({ children, customStyles }) => {
  return (
    <>
    <section className='container overflow-hidden rounded bg-primaryDark min-h-[25rem] mb-10'>
        <div className='w-full gap-2 h-[1.3rem] bg-gray-100 flex items-center px-2'>
            <div className='w-3 h-3 bg-pink-300 rounded-full' />
            <div className='w-3 h-3 bg-blue-300 rounded-full' />
            <div className='w-3 h-3 bg-yellow-400 rounded-full' />
        </div>
        <div className={'p-6 ' + customStyles}>
            {children}
        </div>
    </section>
    <div className='h-[3rem]' />
    </>
  )
}

export default MacContainer