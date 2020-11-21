import React from 'react'

const users = [
    { id: 1, name: 'Alice', gender: 'f' },
    { id: 2, name: 'Bob', gender: 'm' },
    { id: 3, name: 'Tom', gender: 'm' },
    { id: 4, name: 'Mary', gender: 'f' },
];
   

const Female = props => {
    return (
        <ul>
            {users.filter(u => u.gender === 'f')
            .map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
    );
}

export default Female
