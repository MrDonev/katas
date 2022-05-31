function formatTextInLines(text, limit) {
  if (text === undefined || text.length < 15 || limit < 15)
    return 'Invalid input';
  const wordsArray = text.split(' ');
    let formattedText = '';
    const finalArr = [];
    word = 0;
    while (word < wordsArray.length) {
      if (formattedText.length + wordsArray[word].length <= limit) {
        formattedText += wordsArray[word] +' ';
        word++;
        console.dir(formattedText)
      } else {
            console.dir(formattedText.trim() + '\n')
        finalArr.push(formattedText.trim() + '\n');
        formattedText = '';
      }
      if (word===wordsArray.length){
          finalArr.push(formattedText.trim())
      }
    }
    // console.log(finalArr)
     console.dir(finalArr.join(''))
  return (finalArr.join(''))
}

module.exports = formatTextInLines;
