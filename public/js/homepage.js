// show and hide replies
$('.replies-button').click(showReplies);
function showReplies(e) {
    $(e.target)
      .parent()
      .parent()
      .siblings('.comment-container')
      .css('display', 'initial');
    $(e.target).css('display', 'none')
    $(e.target).siblings('.hide-replies').css('display', 'initial');
}

$('.hide-replies').click(hideReplies);
function hideReplies(e) {
    $(e.target)
      .parent()
      .parent()
      .siblings('.comment-container')
      .css('display', 'none');
    $(e.target).css('display', 'none')
    $(e.target).siblings('.replies-button').css('display', 'initial');
}

// show reply container
$('.reply').click(showReplyContainer);
function showReplyContainer(e) {
    $(e.target)
      .parent()
      .parent()
      .siblings('.reply-container')
      .css('display', 'flex');
}
// cancel reply
$('.cancel-reply').click(cancelReply);
function cancelReply(e) {
    $(e.target)
      .parent()
      .parent()
      .css('display', 'none');
}

//