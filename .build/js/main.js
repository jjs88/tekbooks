$(document).ready(function() {



	$('.removeBook').click(function(e) {


		deleteId = $(this).data('id');
		$.ajax({
			url: '/manage/books/delete/' + deleteId,
			type: 'delete',
			success: function() {

			}
			// error: function() {
			// 	throw err;
			// }
		});

		//used like a redirect
		window.location = '/manage/books';

	})

	$('.removeCategory').click(function(e) {


		deleteId = $(this).data('id');
		$.ajax({
			url: '/manage/categories/delete/' + deleteId,
			type: 'delete',
			success: function() {

			}
			// error: function() {
			// 	throw err;
			// }
		});

		//used like a redirect
		window.location = '/manage/categories';

	})
})