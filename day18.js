function fixFiles(files) {
  let currentFiles = files.reduce((acc, file) => ({ ...acc, [file]: -1 }), {});
  // console.log(currentFiles)
  return files.map((file) => {
    currentFiles[file]++;
    return currentFiles[file] === 0
      ? file
      : file + '(' + currentFiles[file] + ')';
  });
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
const files2 = ['file', 'file', 'file', 'games', 'games']
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)', 'icon(1)']

console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
console.log(fixFiles(files2)) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']