function loadTopBar() {
  fetch("topbar.html")
      .then(response => response.text())
      .then(text => {
        let topbarph = document.getElementById("topbarph");
        let topbar = document.getElementById("topbar");
          topbar.innerHTML = text;
          topbarph.parentNode.replaceChild(topbar, topbarph);
      });
}
loadTopBar(); // Call the function to load the top bar

