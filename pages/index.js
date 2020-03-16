import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {

  return (
    <div className='container'>
      <div className='content'>
        <Sidebar />
        <main className='data-view'>
          temp
        </main>
      </div>
      <style jsx>{`
        .container {
          max-width: 120rem;
          margin: 8rem auto;
          background-color: #f4f2f2;
          box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
          min-height: 50rem;
        }
        .content {
          display: flex;
        }
        .data-view {
          flex: 1;
          height: 80rem;
          background-color: orangered;
        }
      `}</style>
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
      `}</style>
    </div>
  )
}

export default Home
