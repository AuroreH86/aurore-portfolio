// Mise à jour automatique de l'année dans le footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Chargement dynamique du header
fetch("./partials/header.html")
    .then(response => {
        console.log("Réponse header:", response.status, response.ok);
        return response.text();
    })
    .then(data => {
        const headerEl = document.getElementById("site-header");
        if (!headerEl) {
            console.error("Élément #site-header introuvable");
            return;
    }
    headerEl.innerHTML = data;
    })
    .catch(error => {
        console.error("Erreur lors du chargement du header :", error);
    });
