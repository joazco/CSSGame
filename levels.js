const levels = [
  {
    text: "Définir la couleur de fond {{value}} {{block}}",
    property: "backgroundColor",
    value: "#00a8ff",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color",
  },
  {
    text: "Définir le remplissage des côtés à {{value}} {{block}}",
    property: "padding",
    value: "20px",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/padding",
  },
  {
    text: "Définir la couleur du texte en blanc {{block}}",
    property: "color",
    value: "white",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/color",
  },
  {
    text: "Aligner le texte en centre {{block}}",
    property: "textAlign",
    value: "center",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/text-align",
  },
  {
    text: "Définir les coins arroundis de {{value}} {{block}}",
    property: "borderRadius",
    value: "10px",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/border-radius",
  },
  {
    text: "Définir les bordures de 6px solid et de couleur #fbc531 {{block}}",
    property: "border",
    value: "6px solid #fbc531",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/border",
  },
  {
    text: "Ajouter une box-shadow avec la valeur {{value}} {{block}}",
    property: "boxShadow",
    value: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow",
  },
  {
    text: "Mettre la taille en largeur au calcule de 100% - 52px ( 52 pixels étant l'addition des 20 * 2 pixels padding et 6 * 2 pixels de bordures ) {{block}}",
    property: "width",
    value: "calc(100% - 52px)",
    link: [
      "https://developer.mozilla.org/fr/docs/Web/CSS/width",
      "https://developer.mozilla.org/fr/docs/Web/CSS/calc",
    ],
  },
  {
    text: "Mettre la taille en hauteur à {{value}} {{block}}",
    property: "height",
    value: "350px",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/height",
  },
  {
    text: "Mettre la taille du texte à {{value}} {{block}}",
    property: "fontSize",
    value: "50px",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/font-size",
  },
  {
    text: "Mettre le texte en gras {{block}}",
    property: "fontWeight",
    value: "bold",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/font-weight",
  },
  {
    text: "Définit la hauteur de la boîte d'une ligne à {{value}} {{block}}",
    property: "lineHeight",
    value: "110px",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/line-height",
  },
  {
    text: "Définir le dépassement en y en {{value}} {{block}}",
    property: "overflowY",
    value: "auto",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/overflow",
  },
  {
    text: "Fixer le bloc",
    property: "position",
    value: "fixed",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/position",
  },
  {
    text: "Mettre le bloc en bottom {{value}}",
    property: "bottom",
    value: "0",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/position",
  },
];

const levelsLength = levels.length;
