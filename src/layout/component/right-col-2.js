import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Right column component
 */

const RightColComponent = ({title, imgSrc, altClass = '', _body}) => {

    let rightColImg = imgSrc ? <img src={ imgSrc }/> : ''
    let rootClass = `col-md-3 right-column__module ${ altClass }`
    let header = ''

    if (altClass !== 'co-created' && altClass !== 'dark-block') {
        header =
                <div>
                    <div className="col-md-9 right-column__module--header">
                        <h4 class="right-column__module--h4">{ title }</h4>
                    </div>
                    <div className="col-md-3 right-column__module--emoji">
                        { rightColImg }
                    </div>
                </div>
        
    } else if (altClass == 'dark-block') {
        header =
                <div>
                    <div className="col-md-12 right-column__module--header">
                        <h4 class="right-column__module--h4">{ title }</h4>
                    </div>
                </div>
    }

    return (
        <div className={ rootClass }>
            { header }
            <div class="col-md-12 right-column__module--body">
                { _body }
            </div>
        </div>
    )
}

RightColComponent.propTypes = {
	/**
	 * title
	 */
	title: PropTypes.string.isRequired,
};


export default RightColComponent;


/**
 * The Right column component
 */

// const RightColComponent = ( components ) => {
//     let rightArray = []
//     for (let comp of component) {
//         let rightColImg = comp.imgSrc ? <img src={ comp.imgSrc }/> : ''

//         rightArray.push(
//             <div className="right-column__module">
//                 <div className="col-md-9 right-column__module--header">
//                     <h4 class="right-column__module--h4">{ comp.title }</h4>
//                 </div>
//                 <div className="col-md-3 right-column__module--emoji">
//                     { comp.rightColImg }
//                 </div>
//                 <div class="col-md-12 right-column__module--body">
//                     { comp.body }
//                 </div>
//             </div>
//         )
//     }
//     return (
//         <div>
//         { rightArray.map((val, i) => val)}
//         </div>
//     )

// }

// RightColComponent.propTypes = {
// 	/**
// 	 * title
// 	 */
// 	title: PropTypes.string.isRequired,
// };


// export default RightColComponent;