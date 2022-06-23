import React, { useEffect } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import menu from "../tools/menu.png"
import { useDispatch } from "react-redux";
import { setStatePokemonDetail } from "../redux/actions";


const NavBar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setStatePokemonDetail({}))
    },[dispatch]);

    return (
        <React.Fragment>
            <div className={style.header}>
            <div className={style.nav}>
  
                <div >
                    <img src={menu} alt="menu" className={style.menuIcon} />
                    <ul className={style.navMenu}>
                        <li className={style.links}>
                            <Link style={{color: "white"}} to="/home" >Home</Link>
                        </li>
                        <li className={style.links}>
                            <Link style={{color: "white"}} to="/home/create">Create your Pokemon!</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>  
        </React.Fragment>
    )
};

export default NavBar;