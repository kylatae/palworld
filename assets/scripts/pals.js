const palGrid = document.querySelector(".pal-grid");
const filtersContainer = document.querySelector(".filters");

// Create cards for each Pal
palsInfo.forEach(pal => {
    const card = document.createElement("div");
    card.classList.add("pal-card");
  
    // Add Pal name, element, skills, etc. to the card
    // Example:
    card.innerHTML = `
        <h2>${pal.name}</h2>
        <p>Element: <data class="Element">${pal.element}</data><p>
        <p>Partner Ability: <data class="PartnerAbility">${pal.partnerAbility}</data></p>
        `;
  
    palGrid.appendChild(card);
  
  });


// Helper function to get unique values from an array property
function getUniqueValues(array, property) {
    return [...new Set(array.map(item => item[property]))];
}

// Create filter dropdowns
const filterData = {
    "Element": getUniqueValues(palsInfo, "element"),
    "PartnerAbility": getUniqueValues(palsInfo, "partnerAbility"),
    // ... and so on for other filters
};

for (const filterName in filterData) {
    const select = document.createElement("select");
    select.name = filterName;

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = `-- Select ${filterName} --`;
    select.appendChild(defaultOption);

    filterData[filterName].forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });

    filtersContainer.appendChild(select);
}

// Filtering logic
function applyFilters() {
    const selectedFilters = {};
    filtersContainer.querySelectorAll("select").forEach(select => {
        if (select.value) {
            selectedFilters[select.name] = select.value;
        }
    });

    palGrid.querySelectorAll(".pal-card").forEach(card => {
        let matches = true;
        for (const filterName in selectedFilters) {
            const palValue = card.querySelector(`.${filterName}`).textContent;
            console.log (palValue)
            if (palValue !== selectedFilters[filterName]) {
                console.log("break")
                matches = false;
                break;
            }
        }
        card.style.display = matches ? "block" : "none";
    });
}

// Add event listeners to filter dropdowns
filtersContainer.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", applyFilters);
});

// Initial filtering
applyFilters();

