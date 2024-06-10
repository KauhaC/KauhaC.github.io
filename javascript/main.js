function deletarLinha(button) {
    const row = button.parentNode.parentNode;
    row.style.display = 'none';
}

function fetchApiData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const apiResultDiv = document.getElementById('api-result');
            apiResultDiv.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            `;
        })
        .catch(error => console.error('Erro:', error));
}

function toggleDiv(divNumber) {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');
    
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    
    document.getElementById(`div${divNumber}`).style.display = 'block';
}
