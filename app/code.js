const scrollEvent = function () {
    window.addEventListener('scroll', (e) => {
        let scroll = window.scrollY;
        const header = document.querySelector('header.fixed.top-0.left-0.w-full.z-[500].py-2');
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