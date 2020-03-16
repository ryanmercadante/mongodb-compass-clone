import { Fragment } from "react"

const Sidebar = () => {
  return (
    <Fragment>
      <nav className='sidebar'>
        <ul className='side-nav'>
          <li className='side-nav__item'>
            <a className='side-nav__link' href='/'>home</a>
          </li>
          <li className='side-nav__item'>
            <a className='side-nav__link' href='/'>contact</a>
          </li>
        </ul>

        <div className='legal'>
          &copy; 2020 by Ryan Mercadante. All rights reserved.
        </div>
      </nav>

      <style jsx>{`
        .sidebar {
          background-color: #333;
          flex: 0 0 15%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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