import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Sidebar from '../components/Sidebar'

const Home = ({ data }) => {

  return (
    <div className='container'>
      <div className='content'>
        <Sidebar dbs={data} />
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

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/databases')
  const json = await res.json()
  return { data: json }
}

export default Home
