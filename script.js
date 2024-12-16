function calculatePanels(roofWidth, roofHeight, panelWidth, panelHeight) {
  if (
    roofWidth <= 0 ||
    roofHeight <= 0 ||
    panelWidth <= 0 ||
    panelHeight <= 0
  ) {
    throw new Error("All dimensions must be greater than 0");
  }

  // Calcular y redondear el número de panels dependiendo de altura y longitud
  const panelsInWidth = Math.floor(roofWidth / panelWidth);
  const panelsInHeight = Math.floor(roofHeight / panelHeight);

  // Número de paneles
  return panelsInWidth * panelsInHeight;
}

document
  .getElementById("panelForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que el formulario se envia antes

    // Recibir y parsear las dimensiones para calcular número de paneles
    const roofWidth = parseFloat(document.getElementById("roofWidth").value);
    const roofHeight = parseFloat(document.getElementById("roofHeight").value);
    const panelWidth = parseFloat(document.getElementById("panelWidth").value);
    const panelHeight = parseFloat(
      document.getElementById("panelHeight").value
    );

    try {
      // Calcular número de paneles
      const result = calculatePanels(
        roofWidth,
        roofHeight,
        panelWidth,
        panelHeight
      );

      // Mostrar el resultado
      document.getElementById(
        "result"
      ).textContent = `The roof can fit ${result} panels.`;
    } catch (error) {
      document.getElementById("result").textContent = `Error: ${error.message}`;
    }
  });
