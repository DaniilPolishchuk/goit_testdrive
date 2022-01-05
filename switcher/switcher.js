const darkTheme = {
    accent: '#FFC700',
    main: '#fff',
    bg: '#222527',
    modalBg: 'rgb(239 236 236 / 90%)',
    btnText: '#060803', 
    motoText: '#FFFFFF',
};

const lightTheme = {
    accent: '#4B526A',
    main: '#15141D',
    bg: '#EBEBEB',
    modalBg: 'rgb(21 20 29 / 90%)',
    btnText: '#fff',
    motoText: '#7A7982',
}

let currentTheme = 'dark';

const element = document.documentElement;

function switchTheme () {
    const aboutMeContainer = document.querySelector('.about');
    const factsContainer = document.querySelector('.codex');

    if (currentTheme === 'dark') {
        element.style.setProperty('--theme-accent', lightTheme.accent);
        element.style.setProperty('--theme-main', lightTheme.main);
        element.style.setProperty('--theme-bg', lightTheme.bg);
        element.style.setProperty('--theme-modal-bg', lightTheme.modalBgd);
        element.style.setProperty('--theme-btn-text', lightTheme.btnText);
        element.style.setProperty('--theme-moto-text', lightTheme.motoText);

        aboutMeContainer.classList.add('about--light');
        factsContainer.classList.add('codex--light');

        currentTheme = 'light';
    } else {
        element.style.setProperty('--theme-accent', darkTheme.accent);
        element.style.setProperty('--theme-main', darkTheme.main);
        element.style.setProperty('--theme-bg', darkTheme.bg);
        element.style.setProperty('--theme-modal-bg', darkTheme.modalBg);
        element.style.setProperty('--theme-btn-text', darkTheme.btnText);
        element.style.setProperty('--theme-moto-text', darkTheme.motoText);

        aboutMeContainer.classList.remove('about--light');
        factsContainer.classList.remove('codex--light');

        currentTheme = 'dark';
    }
}

const themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', switchTheme);