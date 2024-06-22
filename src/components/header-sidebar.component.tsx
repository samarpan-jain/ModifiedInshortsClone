import '../App.css';
import { useState } from 'react';
import { Menu } from '../common/menu';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLang } from '../store/slices/newsLangSlice';

function HeaderSideBar({ menu }: { menu: Menu[] }) {
    const [menuState, setMenuState] = useState(false);
    const { pathname } = useLocation();

    const dispatch = useDispatch();
    const handleLangChange = ()=>{
        dispatch(changeLang(null))
    }

    const openNav = () => {
        setMenuState(true);
    }

    const closeNav = () => {
        setMenuState(false);
    }

    const menuBar = menu.map(m => <NavLink key={m.name} to={m.to} className="menu-option">{m.name}</NavLink>)

    return (
        <div className='menu'>
            {
                menuState ?
                    <div className="sidenav">
                        <a className="closebtn" onClick={closeNav}>&times;</a>
                        <NavLink className="menu-option" to="/search">News By Interest</NavLink>
                        <div className="menu-category">Categories</div>
                        {menuBar}
                    </div>
                    :
                    null
            }
            <div className='header'>
                <span style={{ fontSize: "30px", cursor: 'pointer' }} onClick={openNav}> &#9776;</span>&nbsp;Menu
                {pathname !== '/search'?<div className="switch">
                    <input id="language-toggle" className="check-toggle check-toggle-round-flat" onChange={handleLangChange} type="checkbox"/>
                    <label htmlFor="language-toggle"></label>
                    <span className="on">EN</span>
                    <span className="off">HI</span>
                </div>:null}
            </div>
            <div>
                <a rel='noopener noreferrer' href='https://www.inshorts.com/' target="_blank">
                    <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" className="header-icon" alt="Inshorts" />
                </a>
            </div>
        </div>
    )
}

export default HeaderSideBar