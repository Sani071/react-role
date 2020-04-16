import React from 'react'
import Navbar from '../../components/layout/navbar'
import Sidebar from '../../components/layout/sidebar'
import Content from '../../components/layout/content'

export default function IndexLayout() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Content />
        </div>
    )
}
