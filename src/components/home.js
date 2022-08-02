import React, { useState } from 'react'
import classes from "./home.module.css"
import Button from "./Button"


function Home() {

    const [res, setRes] = useState("");

    const buttons = ["C", "9", "/", "8", "7", "6", "*", "5", "4", "3", "+", "2", "1", "0", "-", ".", "Del", "="];

    const findval = () => {
        let resultado = Function("return " + res)();
        setRes(resultado.toString());
    }


    const handler = (arg) => {

        // console.log(arg);



        // if (res === "Infinity") {
        //     setRes("");
        //     return;
        // }

        if (arg == "C") setRes("");
        else if (arg == "=") findval();
        else if (arg == "Del") {
            let n = res.length;
            if (n > 0)
                setRes(res.slice(0, n - 1));

        }

        else setRes(res.concat(arg));


    }




    return (
        <div className={classes.home}>
            <div className={classes.in}>
                <div className={classes.resultado}>
                    <div className={classes.box} >
                        {res}
                    </div>
                </div>
                <div className={classes.nts}>
                    {buttons.map((ele, index) => { return <Button handler={handler} value={ele} key={index} /> })}

                </div>
            </div>
        </div>
    )
}

export default Home