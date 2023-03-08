let level = 0;

const serializeValue = (value) => {
  let finalValue = "";
  const valueSplit = value.split(" ");

  valueSplit.forEach((v) => {
    if (v.startsWith("#")) {
      finalValue = `${finalValue} ${toRGB(v)}`;
    } else {
      finalValue = `${finalValue} ${v}`;
    }
  });
  return finalValue.trim();
};

const toRGB = (color) => {
  const { style } = new Option();
  style.color = color;
  return style.color;
};

const ModalEnd = () => {
  const div = document.createElement("div");
  div.innerHTML = `<div id="exercice-modal-ended">
  <div>🎉&nbsp;Félicitation vous avez réussi le jeu</div>
</div>`;
  return div;
};
