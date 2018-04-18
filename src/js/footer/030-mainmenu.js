var mainmenu        = document.getElementById( 'mainmenu' );
var mainmenuToggle  = document.getElementById( 'mainmenu-toggle' );
var overlay         = document.getElementById( 'overlay' );

var focustrapTop    = document.getElementById( 'focustrap-top' );
var focustrapBottom = document.getElementById( 'focustrap-bottom' );
var mainmenuLinks   = document.querySelectorAll( '.header a, .header button' );
var navSkipLink     = document.querySelectorAll( '.au-skip-link__link[href="#mainmenu"]' )[ 0 ];


function ToggleMenu() {
	AU.accordion.Toggle( mainmenuToggle, undefined, {
		onOpen: function() {
			mainmenuToggle.innerHTML = 'Close menu';         // Change the text in the toggle
			focustrapTop.setAttribute( "tabindex", 0 );      // Enable the focus trap
			focustrapBottom.setAttribute( "tabindex", 0 );
			AddClass( document.body, 'overlay--open' );      // Stop scrolling when overlay is open
		},
		onClose: function() {
			mainmenuToggle.innerHTML = 'Open menu';
			focustrapTop.removeAttribute( "tabindex" );
			focustrapBottom.removeAttribute( "tabindex" );
			RemoveClass( document.body, 'overlay--open' );
		},
	});
}


// On click of the menu toggle open or close the menu
AddEvent( mainmenuToggle, 'click', function( event ) {
	PreventEvent( event );
	ToggleMenu();
});


// Close the menu if the overlay is clicked
AddEvent( overlay, 'click', function( event ) {
	PreventEvent( event );
	ToggleMenu();
});


// Move the focus to the correct item when it lands on a trap
AddEvent( focustrapTop, 'focus', function( event ) {
	PreventEvent( event );
	mainmenuLinks[ mainmenuLinks.length - 1 ].focus();
});

AddEvent( focustrapBottom, 'focus', function( event ) {
	PreventEvent( event );
	mainmenuLinks[ 0 ].focus();
});


if ( mainmenu ){
	var MenuCheck = function() {
		var currentMenuDisplay = GetStyle( mainmenu, 'display' );
		var mobileMenuDisplay  = GetStyle( mainmenuToggle, 'display' );

		if( currentMenuDisplay === 'none' ){
			mainmenu.setAttribute( "aria-hidden", "true" );
		}
		else {
			mainmenu.setAttribute( "aria-hidden", "false" );
		}

		if( mobileMenuDisplay === 'none' ){
			navSkipLink.setAttribute( "href", "#mainmenu" );
		}
		else {
			navSkipLink.setAttribute( "href", "#mainmenu-toggle" );
		}
	};

	// Run on page load
	MenuCheck();

	// Run functions after a debounced resize
	var PageResize = Debounce(function() {
		MenuCheck();
	}, 250);

	// Run PageResize function on resize
	window.onresize = function() {
		PageResize();
	}
}

