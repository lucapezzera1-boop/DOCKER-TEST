function calcolaGiorni(dataTorneo) {
    const oggi = new Date();
    const torneo = new Date(dataTorneo);
    
    const differenzaInMillisecondi = oggi - torneo;
    const giorniPassati = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 * 24));
    
    return giorniPassati;
}

async function aggiornaInterfaccia() {
    const daysElement = document.getElementById('daysSinceTournament');
    const isEn = document.documentElement.lang === "en";

    if (daysElement) {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            
            const giorni = calcolaGiorni(data.dataTorneo);
            
            if (isEn) {
                daysElement.textContent = `Days since my last tournament: ${giorni}`;
            } else {
                daysElement.textContent = `Giorni dal mio ultimo torneo: ${giorni}`;
            }
        } catch (error) {
            console.error("Errore nel caricamento della data:", error);
        }
    }
}

aggiornaInterfaccia();