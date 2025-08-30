 function agregarItem() {
      let input = document.getElementById("campo");
      let texto = input.value.trim();

      if (texto !== "") {
        let li = document.createElement("li");
        li.textContent = texto;

        document.getElementById("lista").appendChild(li);
        input.value = ""; // limpiar campo
      } else {
        alert("Por favor escribe algo antes de agregar.");
      }
    }