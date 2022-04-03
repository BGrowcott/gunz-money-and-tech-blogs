// show new post modal
const newPostButton = $('#new-post');
newPostButton.click(showPostModal);
function showPostModal() {
  $('#form-container').css('display', 'initial');
}
// remove modal
$('.cancel-post').click(cancelPost);
function cancelPost(e) {
  e.preventDefault();
  updatePost = false
  $('#title').val('')
  $('#content').val('')
  $('#code').val('')
  $('#form-container').css('display', 'none');
}

// update posts function
let updatePost = false;
let updateId;
$('.update-post').click((e)=>{
  updatePost = true
  updateId = e.target.getAttribute('data-id')
  $('#title').val($(e.target).parent().parent().siblings('header').children('h3').text())
  $('#content').val($(e.target).parent().parent().siblings('.card-body').children('p').text())
  $('#code').val($(e.target).parent().parent().siblings('.card-body').children('pre').children('code').text())
  showPostModal()
})

// send post/put request to api
$('.submit-post').click(sendPost);
async function sendPost(e) {
  e.preventDefault();

  const title = $('#title').val().trim();
  const content = $('#content').val().trim();
  const code = $('#code').val().trim();

  if (!updatePost) {
    if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, content, code }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        cancelPost(e);
        setTimeout(() => location.replace('/dashboard'), 200);
      } else {
        alert('Failed to create project');
      }
    }
  } else {
    if (title && content) {
      const id = updateId;
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content, code }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        cancelPost(e);
        updatePost = false
        setTimeout(() => location.replace('/dashboard'), 200);
      } else {
        alert('Failed to create project');
      }
    }
  }
}

// delete post

$('.delete-post').click(deletePost);

async function deletePost(e) {
  if (e.target.hasAttribute('data-id')) {
    const id = e.target.getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
}
