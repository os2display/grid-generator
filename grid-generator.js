// const gridClasses = `grid ${horizontal}`;

/**
 * @param {Array} gridArray
 *  The grid array.
 * @returns {string}
 *   The grid-area strings.
 */
export function createGridArea(gridArray) {
  if (gridArray) {
    const lastGridCharacter = gridArray[gridArray.length - 1];
    const firstGridCharacter = gridArray[0];
    return `${firstGridCharacter} / ${firstGridCharacter} / ${lastGridCharacter} / ${lastGridCharacter}`;
  }
  return "a / a / i / i";
}

/**
 * @param {number} characterLength
 * The length of the longest string in the array.
 * @returns {Array} - a array with strings, "a"-"z","aa"-"zz"...
 */
function genCharArray(characterLength) {
  const charArray = [];
  const i = "a".charCodeAt(0);
  const j = "z".charCodeAt(0);
  for (let k = 1; k < characterLength + 1; k += 1) {
    for (let p = i; p <= j; p += 1) {
      const character = String.fromCharCode(p);
      charArray.push(character.repeat(k));
    }
  }
  return charArray;
}

/**
 * @param {number} columns
 *   Number of columns.
 * @param {number} rows
 *   Number of rows.
 * @returns {string}
 *   String of grid entries.
 */
export function createGrid(columns, rows) {
  const alphabet = genCharArray(3);
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
