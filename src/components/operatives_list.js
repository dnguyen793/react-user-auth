import React from 'react';
import auth from '../hoc/auth';


const OpList = props => (
    <div>
        <h1 className="text-center">Operatives List</h1>
        <ol>
            <li>Hi</li>
            <li>Hello</li>
            <li>Bye</li>
            <li>Hi</li>
            <li>Again</li>
        </ol>
    </div>
)

export default auth(OpList);