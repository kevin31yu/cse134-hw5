async function post_function(e) {
    let form = document.getElementById('method_form');

    let method = "post";
    let endpoint = (form.action + method);
    let payload = new FormData(form);

    let request = await fetch(endpoint, {
        method: method,
        body: payload
    });

    document.getElementById('response').innerHTML = await request.text();
    document.getElementById('response').style = "white-space: pre;"

    e.preventDefault();
}

async function get_function(e) {
    let form = document.getElementById('method_form');

    let method = "get";
    let endpoint = (form.action + method);

    let request = await fetch(endpoint);

    document.getElementById('response').innerHTML = await request.text();
    document.getElementById('response').style = "white-space: pre;"

    e.preventDefault();
}

async function put_function(e) {

    e.preventDefault();
}

async function delete_function(e) {

    e.preventDefault();
}

window.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.getElementById("postBtn");
    const getBtn = document.getElementById("getBtn");
    const putBtn = document.getElementById("putBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    postBtn.addEventListener('click', post_function);
    getBtn.addEventListener('click', get_function);
    putBtn.addEventListener('click', put_function);
    deleteBtn.addEventListener('click', delete_function);

    //console.log(`Initialized at ${new Date()}`);
});