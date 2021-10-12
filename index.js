var fs = require('fs');

fs.readFile('./odm.txt', function (err, data) {
  if (err) {
    throw err;
  }

  const words = new Set(data.toString().split(/[,\r\n ]+/))

  for (let word of words.values()) {
      if (/[j]/iu.test(word)) {
          if (!/[aąeęioóuy][j]/iu.test(word))
            if (!/[j][aąeęioóuy]/iu.test(word))
                console.log(word)
      }
  }
});
