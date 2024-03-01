import React from 'react'
import Sidebar from '@/components/user/Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='h-screen flex flex-row'>
      <Sidebar></Sidebar>
        <div className='flex-1'>
         {children}
        </div>
    </div>
  )
}

export default Layout