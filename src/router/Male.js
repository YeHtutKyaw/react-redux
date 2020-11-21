import React from 'react'

const users = [
    { id: 1, name: 'Alice', gender: 'f' },
    { id: 2, name: 'Bob', gender: 'm' },
    { id: 3, name: 'Tom', gender: 'm' },
    { id: 4, name: 'Mary', gender: 'f' },
];
   

const Male = props => {
    return (
        <ul>
            {users.filter(u => u.gender === 'm')
            .map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
    );
}

export default Male