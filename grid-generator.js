// const gridClasses = `grid ${horizontal}`;


/**
 * @param {Array} gridArray
 *  The grid array.
 * @returns {string}
 *   The grid-area strings.
 */
exports.createGridArea = function (gridArray) {
  if (gridArray) {
    const lastGridCharacter = gridArray[gridArray.length - 1];
    const firstGridCharacter = gridArray[0];
    return `${firstGridCharacter} / ${firstGridCharacter} / ${lastGridCharacter} / ${lastGridCharacter}`;
  }
  return "a / a / i / i";
}

function genCharArray(charA, charZ, characterLength) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (var k = 1; k < characterLength + 1; k++) {
    for (let p = i; p <= j; ++p) {
      let character = String.fromCharCode(p);
      a.push(character.repeat(k));
    }
  }
  return a;
}

/**
  * @param {number} columns
  *   Number of columns.
  * @param {number} rows
  *   Number of rows.
  * @returns {string}
  *   String of grid entries.
  */
exports.createGrid = function (columns, rows) {
  const alphabet = genCharArray("a", "z", 3)
  const arrayOfGridTemplateAreas = new Array(columns);
  // Create two dimensional array.
  for (let i = 0; i < arrayOfGridTemplateAreas.length; i += 1) {
    arrayOfGridTemplateAreas[i] = new Array(rows);
  }

  let h = 0;

  // Add alphabetical chartacters to array.
  for (let i = 0; i < columns; i += 1) {
    for (let j = 0; j < rows; j += 1) {
      arrayOfGridTemplateAreas[i][j] = alphabet[h];
      h += 1;
    }
  }

  let gridTemplateAreas = "";
  // Create the grid-template-areas string.
  arrayOfGridTemplateAreas.forEach((element) => {
    gridTemplateAreas += `'${element.join(" ")}'\n `;
  });

  return gridTemplateAreas;
}
