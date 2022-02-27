const loadComments = async () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    const res = await fetch(url);
    const data = await res.json();
    showComments(data);
}

const showComments = (comments) => {
    const commentContainer = document.getElementById('container');
    for(const comment of comments) {
        const div = document.createElement('div');
        div.innerHTML = `
        <p>${comment.id}: ${comment.body}</p>
        <button onClick="dynamicComment(${comment.id})">Click</button>
        `
        commentContainer.appendChild(div);
    }
}

const dynamicComment = id => {
    const container = document.getElementById('comment');
    container.innerHTML = '';
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showClickedComment(data.body));
 
}

const showClickedComment = comment => {
    
    const container = document.getElementById('comment');
    const p = document.createElement('p');
    p.innerHTML = comment;
    container.appendChild(p);
}