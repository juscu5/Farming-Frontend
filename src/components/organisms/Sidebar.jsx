import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import LogoutModal from '../atoms/LogoutModal';

import { useSelector } from 'react-redux';
import { selectEmployee } from '../../redux/auth/selectors';


const Sidebar = (props) => {
  const [showNav, setShowNav] = useState(true);
  const [navTitle, setNavTitle] = useState(props.navTitle);
  const [navList, setNavList] = useState(props.navlist);
  const [activeCount, setActiveCount] = useState();
  const [ showModal, setShowModal ] = useState(false);

  const navigate = useNavigate();

  const handleCloseModal = () => setShowModal(false);

  const selectName = useSelector(selectEmployee);

  const activeCountFunc = (idx) => {
    setActiveCount(idx)
  } 

  const setPath = (href) => {
    localStorage.setItem('lastPath', href)
  }

  const onClickFunc = (idx, href) => {
    activeCountFunc(idx);
    setPath(href);
  }

  useEffect(() => {
    const lastPath = localStorage.getItem('lastPath');
    navigate(lastPath, { replace: true });
  }, []);

  return (
    <div className="SidebarOrganism">
      <div className={`body-area${showNav ? ' body-pd' : ''}`}>
        <header className={`header${showNav ? ' body-pd' : ''}`}>
          <div className="header_toggle">
            <i
              className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
              onClick={() => setShowNav(!showNav)} />
          </div>
          <div className="nav-title">
            <h4>{navTitle}</h4>
          </div>
          <NavDropdown title={selectName} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setShowModal(true)}>
              Logout <i className='bi bi-box-arrow-left nav_icon' />
            </NavDropdown.Item>
          </NavDropdown>
        </header>
        <div className={`l-navbar${showNav ? ' showLeft' : ''}`}>
          <nav className="nav">
            <div>
              <a href="#" target="_blank" className="nav_logo" rel="noopener">
                <i className='bi bi-alexa nav_logo-icon' /> <span className="nav_logo-name">{props.navTitle}</span>
              </a>
              <div className="nav_list">
                {
                  navList?.map((obj, idx)=>{
                    return(
                      <Link
                        to={obj.HREF}
                        className={window.location.pathname === obj.HREF ? "nav_link active" : "nav_link"}
                        onClick={() => onClickFunc(idx, obj.HREF)}
                        rel="noopener"
                        key={idx} // Add a unique key prop
                      >
                        <i className={obj.CLASSNAME} />
                        <span className="nav_name">{obj.TITLE}</span>
                      </Link>
                    )
                  })
                }
                <br/>
              </div>
            </div>
            {/* <a href="#" target="_blank" className="nav_link" rel="noopener">
              <i className='bi bi-box-arrow-left nav_icon' /><span className="nav_name">SignOut</span>
            </a> */}
          </nav>
        </div>
        <div className="pt-4 pb-4" {...props}>
          
        </div>
      </div>
      <LogoutModal 
        show={showModal} 
        close={handleCloseModal} 
      />
    </div>
  )
}

export default Sidebar