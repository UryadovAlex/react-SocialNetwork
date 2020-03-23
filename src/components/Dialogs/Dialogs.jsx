import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Victor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Valera</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi </div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>How is you day today?</div>

            </div>
        </div>
    );
}

export default Dialogs;