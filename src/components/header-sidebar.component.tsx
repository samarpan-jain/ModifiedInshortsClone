import '../App.css';
import { useState } from 'react';
import { Menu } from '../common/menu';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../store/slices/newsLangSlice';
import { RootState } from '../store';

function HeaderSideBar({ menu }: { menu: Menu[] }) {
    const [menuState, setMenuState] = useState(false);
    const lang = useSelector((state: RootState) => state.newsLang);

    const dispatch = useDispatch();
    const handleLangChange = () => {
        return dispatch(changeLang(lang))
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
                <div className="switch">
                    <input id="language-toggle" className="check-toggle check-toggle-round-flat" onChange={handleLangChange} type="checkbox" />
                    <label htmlFor="language-toggle"></label>
                    <span className="on">EN</span>
                    <span className="off">HI</span>
                </div>
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