document.getElementById("searchBtn").addEventListener("click", function () {
  const paNumber = document.getElementById("searchInput").value;
  const selectedValue = document.getElementById("paDropdown").value;
  const validPAs = ["554588", "123456", "987654", "456789", "987123", "321654"];

  if (paNumber === "554588" || validPAs.includes(selectedValue)) {
    // Redirecione para a página do PA correspondente
    window.location.href = `pa${paNumber}.html`;
  } else {
    // Exiba uma mensagem de erro em um ALERT
    alert("PA não cadastrado.");

    // Limpa o campo de pesquisa
    document.getElementById("searchInput").value = "";
  }
});

document.getElementById("paDropdown").addEventListener("change", function () {
  const selectedValue = this.options[this.selectedIndex].value;
  const validPAs = ["554588", "123456", "987654", "456789", "987123", "321654"];

  if (validPAs.includes(selectedValue)) {
    const openPageButton = document.createElement("button");
    openPageButton.textContent = "Abrir Página do PA";
    openPageButton.id = "openPageButton";

    openPageButton.addEventListener("click", function () {
      // Redirecione para a página do PA correspondente
      window.location.href = `pa${selectedValue}.html`;
    });

    const main = document.querySelector("main");
    main.innerHTML = ""; // Limpa o conteúdo anterior da pesquisa
    main.appendChild(openPageButton);
  }
});
