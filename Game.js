import Controller from "./Controller.js";

let controller = new Controller();
controller.initGame();

document.getElementById('startGameButton').addEventListener('click', () => controller.initGame());

