
import React from 'react';

export const PageTitle = (props) => {
    const title = props.title;
    return (
        <h1 className="page-title">{title}</h1>
    )
}