import * as React from 'react';
export interface Props {
    color: string,
    children: Node
}

export default function ({children}: Props) {
    return (
        <button style={{color: 'blue'}}>{children}</button>
    );
}