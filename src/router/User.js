import React from 'react'
import { useParams } from "react-router-dom";

const User = props => {
    const { name } = useParams()
    return (
        <h1>Profile – {name}</h1>
    )
}

export default User