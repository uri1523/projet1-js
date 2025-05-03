// 1. Trouver le plus petit et le plus grand nombre
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }
  
  // 2. Somme des cubes
  function sumOfCubes(arr) {
    return arr.reduce((total, n) => total + n ** 3, 0);
  }
  
  // 3. Filtrer les chaînes dans un tableau
  function filterArray(arr) {
    return arr.filter(x => typeof x === 'number');
  }
  
  // 4. Vérifier si un nombre est symétrique
  function isSymmetrical(num) {
    return num.toString() === num.toString().split('').reverse().join('');
  }
  
  // 5. Vérifier si un tableau est spécial (pair/impair selon l’index)
  function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== arr[i] % 2) return false;
    }
    return true;
  }
  
  // 6. Compter les valeurs true dans un tableau
  function countTrue(arr) {
    return arr.filter(Boolean).length;
  }
  
  // 7. Convertir un objet en tableau [clé, valeur]
  function objectToArray(obj) {
    return Object.entries(obj);
  }
  
  // 8. Générer un tableau de multiples
  function arrayOfMultiples(num, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
      result.push(num * i);
    }
    return result;
  }
  
  // 9. Vérifier la distance totale d’un marathon
  function marathonDistance(arr) {
    return arr.reduce((sum, val) => sum + Math.abs(val), 0) === 25;
  }
  
  // 10. Mettre au carré chaque chiffre d’un nombre
  function squareDigits(num) {
    return Number(num.toString().split('').map(d => d ** 2).join(''));
  }