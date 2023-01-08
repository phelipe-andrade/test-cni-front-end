"use strict";Object.defineProperty(exports, "__esModule", {value: true});class CompareString {
  static arrayWords(value) {
    const clear = value.replace(/[^\wÀ-ú]{1,5}/g, ' ').toUpperCase().split(' ');
    return clear.filter((x) => x !== '');
  }

  static locateMarried(arrayStringDb, arrayStringWeb) {
    let result = false;
    let cont = 0;
    const numberWords = arrayStringWeb.length;
    for (const stringWeb of arrayStringWeb) {
      if (arrayStringDb.includes(stringWeb)) cont += 1;
    }
    if (cont >= numberWords) result = true;
    return result;
  }
}

exports. default = CompareString;
