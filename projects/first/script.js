const p = document.querySelector('p')

setInterval(() => {
    let time = new Date()
    let newTime = time.toLocaleTimeString();
    p.innerHTML = newTime
}, 1000);

Window.reload()