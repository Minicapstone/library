import React from 'react'
import Sidebar from '@/components/user/Sidebar'
import Adduser from '@/pages/admin/AddUser'

const Layout = ({ children }) => {
  return (
    <div>
        <Sidebar/>
        <div>
            <Adduser/>
            {children}
        </div>
    </div>
  )
}

export default Layout