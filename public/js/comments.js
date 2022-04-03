// new comment
$('.submit-reply').click(sendComment)
async function sendComment(e) {
  e.preventDefault();  
  const content = $(e.target).parent().siblings().val().trim();
  const post_id = e.target.getAttribute('data-id')
  if (post_id && content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
        setTimeout(()=> location.reload(), 200) 
    } else {
      alert('Failed to create');
    }
  }
}

// delete comment
$('.delete-comment').click(deleteComment)
async function deleteComment (e) {
    if (e.target.hasAttribute('data-id')) {
      const id = e.target.getAttribute('data-id');
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setTimeout(()=> location.reload(), 200) 
      } else {
        alert('Failed to delete comment');
      }
    }
  };