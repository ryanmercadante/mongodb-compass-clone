import MenuItem from './MenuItem'

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