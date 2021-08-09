let prlxItems = document.querySelectorAll('.intro__prlxItem');

const scrollHandle = () => {
    let scrollY = window.scrollY;

    for (let i = 0; i < prlxItems.length; i++) {
        switch (i) {
            case 0:
                prlxItems[i].style.transform = `translate3d(${scrollY * 0.1}px, ${scrollY * 0.2}px, 0) scale(${1 + scrollY*0.0001}, ${1 + scrollY*0.0001})`;
                break;
            case 1:
                prlxItems[i].style.transform = `translate3d(${scrollY * 0.01}px, ${scrollY * 0.4}px, 0)`;
                break;
            case 2:
                prlxItems[i].style.transform = `translate3d(0, ${scrollY * 0.1}px, 0)  scale(${1 + scrollY*0.0001}, ${1 + scrollY*0.0001})`;
                break;
        }
    }
};

document.addEventListener('scroll', scrollHandle);