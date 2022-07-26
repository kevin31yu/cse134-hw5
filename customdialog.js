export function alert_function2(e) {
    const temp = document.getElementById("template1");
    var clon = temp.content.cloneNode(true);
    const dialog_place = document.getElementById("dialog_place");
    dialog_place.appendChild(clon);

    const ok = document.getElementById("ok1");
    ok.addEventListener('click', () => {
        const div1 = document.getElementById("div1");
        div1.remove();
    });

    e.preventDefault();
}

export function confirm_function2(e) {
    const temp = document.getElementById("template2");
    var clon = temp.content.cloneNode(true);
    const dialog_place = document.getElementById("dialog_place");
    dialog_place.appendChild(clon);
    
    const ok = document.getElementById("ok2");
    const cancel = document.getElementById("cancel2");
    const output = document.getElementById("output2");

    ok.addEventListener('click', () => {
        output.innerHTML = `The value returned by the confirm method is : true`;
        const div2 = document.getElementById("div2");
        div2.remove();
    });
    cancel.addEventListener('click', () => {
        output.innerHTML = `The value returned by the confirm method is : false`;
        const div2 = document.getElementById("div2");
        div2.remove();
    });

    e.preventDefault();
}

export function prompt_function2(e) {
    const temp = document.getElementById("template3");
    var clon = temp.content.cloneNode(true);
    const dialog_place = document.getElementById("dialog_place");
    dialog_place.appendChild(clon);
    
    const ok = document.getElementById("ok3");
    const cancel = document.getElementById("cancel3");
    const output = document.getElementById("output2");

    ok.addEventListener('click', () => {
        const dirty = document.getElementById("prompt_input");
        const input = DOMPurify.sanitize(dirty.value);
        output.innerHTML = `The value returned by the prompt method is : ${ input }`;
        const div3 = document.getElementById("div3");
        div3.remove();
    });
    cancel.addEventListener('click', () => {
        output.innerHTML = "Canceled";
        const div3 = document.getElementById("div3");
        div3.remove();
    });

    e.preventDefault();
}