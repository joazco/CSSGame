document.addEventListener("DOMContentLoaded", () => {
  const labelLevel = document.getElementById("exercice-level-information");
  const labelTarget = document.getElementById("exercice-level-target");
  const exerciceTodo = document.getElementById("exercice-todo-text");
  const exerciceTodoLink = document.getElementById("exercice-todo-link");
  const exerciceBlock = document.getElementById("exercice-block");

  const setTextTodo = (text, value) => {
    exerciceTodo.textContent = `${text.replace(
      "{{value}}",
      value
    )} du bloque ci-dessous`;
  };

  const setLink = (link) => {
    if (link === undefined) return;
    Array.from(exerciceTodoLink.children).forEach((c) => c.remove());
    if (!Array.isArray(link)) link = [link];
    link.forEach((l) => {
      const a = document.createElement("a");
      a.textContent = l;
      a.href = l;
      a.target = "_blank";
      exerciceTodoLink.appendChild(a);
    });
  };

  const updateLevel = (l) => {
    level = l;
    const levelObejct = levels[level];
    setTextTodo(levelObejct.text, levelObejct.value);
    setLink(levelObejct.link);
    labelLevel.textContent = `Niveau ${level}`;
  };

  const end = () => {
    labelLevel.textContent = `Niveau ${levelsLength}`;
    document.body.appendChild(ModalEnd());
  };

  const update = () => {
    let isFinish = false;
    while (level < levelsLength && isFinish === false) {
      let value = serializeValue(levels[level].value);
      if (exerciceBlock.style[levels[level].property] === value) {
        level++;
      } else {
        updateLevel(level);
        isFinish = true;
      }
    }
    if (level === levelsLength) {
      setTimeout(() => end(), configuration.timeToUpdate);
      return;
    }
    setTimeout(() => update(), configuration.timeToUpdate);
  };
  update();
  labelTarget.textContent = `Objectif ${levelsLength}`;
});
