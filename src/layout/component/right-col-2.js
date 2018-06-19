import PropTypes from 'prop-types';
import React from 'react';


/**
 * The 2nd Right column component
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
                        <h4 class="right-column__module--h4">
                            <span>Complies with <a href="#">WCAG </a><i><img src="/assets/img/external_link.svg"/></i></span>
                        </h4>
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
