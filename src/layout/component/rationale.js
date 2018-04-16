import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Rationale component
 */
const Rationale = ({ heading, headinglevel, _body }) => {

	const HeadingTag = `h${ headinglevel }`;

	return (
		<div className="row headingLeft">
			<div className="col-md-4">
				<HeadingTag>{ heading }</HeadingTag>
			</div>
			<div className="col-md-8">{ _body }</div>
		</div>
	);

};

Rationale.propTypes = {
	/**
	 * heading: Round corners
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * headinglevel: 3
	 */
	headinglevel: PropTypes.number,
};

Rationale.defaultProps = {
	headinglevel: 3,
};

export default Rationale;
