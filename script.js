window.onload = (event) => {
    const b = document.querySelector('.button')
    const overlay= document.querySelector('.overlay')
    const exit= document.querySelector('.exit')

    b.addEventListener('click', () => {
        overlay.style.display = "block";
    })
    exit.addEventListener('click', () => {
        overlay.style.display = "none";
    })
    AOS.init({
        
    });
}