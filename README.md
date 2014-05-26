indicatorJS
===========

The library is a loading indicator.

### Contribute ###

I'm waiting your pull requests :)

### Usage ###

First include script

```html
<script src="indicator.js"></script>
```

```html
<div id="data">
...
</div>
```

```javascript

	// Show indicator
	indicator.show('#data');
	
	// AJAX Request
	$.ajax({
		url: "/uri/",
		type: "POST",
		data: "key=value",
		success: function(result) {
		
		  // Hide indicator
		  indicator.hide('#data');
		  
		  // Result
			$('#data').html(result);
		}
	});
```

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
