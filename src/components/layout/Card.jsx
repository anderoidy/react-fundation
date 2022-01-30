import './Card.css'
import React from "react"

export default props => 
<div className="Card">
    <div className="Content">
        {props.children}
    </div>
    <div className="Fototer">
        {props.titulo}
    </div>
</div>