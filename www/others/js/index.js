


var first = true;
$( document ).on( "pagecreate", ".jqm-demos", function( event ) {
    switch(event.currentTarget.id){
        case "notification":
            notification.initialize();
            break;
        case "accelerometer":
            accelerometer.initialize();
            break;
        case "camera":
            camera.initialize();
            break;
        case "gallery":
            gallery.initialize();
            break;
        case "audio":
            audio.initialize();
            break;
        case "video":
            video.initialize();
            break;
        case "compass":
            compass.initialize();
            break;
        case "contacts":
            contacts.initialize();
            break;
        case "geolocation":
            geolocation.initialize();
            break;
    }

    var search,
    page = $( this ),
    that = this,
    searchUrl = ( $( this ).hasClass( "jqm-home" ) ) ? "_search/" : "../_search/",
    searchContents = $( ".jqm-search ul.jqm-list" ).find( "li:not(.ui-collapsible)" ),
    version = $.mobile.version || "dev",
    words = version.split( "-" ),
    ver = words[0],
    str = words[1] || "",
    text = ver;

    // Insert jqm version in header
    if ( str.indexOf( "rc" ) == -1 ) {
        str = str.charAt( 0 ).toUpperCase() + str.slice( 1 );
    } else {
        str = str.toUpperCase().replace( ".", "" );
    }

    if ( $.mobile.version && str ) {
        text += " " + str;
    }

    $( ".jqm-version" ).html( "0.0.1" );

    // Global navmenu panel
    $( ".jqm-navmenu-panel ul" ).listview();

    $( document ).on( "panelopen", ".jqm-search-panel", function() {
        $( this ).find( "input" ).focus();
    })

        page.find( ".jqm-navmenu-link" ).on( "click", function() {
            debugger
            page.find( ".jqm-navmenu-panel:not(.jqm-panel-page-nav)" ).panel( "open" );
        });
        first = false;



    // Turn off autocomplete / correct for demos search
    $( this ).find( ".jqm-search input" ).attr( "autocomplete", "off" ).attr( "autocorrect", "off" );

    // Global search
    $( ".jqm-search-link" ).on( "click", function() {
        page.find( ".jqm-search-panel" ).panel( "open" );
    });

    // Initalize search panel list and filter also remove collapsibles
    $( this ).find( ".jqm-search ul.jqm-list" ).html( searchContents ).listview({
        inset: false,
        theme: null,
        dividerTheme: null,
        icon: false,
        autodividers: true,
        autodividersSelector: function ( li ) {
            return "";
        },
        arrowKeyNav: true,
        enterToNav: true,
        highlight: true,
        submitTo: searchUrl
    }).filterable();

    // Initalize search page list and remove collapsibles
    $( this ).find( ".jqm-search-results-wrap ul.jqm-list" ).html( searchContents ).listview({
        inset: true,
        theme: null,
        dividerTheme: null,
        icon: false,
        arrowKeyNav: true,
        enterToNav: true,
        highlight: true
    }).filterable();

    // Fix links on homepage to point to sub directories
    if ( $( event.target ).hasClass( "jqm-home") ) {
        $( this ).find( "a" ).each( function() {
            $( this ).attr( "href", $( this ).attr( "href" ).replace( "../", "" ) );
        });
    }

    // Search results page get search query string and enter it into filter then trigger keyup to filter
    if ( $( event.target ).hasClass( "jqm-demos-search-results") ) {
        search = $.mobile.path.parseUrl( window.location.href ).search.split( "=" )[ 1 ];
        setTimeout(function() {
            e = $.Event( "keyup" );
            e.which = 65;
            $( that ).find( ".jqm-content .jqm-search-results-wrap input" ).val( search ).trigger(e).trigger( "change" );
        }, 0 );
    }
});

// Append keywords list to each list item
$( document ).one( "pagecreate", ".jqm-demos", function( event ) {
    $( this ).find( ".jqm-search-results-list li, .jqm-search li" ).each(function() {
        var text = $( this ).attr( "data-filtertext" );

        $( this )
        .find( "a" )
        .append( "<span class='jqm-search-results-keywords ui-li-desc'>" + text + "</span>" );
    });
});


