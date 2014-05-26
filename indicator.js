/**
 * JS Loading Indicator
 *
 * @author  Şakir ŞENSOY | sakirsensoy@gmail.com
 * @depend jQuery
 * @return object
 */
 
var indicator = function() {

	/**
	 * Remove hash and dot, from element name.
	 * 
	 * @param  string elementId
	 * @return string
	 */
	var elementNameFixer = function(elementId) {

		return elementId.replace('.', '').replace('#', '');
	};

	var elementExPosition = null;

	return {

		/**
		 * Create temporarily layer for indicator
		 *  
		 * @param  string elementId
		 * @return void
		 */
		show: function(elementId) {
			
			//dom
			el = $(elementId);

			//temporarily parent layer position to relative
			elementExPosition = el.css('position');
			el.css('position', 'relative');

			//temporarily indicator layer
			tempIndicator = $('<div />')
			.attr('id', elementNameFixer(elementId) + '-indicator')
			.css({
				width: el.outerWidth(),
				height: el.outerHeight()
			})
			.addClass('indicator indicator-loader');

			//indicator append to element
			el.append(tempIndicator);
		},

		/**
		 * Destroy loading indicator
		 * 
		 * @param  string elementId
		 * @return void
		 */
		hide: function(elementId) {

			//dom
			el = $(elementId);

			//parent layer position restore
			el.css('position', elementExPosition);

			elementExPosition = null;

			//find indicator and destroy
			el.find('#' + elementNameFixer(elementId) + '-indicator').remove();
		}
	};
}();
