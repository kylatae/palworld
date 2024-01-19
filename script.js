function loadTopBar() {
    const topbar = document.getElementById("topbar");
    fetch("topbar.html")
        .then(response => response.text())
        .then(html => {
            topbar.innerHTML = html;
        });
}

loadTopBar(); // Call the function to load the top bar