import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {

  const location = useLocation()

  return (
    <div>

      <header style={{ width: '100%', height: '60px' }}>

        <h1 id='head'>User Management</h1>

        {
          (location.pathname === "/dashboard" ||
           location.pathname.startsWith("/user/")) &&

          <ul>
            <li>
              <Link to="/">
                <button>LOGOUT</button>
              </Link>
            </li>
          </ul>
        }

      </header>

    </div>
  )
}

export default Header