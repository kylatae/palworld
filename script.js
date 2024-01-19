// function createTopBar() {
//     const body = document.body; // Get the <body> element
    
//     const topBar = document.createElement('div');
//     topBar.classList.add("top-bar");

//     const h1 = document.createElement('h1');
//     h1.textContent = "Palworld";
//     topBar.appendChild(h1);

//     const dropdown = document.createElement('div');
//     dropdown.classList.add("dropdown");

//     const dropBtn = document.createElement("button");
//     dropBtn.classList.add("dropbtn");
//     dropBtn.textContent = "Menu";
//     dropdown.appendChild(dropBtn);

//     const dropdownContent = document.createElement("div");
//     dropdownContent.classList.add("dropdown-content");
//     dropdown.appendChild(dropdownContent);

//     const links = [
//         ["index.html", "Home"],
//         ["assets/pals.html", "Pals"],
//         ["#", "Skills"],
//         ["#", "Blueprints"]
//     ];

//     for (const [href, text] of links) {
//         const link = document.createElement("a");
//         link.href = href;
//         link.textContent = text;
//         dropdownContent.appendChild(link);
//     }

//     body.insertBefore(topBar, body.firstChild)
// }

// createTopBar();



function createTopBar() {
    const body = document.body; // Get the <body> element

    // Create the top bar elements dynamically
    const topBar = document.createElement('div');
    topBar.classList.add("top-bar");

    const h1 = document.createElement('h1');
    h1.textContent = "Palworld";

    const dropdown = document.createElement('div');
    dropdown.classList.add("dropdown");

    // ... (Create menu button and dropdown content as before)
    const dropBtn = document.createElement("button");
    dropBtn.classList.add("dropbtn");
    dropBtn.textContent = "Menu";
    dropdown.appendChild(dropBtn);

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    dropdown.appendChild(dropdownContent);

    const links = [
        ["./index.html", "Home"],
        ["./pals.html", "Pals"],
        ["#", "Skills"],
        ["#", "Blueprints"]
    ];

    for (const [href, text] of links) {
        const link = document.createElement("a");
        link.href = href;
        link.textContent = text;
        dropdownContent.appendChild(link);
    }

    // Add the created elements to the top bar and the body
    topBar.appendChild(h1);
    topBar.appendChild(dropdown);
    body.insertBefore(topBar, body.firstChild); // Insert at the beginning of <body> 
}

createTopBar(); // Call the function to create the top bar
