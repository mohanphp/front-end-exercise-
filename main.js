$(document).ready(function() {

	$('.check-box').click(function(e) {

		if (e.shiftKey) {

			$('.item').removeClass('shift-key');
			$(this).parent().addClass('shift-key');
			var count = 0;

            $('.item').each(function() {
            	
            	if (!($(this).hasClass('shift-key'))) {
            		$(this).removeClass('shift-key');
            		$(this).addClass('checked');
				}
				else{
					$(this).addClass('checked');
					return false;
            	}
            })

			$('.item').removeClass('shift-key');
        } else {
			$(this).parent().toggleClass('checked');
			$('.item').removeClass('shift-key');
			$(this).parent().addClass('shift-key');
		}
	})

	$('#check-button').click(function(e) {

		if ($(this).hasClass('checkall')) {
			$('.item').addClass('checked');
			$(this).text('Uncheck all');
		} else {
			$('.item').removeClass('checked');
			$(this).text('Check all');
		}

		$(this).toggleClass('checkall');
	})

})
