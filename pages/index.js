import fetch from 'isomorphic-unfetch'
import { useState } from 'react'

let global_hostname = 'localhost'
let global_port = '27017'




const Home = ({ data }) => {
  const [hostname, setHostname] = useState('localhost')
  const [port, setPort] = useState('27017')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('form submit')
    if (hostname !== '' || port !== '') {
      console.log('config before', config)
      config.hostname = hostname
      config.port = port
      console.log('config after', config)
    }
  }

  return (
    <div>
      <div className='container'>
        <h1>MongoDB Compass Clone</h1>
        <form onSubmit={handleOnSubmit} className='form'>
          <div className='input-block'>
            <label>Hostname</label>
            <input tyle='text' placeholder='localhost' value={hostname} onChange={(e) => setHostname(e.target.value)} />
          </div>
          <div className='input-block'>
            <label>Port</label>
            <input tyle='text' placeholder='27017' value={port} onChange={(e) => setPort(e.target.value)} />
          </div>
          <button>Connect</button>
        </form>
      </div>
      <style jsx>{`
        .container {
          max-width: 120rem;
          margin: 8rem auto;
          background-color: #f4f2f2;
          box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
          min-height: 50rem;
        }
        h1 {
          text-align: center;
          padding-top: 2rem;
        }
        label {
          display: block;
          font-size: 2rem;
          margin: .5rem;
        }
        input {
          padding: 1rem;
          border-radius: .5rem;
          border: none;
          box-shadow: 0 .3rem .5rem rgba(0, 0, 0, 0.3);
          margin-bottom: 1rem;
        }
        button {
          display: block;
          margin: 1rem auto;
          width: 16rem;
          padding: .5rem;
          background-color: green;
          color: white;
          font-size: 1.5rem;
          border: 1px solid black;
          border-radius: .5rem;
          text-transform: uppercase;
          box-shadow: 0 .3rem .5rem rgba(0, 0, 0, 0.3);
        }
        .form {
          // background-color: blue;
          max-width: 60rem;
          margin: 8rem auto;
        }
        .input-block {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export const config = {
  hostname: global_hostname,
  port: global_port,
}

console.log('config', config)


export default Home
