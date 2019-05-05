import * as React from 'react';
export interface Props {
    color: string,
    children: Node
}

export default function ({color, children}: Props) {
    return (
        <button style={{color}}>{children}</button>
    );
}