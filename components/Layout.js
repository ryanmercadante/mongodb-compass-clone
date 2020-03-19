import Head from 'next/head'
import { Fragment } from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children, data }) => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='content'>
        <Sidebar dbs={data} />
        <main className='data-view'>
          {children}
        </main>
      </div>
      <style jsx>{`
        .content {
          display: flex;
        }
        .data-view {
          flex: 1;
          height: 100vh;
          background-color: #ededed;
        }
      `}</style>
    </Fragment>
  )
}

export default Layout