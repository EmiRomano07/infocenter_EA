document.addEventListener("DOMContentLoaded", () => {
    const btnF = document.getElementById("finanzas")
    const btnE = document.getElementById("educacion")
    const btnS = document.getElementById("Salud")

    btnF.addEventListener("click", () => {
        window.open("https://es.wikipedia.org/wiki/Finanzas")
    })
})