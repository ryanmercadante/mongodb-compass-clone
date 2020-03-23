import Head from 'next/head'
import { Fragment } from 'react'
import Sidebar from './Sidebar'

import '../assets/style.css'

const Layout = ({ children, data }) => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex h-screen overflow-y-hidden'>
        <Sidebar dbs={data} />
        <main className='content-area bg-red-300 flex-1 overflow-y-auto'>
          {children}
        </main>
      </div>
    </Fragment>
  )
}

export default Layout