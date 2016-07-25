$(function () {


	$('#postingContent').summernote({
  		height: 300,
		minHeight: null,
		maxHeight: null,
  		focus: false,
  	});


  	$('#save').click(function () {
  		var _title = $('#postingTitle').val();
  		var _content = $('#postingContent').code();
  		$.post('Forum/createPage',
  			{ title: _title,
  			  content: _content
  			},function () {
  				window.location.reload();
  			}
  		);
  	});
    $('#reply').click(function () {
      var _content = $('#postingContent').code();
      $.post('createReply',
        {
          content: _content
        },function () {
          window.location.reload();
        }
      );
    });

    //subpage add css
    $('.pageBar div .first').attr('class', 'num btn btn-primary');
    $('.pageBar div .prev').attr('class', 'num btn btn-primary');
    $('.pageBar div .next').attr('class', 'num btn btn-primary');
    $('.pageBar div .end').attr('class', 'num btn btn-primary');
    $('.pageBar div .num').attr('class', 'num btn btn-primary');
    $('.pageBar div .current').attr('class', 'num btn btn-primary disabled');

    $('.decoding').each(function () {
      $(this).html($(this).text());
    })

    $('.delete_reply').click(function () {
      var id = $(this).siblings('.replyId').text();
      $.post('deleteReply',
        {
          replyId: id
        },function (out) {
          window.location.reload();
        }
      );
    });
    $('.delete_poster').click(function () {
      var id = $(this).siblings('.posterId').text();
      $.post('Forum/deletePoster',
        {
          posterId: id
        },function (out) {
          window.location.reload();
        }
      );
    });

    $('.addFriend').click(function () {
      alert($(this).parent('.modal-body').children('friend_id').text());
    });
});

