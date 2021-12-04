import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../auth/authContext'
import { useContext } from 'react'
import { types } from '../../types/types'

export const Navbar = () => {

const {user, dispatch} = useContext(AuthContext)

const navigate = useNavigate();

const handleLogout = () => {
    const action = {
        type: types.logout  
      }
      dispatch(action);

  navigate('/login', {
    replace: true
  });
}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        
                        className="nav-item nav-link" 
                        
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        
                        className="nav-item nav-link" 
                        
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        
                        className="nav-item nav-link" 
                        
                        to="/search"
                    >
                        Search
                    </NavLink>

                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                   <span className='nav-item nav-link text-info'>{user.name}</span>
                
                    <button
                       className="nav-item nav-link btn" 
                       onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}