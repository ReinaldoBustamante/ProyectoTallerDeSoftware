import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import SearchStudents from '../ComponentesNavbar/SearchStudents';

const Navbar = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarColor03">
           
           <Link to ="/" className="navbar-brand"> Proyecto </Link>
           <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                   <NavLink to ='/malla'className="nav-link " activeClassName="active">Malla</NavLink>
                </li>
                <li className="nav-item">
                   <NavLink to ='/horario'className="nav-link " activeClassName="active">Horario</NavLink>
                </li>
           </ul>
        </div>
        <div>
              <SearchStudents />
          </div>
    </nav>
)
export default Navbar;