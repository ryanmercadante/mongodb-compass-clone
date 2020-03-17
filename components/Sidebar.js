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
          flex: 0 0 18%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .side-nav {
          font-size: 1.4rem;
          list-style: none;
          margin-top: 3.5rem;
        }

        .side-nav__item {
          position: relative;
        }

        .side-nav__item:not(:last-child) {
          margin-bottom: .5rem;
        }

        .side-nav__item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 3px;
          background-color: orangered;
          transform: scaleY(0);
          transition: transform .2s,
                      width: .4s cubic-bezier(1, 0, 0, 1) .2s;
        }

        .side-nav__item:hover::before {
          transform: scaleY(1);
          width: 100%;
        }

        .side-nav__link:link,
        .side-nav__link:visited {
          color: #faf9f9;
          text-decoration: none;
          text-transform: uppercase;
          display: block;
          padding: 1.5rem 3rem;
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