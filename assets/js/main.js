// Main Menu Toggle
(function() {

	var hamburger = {
		mainMenuToggle: document.getElementById('mainMenuToggle'),
		mainMenu: document.getElementById('mainMenu'),

		doToggle: function(e) {
			e.preventDefault();
			this.mainMenuToggle.classList.toggle('is-open');
			this.mainMenu.classList.toggle('is-open');
		}
	};

	hamburger.mainMenuToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
	hamburger.mainMenu.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());