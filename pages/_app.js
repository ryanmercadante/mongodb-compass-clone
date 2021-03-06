import React, { Fragment } from 'react'
import App, { Container } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class MyApp extends App {
  render() {
    const { Component, pageProps, data } = this.props

    return (
      <Fragment>
        <Component {...pageProps} dbs={data} />
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-size: 10px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
  
        * {
          box-sizing: border-box;
        }

        button {
          cursor: pointer;
        }
      `}</style>
      </Fragment>
    )
  }
}

MyApp.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/databases')
  const json = await res.json()
  return { data: json }
}

export default MyApp