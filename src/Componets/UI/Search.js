import { useState } from 'react'

import { Fragment } from 'react';
import './Search.css'


const Search = (props) => {

    const [set, setinput] = useState("");

    const FormHandler = (event) => {
        console.log(setinput)

    }
    const SearchHandler = (event) => {



    }
    return (
        <Fragment>
            <form className="input" onSubmit={FormHandler}>
                <input placeholder="Search" onChange={SearchHandler} value={set}></input>
            </form>


        </Fragment>
    )
}
export default Search