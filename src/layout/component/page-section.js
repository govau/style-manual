import React, { Fragment } from 'react';

const PageSection = ({_body, widthClass}) => {
    widthClass = widthClass ? widthClass : 'col-md-6'
    let gridClass = `col-md-offset-3 ${widthClass}`
    return (
        <div className={ gridClass }>
            <span></span>
            { _body }
        </div>
    )
}

export default PageSection