(function startup() {
  const colorWell = document.querySelectorAll("input[type='color']");
  colorWell.forEach((color) => {
    color.addEventListener("input", updateAll, false);
  });
})();

function hexToRgb(in_hex) {
  const hex = in_hex.replace("#", "");
  const arrBuff = new ArrayBuffer(4);
  const vw = new DataView(arrBuff);
  vw.setUint32(0, parseInt(hex, 16), false);
  const arrByte = new Uint8Array(arrBuff);
  return arrByte[1] + "," + arrByte[2] + "," + arrByte[3];
}

function updateAll(event) {
  const items = ["backgroundColor", "fontColor", "cardBackgroundColor"];
  const elementName = event.target.name;
  const changedItem = items.includes(elementName);
  if (changedItem) {
    document.documentElement.style.setProperty(
      `--color-${elementName}`,
      `rgb(${hexToRgb(event.target.value)})`
    );
  }
}
