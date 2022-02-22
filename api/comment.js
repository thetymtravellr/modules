function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data));
}

function displayComments(comments) {
    const commentContainer = document.getElementById('container');
    for(const comment of comments) {
        const p = document.createElement('p');
        p.innerText = comment.email;
        commentContainer.appendChild(p);
    }
}