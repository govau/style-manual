var codeComponents = document.getElementsByTagName( 'pre' );

for( var i = 0; i < codeComponents.length; i++ ) {

	if( HasClass( codeComponents[ i ], 'js-nocopy' ) === null ){
		codeComponents[ i ].insertAdjacentHTML(
			'beforeend',
			'<button type="button" class="btn-copy au-btn icon icon--copy js-copy-btn">Copy</button>'
		);

		codeComponents[ i ].outerHTML = '<div class="codebox">' + codeComponents[ i ].outerHTML + '</div>';
	}
}

/**
 * Copy a string to the clipboard
 *
 * @param {string} text - The string to be copied
 */
function CopyString( text ) {
	var textarea = document.createElement( 'textarea' );
	textarea.value = text;
	document.body.appendChild( textarea );
	textarea.select();
	document.execCommand( 'copy' );
	document.body.removeChild( textarea );
}


/**
 * On click of any of the copy code buttons
 */
var copyButtons = document.querySelectorAll( '.js-copy-btn' );
AddEvent( copyButtons, 'click', function( event, $this ) {
	CopyString( $this.previousSibling.innerText );
	var oldLabel = $this.innerHTML;
	$this.innerHTML = 'Copied';
	RemoveClass( $this, 'icon--copy' );
	AddClass( $this, 'icon--success' );

	setTimeout( function() {
		$this.innerHTML = oldLabel;
		RemoveClass( $this, 'icon--success' );
		AddClass( $this, 'icon--copy' );
	}, 1000 );
});
