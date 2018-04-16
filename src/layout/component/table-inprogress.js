import AUbutton            from '../../_uikit/layout/buttons';
import Table               from '../table';
import GetData             from '../getData';
import Contributors        from './contributors';

import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * The table for in progress components
 */
const TableInProgress = ({ title, caption, btntext, btnURL, btnIcon, tableTH, _parseYaml }) => {

	const components = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === 'inprogress',
		yaml: _parseYaml,
	});


	const body = components.map( component => {

		return [
			{
				text: <a href={ `/components/${ component.ID }` }>{ component.name }</a>,
			},
			// {
			// 	text: component.version,
			// },
			// {
			// 	text: <Contributors contributors={ component.contributors } _relativeURL={ _relativeURL } _ID={ _ID } />,
			// },
		];
	}

);

	return (
		<Fragment>
			<h2>{ title }</h2>

			<Table
				className="component-table"
				caption={ caption }
				header={ tableTH }
				body={ body }
			/>

			<p>
				<AUbutton href={ btnURL } className={ btnIcon && `icon icon--${ btnIcon } icon--dark`}>
					{ btntext }
				</AUbutton>
			</p>

		</Fragment>
	);
}

TableInProgress.propTypes = {
	/**
	 * title: In progress
	 */
	title: PropTypes.string.isRequired,

	/**
	 * caption: A table of in progress components including their status, current version, and contributors.
	 */
	caption: PropTypes.string.isRequired,

	/**
	 * btntext: Community
	 */
	btntext: PropTypes.string.isRequired,

	/**
	 * btnURL: /community
	 */
	btnURL: PropTypes.string.isRequired,

	/**
	 * btnIcon: community
	 */
	btnIcon: PropTypes.string,

	/**
	 * tableTH:
	 *   - text: Title
	 *     tightcol: true
	 */
	tableTH: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			className: PropTypes.string,
		})
	).isRequired
};

export default TableInProgress;
