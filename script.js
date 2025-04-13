document.getElementById("sector").addEventListener("change", function () {
    const priceField = document.getElementById("price");
    const quantity = parseInt(document.getElementById("quantity").value);
    const sector = this.value;
    let price = "";
    let fvalue = 0;
    if (sector === "A") price = "2000";
    else if (sector === "B") price = "2500";
    else if (sector === "C") price = "3000";
    else if (sector === "VIP") price = "25000";
    fvalue= price*quantity;

   priceField.value = fvalue;
  });

  document.getElementById("quantity").addEventListener("input", function () {
    document.getElementById("sector").dispatchEvent(new Event("change"));
});


  document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const sector = document.getElementById("sector").value;
    const error = document.getElementById("error");

    if (name.length < 10 ) {
      error.textContent = "A név legalább 10 karakter hosszú legyen.";
      return;
    }

    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email)) {
      error.textContent = "Érvénytelen email cím.";
      return;
    }
    
    if (!sector) {
      error.textContent = "Kérlek válassz szektort!";
      return;
    }

    error.textContent = ""; // nincs hiba
    alert("Sikeres foglalás!");
    document.getElementById("ticketForm").reset();
    
  });