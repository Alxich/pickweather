/**
 * This script allow you to find string in Objects Array
 * and gives the results wich you can operate.
 * Thanks techfoobar. :)
 */

export function searchMeCity(toSearch: any, objects: any) {
  function trimString(s: string) {
    var l = 0,
      r = s.length - 1;
    while (l < s.length && s[l] === " ") l++;
    while (r > l && s[r] === " ") r -= 1;
    return s.substring(l, r + 1);
  }

  function compareObjects(o1: { [x: string]: any }, o2: { [x: string]: any }) {
    var k = "";
    for (k in o1) if (o1[k] !== o2[k]) return false;
    for (k in o2) if (o1[k] !== o2[k]) return false;
    return true;
  }

  function itemExists(haystack: string | any[], needle: any) {
    for (var i = 0; i < haystack.length; i++)
      if (compareObjects(haystack[i], needle)) return true;
    return false;
  }

  var results = [];
  toSearch = trimString(toSearch); // trim it
  for (var i = 0; i < objects.length; i++) {
    for (var key in objects[i]) {
      if (objects[i][key].indexOf(toSearch) !== -1) {
        if (!itemExists(results, objects[i])) results.push(objects[i]);
      }
    }
  }

  return results;
}
