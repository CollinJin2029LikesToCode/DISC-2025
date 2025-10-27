import React from 'react';
import {Link} from 'react-router-dom'

export default function Navigation(nav) {
  return (
    <header className="sh">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{nav.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">{nav.first}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"gray"}}>{nav.second}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"gray"}}>{nav.third}</a>
        </li>
        <hr />
      </ul>
    </header>
  );
}