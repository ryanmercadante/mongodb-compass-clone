import { Fragment } from "react"
import Link from 'next/link'

import '../assets/style.css'

const MenuItem = ({ name }) => (
  <Fragment>
    <li className='text-center'>
      <Link href='/dbs/[name]' as={`/dbs/${name}`}>
        <a className='side-nav__link'>{name}</a>
      </Link>
    </li>
    <style jsx>{`
      .side-nav__item {
        position: relative;
      }

      .side-nav__item:not(:last-child) {
        margin-bottom: .5rem;
      }

      
      .side-nav__link:link,
      .side-nav__link:visited {
        color: #faf9f9;
        text-decoration: none;
        text-transform: uppercase;
        display: block;
        padding: 1.5rem 3rem;
      }
      .side-nav__link:hover {
        color: orangered;
      }
    `}</style>
  </Fragment>
)

const Sidebar = ({ dbs }) => {
  return (
    <Fragment>
      <nav className='sidebar bg-red-500 overflow-y-auto'>
        <ul className='side-nav'>
          {
            dbs.map((db) => (
              <MenuItem key={db.name} name={db.name} />
            ))
          }
        </ul>

        <div className='legal'>
          &copy; 2020 by Ryan Mercadante. All rights reserved.
        </div>
      </nav>

      <style jsx>{`
        .sidebar {
          background-color: #333;
          flex: 0 0 12%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .side-nav {
          font-size: 1.4rem;
          list-style: none;
          margin-top: 3.5rem;
        }

        

        .legal {
          font-size: 1.2rem;
          color: #ccc;
          text-align: center;
          padding: 2.5rem;
        }
      `}</style>
    </Fragment>
  )
}

export default Sidebar