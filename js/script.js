const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    /* mostramos el icono Luz */
    themeToggleLightIcon.classList.remove('hidden')
} else {
    /* mostramos el icono Oscuro */
    themeToggleDarkIcon.documentElement.classList.remove('hidden')
}

themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
    /* toogle icon */
    themeToggleDarkIcon.classList.toggle('hidden')
    themeToggleLightIcon.classList.toggle('hidden')

    /* si esta en el LS */
    if (localStorage.getItem('color-theme')) {
        /* su luz , lo hacemos oscuro , y lo guardamos en LS */
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark') //* agregamos la clase dark al elemento <html>  
            localStorage.setItem('color-theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark') //* agregamos la clase dark al elemento <html>  
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        /* si no esta el LS */
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark') //* agregamos la clase dark al elemento <html>  
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark') //* agregamos la clase dark al elemento <html>  
            localStorage.setItem('color-theme', 'dark')

        }
    }
}