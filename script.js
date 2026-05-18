function calcolaEta(dataNascita) {
    const oggi = new Date();
    const nascita = new Date(dataNascita);
    let eta = oggi.getFullYear() - nascita.getFullYear();
    const mese = oggi.getMonth() - nascita.getMonth();

    if (mese < 0 || (mese === 0 && oggi.getDate() < nascita.getDate())) {
        eta--;
    }
    return eta;
}

function aggiornaInterfaccia() {
    const anniElement = document.getElementById('anni');
    if (anniElement) {
        const miaEta = calcolaEta("2010-11-22");
        const prefix = document.documentElement.lang === "en" ? "Age" : "età";
        anniElement.textContent = `${prefix}: ${miaEta}`;
    }
}

aggiornaInterfaccia();