import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css'

const Navigation = () => {
    return <nav className= {classes.Navigation} >
        <div className={classes.item}> <NavLink to='/Profile' activeClassName={classes.activeLink}>  Профіль</NavLink></div>
        <div className={classes.item} ><NavLink to='/Dialogs' activeClassName={classes.activeLink} > Повідомлення</NavLink></div>
        <div className={classes.item} ><NavLink to='/News' activeClassName ={classes.activeLink} >Новини</NavLink></div>
        <div className={classes.item} ><NavLink to='/People' activeClassName={classes.activeLink} >Люди</NavLink></div>
        <div className={classes.item} ><NavLink to='/Chats' activeClassName={classes.activeLink} >Чати</NavLink ></div>

    </nav>
}
export default Navigation;  