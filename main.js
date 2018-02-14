$(document).ready(function() {

	$('.check-box').click(function(e) {

		if (e.shiftKey) {

			var count = 0;

            $('.item').each(function() {
            	
            	if ($(this).hasClass('shift-key') && count >= 0) {
            		$(this).removeClass('shift-key');
            		$(this).addClass('checked');
            		count += 1;
            	} else if (count == 1) {
            		$(this).addClass('checked');
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