/**
 * JS Loading Indicator
 *
 * @author  Şakir ŞENSOY | sakirsensoy@gmail.com
 * @depend jQuery
 * @return object
 */
 
var indicator = function() {

	/**
	 * Parametre olarak verilen element adını nokta ve diyez belirteçlerinden
	 * arındırır.
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
		 * Parametre olarak verilen dom elementId ile aynı ölçülerde
		 * temp bir div katmanı oluşturur ve bu katman içinde load indicator'ı
		 * görüntüler.
		 *  
		 * @param  string elementId
		 * @return void
		 */
		show: function(elementId) {
			
			//dom
			el = $(elementId);

			//geçici olarak relative yap dış katmanı
			elementExPosition = el.css('position');
			el.css('position', 'relative');

			//geçici indicator katmanı
			tempIndicator = $('<div />')
			.attr('id', elementNameFixer(elementId) + '-indicator')
			.css({
				width: el.outerWidth(),
				height: el.outerHeight()
			})
			.addClass('indicator indicator-loader');

			//indicator'ı element içine yerleştir
			el.append(tempIndicator);
		},

		/**
		 * Parametre olarak verilen elementId için daha önce
		 * açılmış olan bir load indicator'ı yok eder.
		 * 
		 * @param  string elementId
		 * @return void
		 */
		hide: function(elementId) {

			//dom
			el = $(elementId);

			//dış katmanın position'ı eski haline getir
			el.css('position', elementExPosition);

			elementExPosition = null;

			//indicator'ı bul ve yok et
			el.find('#' + elementNameFixer(elementId) + '-indicator').remove();
		}
	};
}();
