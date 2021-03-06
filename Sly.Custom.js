/*! Sly v1.0rc0 <http://sly.digitarald.com> - (C) 2009 Harald Kirschner <http://digitarald.de> - Open source under MIT License */

 Sly.implement('combinators', {

	// Custom combinators, from MooTools Slick.js

	// Returns all matched parent nodes
	'<': function(combined, context, selector, state, locate) {
	  while ((context = context.parentNode) && context.nodeType !== 9) {
	    if (locate(context) && selector.match(context, state)) combined.push(context);
	  }
	},

	// Returns the first matched descendant children
	'^': function(combined, context, selector, state, locate) {
	  if ((context = context.firstChild)) {
	    if (node.nodeType === 1 && locate(context) && selector.match(context, state)) combined.push(context);
	    else Sly.combinators['+'](combined, context, selector, context, state);
	  }
	},

	// Returns all matched next slibings
	'++': function(combined, context, selector, state, locate) {
		while ((context = context.nextSibling)) {
			if (context.nodeType === 1 && locate(context) && this.match(context, state)) combined.push(context);
		}
		return combined;
	},

	// Returns all matched previous slibings
	'--': function(combined, context, selector, state, locate) {
		while ((context = context.previousSibling)) {
			if (context.nodeType === 1 && locate(context) && this.match(context, state)) combined.push(context);
		}
		return combined;
	},

	// Returns all matched slibings
	'±': function(combined, context, selector, state, locate) {
		return Sly.combinators['--'].call(Sly.combinators['++'].call(combined, context, state, uniques), context, state, uniques);
	}

});



Sly.implement('pseudos', {

	// Custom pseudos, like jQuery filter

	// Matches all elements that are hidden.
	'hidden': function(node) {
		return (!node.offsetWidth || !node.offsetHeight);
	},

	// Matches all elements that are visible.
	'visible': function(node) {
		return (node.offsetWidth && node.offsetHeight);
	},

	// Matches elements which contain at least one element that matches the specified selector.
	'has': function(node, argument) {
		return Sly.find(argument, node);
	},

	// Matches all elements that are disabled.
	'disabled': function(node) {
		return (node.disabled == true);
	},

	// Matches all elements that are enabled.
	'enabled': function(node) {
		return (node.disabled != false);
	},

	// Matches all elements that are enabled.
	'selected': function(node) {
		return (node.selected != false);
	},

	// Matches all elements that are checked.
	'checked': function(node) {
		return (node.checked == true || node.selected == true);
	}

	// ... be creative and add yours ;)

});

Sly.implement('operators', {

	// Matches the attribute value against the given regexp, flags are not possible yet
	'/=': function(value, escaped) {
		return value;
	}

});

// Always call recompile after using implement!
Sly.recompile();
