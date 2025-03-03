const scrollEvent = function () {
    window.addEventListener('scroll', (e) => {
        let scroll = window.scrollY;
        const header = document.querySelector('header');
        if (header && header.classList) {
            if (scroll > 300) {
                header.classList.add('bg-[#143c3c9c]');
            } else {
                header.classList.remove('bg-[#143c3c9c]');
            }
        }
    });
}
export default scrollEvent;