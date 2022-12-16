import react, { useState } from "react";

const LinkMenu = ( { children } ) => {
    return (
        <div>
            <a style={ {color:"white"} }> {children} </a>
        </div>
    )
}

export default LinkMenu;