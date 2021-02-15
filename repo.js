const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let username_input = document.getElementById('name');
    let username = username_input.value;

    showUserRepo(username);
});

const showUserRepo = username => {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;

    xhr.open('GET', url, true);

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        let ul = document.querySelector('.repo-list');
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        console.log(data);

        for (let user in data) {
            let li = document.createElement('li');
    
            li.innerHTML = (`
                <p><span>Name</span>: ${data[user].name}</p>
                <p><span>Description</span>: ${data[user].description}</p>
                <p><span>URL</span>: <a href="${data[user].html_url}">${data[user].html_url}</a></p>
            `)
            ul.appendChild(li);
        };

        
    };


    xhr.send();
};
