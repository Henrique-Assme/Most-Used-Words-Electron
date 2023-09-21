module.exports = (rows) => {
  return new Promise((resolve, reject) => {
    try {
      const data = rows
        .filter(filterValid)
        .map(removePonctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(" ")
        .map((word) => word.toLowerCase());
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

function filterValid(row) {
  const notNumber = !parseInt(row.trim()); //! converte para boleano
  const notEmpty = !!row.trim();
  const notInterval = !row.includes("-->");
  const notSite = !row.includes("WWW.") && !row.includes(" -");
  return notEmpty && notNumber && notInterval && notSite;
}

function removePonctuation(row) {
  return row.replace(/[,?!:;.-]/g, "").replace('♪', ""); //troca pontuação por espaços vazios
}

function removeTags(row) {
  return row.replace(/(<[^>]+)>/g, "").trim();
}

function mergeRows(fullText, rowText) {
  return `${fullText} ${rowText}`;
}
