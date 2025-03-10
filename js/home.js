let data = [
    "Camisa Blanca",
    "Camisa Negra",
    "Camisa de Gato",
    "Jean de Estrellas",
    "Jean Bota Campana",
    "Bermuda de Estrellas",
    "Vestido de Fiesta",
    "Vestido Negro",
    "Vestido Azul"
];

function buscar() {
    let query = document.getElementById("buscar").value.trim();
    
    if (query === "") {
        document.getElementById("results").innerHTML = "";
        return;
    }

    let results = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    let resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (results.length > 0) {
        results.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            resultsContainer.appendChild(li);
        });
    } else {
        let li = document.createElement("li");
        li.textContent = "No se encontraron elementos para: " + query;
        resultsContainer.appendChild(li);
    }
}

// Detectar cuando se presiona "Enter" en el input
document.getElementById("buscar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buscar();
    }
});
