function calcularPanelesEnTecho(
  roofWidth,
  roofHeight,
  panelWidth,
  panelHeight
) {
  if (
    roofWidth <= 0 ||
    roofHeight <= 0 ||
    panelWidth <= 0 ||
    panelHeight <= 0
  ) {
    throw new Error("All dimensions must be greater than 0");
  }

  // Calculate how many panels fit in width and height
  const panelsInWidth = Math.floor(roofWidth / panelWidth);
  const panelsInHeight = Math.floor(roofHeight / panelHeight);

  // Total number of panels that fit
  return panelsInWidth * panelsInHeight;
}

document
  .getElementById("panelForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const roofWidth = parseFloat(document.getElementById("roofWidth").value);
    const roofHeight = parseFloat(document.getElementById("roofHeight").value);
    const panelWidth = parseFloat(document.getElementById("panelWidth").value);
    const panelHeight = parseFloat(
      document.getElementById("panelHeight").value
    );

    try {
      // Calculate the result
      const result = calcularPanelesEnTecho(
        roofWidth,
        roofHeight,
        panelWidth,
        panelHeight
      );

      // Display the result
      document.getElementById(
        "result"
      ).textContent = `The roof can fit ${result} panels.`;
    } catch (error) {
      document.getElementById("result").textContent = `Error: ${error.message}`;
    }
  });
