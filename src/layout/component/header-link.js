 import React, { Fragment } from 'react'

 const HeaderLink = ({ link, _body }) => {
     return (
         <div className="header-link --wrapper col-md-9 col-md-offset-3">
            <a className="header-link --link" href={ '#' + link }>
                <span>Copy url to this section</span><br/>
                <i>&sect;</i>
            </a>
         </div>
     )
 }

 export default HeaderLink