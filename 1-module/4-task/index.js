/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strLowerCase = str.toLowerCase();

  return strLowerCase.includes('1xbet') || strLowerCase.includes('xxx');
}
