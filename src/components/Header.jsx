import React from 'react'

const Header = () => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>
        {category}
      </p>
      <p className='text-3xl font-extabold tracking-tight text-slate-900'>
        {title}
      </p>
    </div>
  )
}

export default Header