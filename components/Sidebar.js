import { Fragment } from "react"
import Link from 'next/link'

import '../assets/style.css'

const MenuItem = ({ name }) => (
  <Fragment>
    <li className='text-center'>
      <Link href='/dbs/[name]' as={`/dbs/${name}`}>
        <a className='relative mb-2 text-gray-200 uppercase block py-6 px-12 text-2xl hover:text-orange-400'>{name}</a>
      </Link>
    </li>
  </Fragment>
)

const Sidebar = ({ dbs }) => {
  return (
    <div className='sidebar flex flex-col justify-between'>
      <nav className=''>
        <ul className='mt-16'>
          {
            dbs.map((db) => (
              <MenuItem key={db.name} name={db.name} />
            ))
          }
        </ul>
      </nav>
      <div className='text-gray-200 text-xl p-10 text-center'>
        &copy; 2020 by Ryan Mercadante. All rights reserved.
      </div>

      <style jsx>{`
        .sidebar {
          background-color: #333;
          flex: 0 0 12%;
        }
      `}</style>
    </div>
  )
}

export default Sidebar