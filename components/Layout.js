import Head from 'next/head'
import { Fragment } from 'react'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {children}
      </div>
    </Fragment>
  )
}

export default Layout