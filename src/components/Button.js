import React from 'react'
import classes from "./Button.module.css"





function Button({ value, handler }) {
    return (
        <div className={value == "C" || value == "=" ? `${classes.calcnts} ${classes.res}` : `${classes.calcnts}`} onClick={() => handler(value)}>
            {value}
        </div>
    )
}

export default Button