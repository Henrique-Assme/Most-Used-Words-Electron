const { ipcMain } = require("electron");

const pathToRows = require("./pathsToRows");
const prepareData = require("./prepareData");
const groupedWords = require("./groupWords");

ipcMain.on("processSubtitles", (event, paths) => {
  //ouve um canal, quando ouvir, faz alguma coisa
  console.log(paths);
  pathToRows(paths)
    .then((rows) => prepareData(rows))
    .then(preparedData => groupedWords(preparedData))
    .then((groupedWords) => {
      event.reply("processSubtitles", groupedWords);
    });
});
