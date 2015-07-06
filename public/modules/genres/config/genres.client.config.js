'use strict';

// Genres module config
angular.module('genres').run(['Menus',
	function(Menus) {
		// Set top bar menu items
        Menus.addMenuItem('topbar', 'Genres', 'genres', 'dropdown', '/genres(/create)?');
        Menus.addSubMenuItem('topbar', 'genres', 'List Genres', 'genres');
        Menus.addSubMenuItem('topbar', 'genres', 'New Genre', 'genres/create');
	}
]);