import React from 'react'
import "./Search.css"


function Search({value, data, change, submit}) {

        /* const [checked, setChecked] = React.useState(true);
        const handleChange = () => {
            setChecked(!checked);
          }; */


    return (
        <>
            <form className="search__container" onSubmit={submit}>
                <input type="text" value={value} onChange={change} placeholder="quelle ville?" className="search__input" />
                
                {/* <input className="checkbox" type="checkbox" checked={checked}
                        onChange={handleChange} /> */}
                
            </form>

        </>
    )
}

export default Search
