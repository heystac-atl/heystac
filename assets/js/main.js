// Main Menu Toggle
let menuToggle = document.querySelector('#mainMenuToggle'),
    menuClose = document.querySelector('#mainMenuClose'),
    menu = document.querySelector('#mainMenu');

menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.add('is-open');
    document.querySelector('body').classList.add('no-scroll');
    setTimeout(function(){ document.querySelector(".menu--main").classList.add("is-visible") }, 500)
    setTimeout(function(){ document.querySelector(".menu--social").classList.add("is-visible") }, 750)
});
menuClose.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.remove('is-open');
    document.querySelector('body').classList.remove('no-scroll');
    document.querySelector(".menu--main").classList.remove("is-visible");
    document.querySelector(".menu--social").classList.remove("is-visible");
});

// Let's Talk Form Toggle
let formToggle = document.querySelector('#letsTalkToggle'),
    formClose = document.querySelector('#letsTalkClose'),
    form = document.querySelector('#letsTalk');

formToggle.addEventListener('click', function(e) {
    e.preventDefault();
    form.classList.add('is-open');
    document.querySelector('body').classList.add('no-scroll');
});
formClose.addEventListener('click', function(e) {
    e.preventDefault();
    form.classList.remove('is-open');
    document.querySelector('body').classList.remove('no-scroll');
});

// Interesection Observer
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 140)) {
        document.getElementById('letsTalkToggle').classList.add('is-hidden');
    } else {
        document.getElementById('letsTalkToggle').classList.remove('is-hidden');
    }
};

//Tabs
function Tabs(args) {
    // Scope-safe constructors
    if (!(this instanceof Tabs)) { 
      return new Tabs();
    }
    /**
     * Default component settings
     *
     * @param container {string} Classname for container of the entire component
     * @param trigger {string} Element that toggles content
     * @param content {string} Classname for the content
     */
    var defaults = {
      container: '[data-tab-component]',
      trigger: '[role="tab"]',
      content: '[role="tabpanel"]'
    };
    // If there are no settings overrides
    var settings = (typeof args !== 'undefined') ? args : defaults;
    /**
     * @function toggle()
     *
     * Handles the displaying/hiding of content
     *
     * @returns null
     */
    var toggle = function() {
      var parent = this.closest(settings.container),
          target = this.getAttribute('aria-controls'),
          content = document.getElementById(target),
          toggles = parent.querySelectorAll(settings.trigger),
          all_content = parent.querySelectorAll(settings.content);
      // Update visibility
      for (var i = 0, len = toggles.length; i < len; i++) {
        toggles[i].setAttribute('aria-selected', 'false');
        all_content[i].setAttribute('aria-hidden', 'true');
      }
      this.setAttribute('aria-selected', 'true');
      content.setAttribute('aria-hidden', 'false');
    };
    /**
     * @function bindEventListeners()
     *
     * Attach event listeners
     *
     * @returns null
     */
    var bindEventListeners = function() {
      var trigger = document.querySelectorAll(settings.trigger);
      //
      // TODO
      // Use event delgation to add event handlers
      //
      for (var i = 0, len = trigger.length; i < len; i++) {
        trigger[i].addEventListener('click', function(event) {
          toggle.call(this);
        });
        
        trigger[i].addEventListener('keydown', function(event) {
          if (event.which == 13) {
            toggle.call(this);
          }
        });
      };
    };
  
    return bindEventListeners();
  }
  
  // Create an instance of component
  window.onload = function() {
    var tabs = new Tabs();
  };
