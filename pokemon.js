const crobatImg = document.getElementById("crobat-img");

if (crobatImg) {
    crobatImg.addEventListener("click", () => {
        console.log("Inizializzazione richiesta a PokéAPI per le statistiche di Crobat...");
        
        fetch("https://pokeapi.co/api/v2/pokemon/crobat")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Qualcosa è andato storto nella richiesta!");
                }
                return response.json();
            })
            .then(data => {
                console.log("--- STATISTICHE DI CROBAT ---");
                
                data.stats.forEach(statInfo => {
                    const nomeStat = statInfo.stat.name.toUpperCase();
                    const valueStat = statInfo.base_stat;
                    console.log(`${nomeStat}: ${valueStat}`);
                });

                console.log("-----------------------------");
                console.log("Altri dati completi:", data);
            })
            .catch(error => {
                console.error(`Si è verificato un errore: ${error.message}`);
            });
    });
}