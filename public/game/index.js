class Game {
  currentLevel = -1;
  body;
  labelLevel;
  labelTarget;
  exerciceTodo;
  exerciceTodoLink;
  exerciceTutorial;
  exerciceTutorialClose;

  constructor() {}

  initElements = () => {
    this.body = document.body;
    this.labelLevel = document.getElementById("exercice-level-information");
    this.labelTarget = document.getElementById("exercice-level-target");

    this.exerciceTodo = document.getElementById("exercice-todo-text");
    this.exerciceTodoLink = document.getElementById("exercice-todo-link");

    this.exerciceTutorial = document.getElementById("exercice-start");
    this.exerciceTutorialClose = document.getElementById(
      "exercice-start-close"
    );

    this.labelTarget.textContent = `Objectif ${levelsLength}`;

    this.exerciceTutorialClose.addEventListener("click", this.removeTutoral);
  };

  removeTutoral = () => {
    this.exerciceTutorial.remove();
  };

  setTextTodo = ({ text, value, target }) => {
    this.exerciceTodo.textContent = text
      .replace("{{value}}", value)
      .replace("{{block}}", "au bloque ci-dessous")
      .replace("{{target}}", target || "au bloque ci-dessous");
  };

  setLink = (link) => {
    if (link === undefined) return;
    Array.from(this.exerciceTodoLink.children).forEach((c) => c.remove());
    if (!Array.isArray(link)) link = [link];
    link.forEach((l) => {
      const a = document.createElement("a");
      a.textContent = l;
      a.href = l;
      a.target = "_blank";
      this.exerciceTodoLink.appendChild(a);
    });
  };

  updateLevel = (l) => {
    if (level !== this.currentLevel) {
      level = l;
      const levelObejct = levels[level];
      this.setTextTodo(levelObejct);
      this.setLink(levelObejct.link);
      this.labelLevel.textContent = `Niveau ${level}`;
    }
  };

  end = () => {
    this.labelLevel.textContent = `Niveau ${levelsLength}`;
    if (configuration.showModalEnd) {
      this.body.appendChild(ModalEnd());
    }
  };

  getTarget = (target = "#exercice-block") => {
    return document.querySelector(target);
  };

  update = () => {
    let isFinish = false;
    while (level < levelsLength && isFinish === false) {
      const value = serializeValue(levels[level].value);
      const target = this.getTarget(levels[level].target);
      if (target.style[levels[level].property] === value) {
        level++;
      } else {
        this.updateLevel(level);
        isFinish = true;
      }
    }

    if (level === levelsLength - 1) {
      setTimeout(() => this.end(), configuration.timeToUpdate);
      return;
    }
    this.currentLevel = level;
    setTimeout(() => this.update(), configuration.timeToUpdate);
  };
}

let game = new Game();

document.addEventListener("DOMContentLoaded", () => {
  game.initElements();
  game.update();
});
