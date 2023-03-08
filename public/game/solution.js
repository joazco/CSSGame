const nextSolution = () => {
  if (configuration.disableSolution) return;
  const levelObejct = levels[level];
  const target = game.getTarget(levelObejct.target);
  target.style[levelObejct.property] = levelObejct.value;
};

const solutionTo = (l) => {
  nextSolution();
  if (level >= l - 1) {
    return;
  }
  setTimeout(() => solutionTo(l), configuration.timeToUpdate);
};

const startSolution = () => {
  const timer = setInterval(() => {
    if (level === levelsLength) {
      clearInterval(timer);
      return;
    }
    nextSolution();
  }, configuration.timeToUpdate);
};

document.addEventListener("DOMContentLoaded", () => {
  game.initElements();

  if (!configuration.disableSolution && configuration.autoStartSolution) {
    startSolution();
  } else if (!configuration.disableSolution && configuration.autoSolutionTo) {
    solutionTo(configuration.autoSolutionTo);
  }
});
