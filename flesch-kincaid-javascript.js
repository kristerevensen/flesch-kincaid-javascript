function calculateFleschKincaid(text) {
  // Splitter teksten i ord og setninger
  const words = text.trim().split(/\s+/);
  const sentences = text.trim().split(/[\.\?!]/);

  // Beregner antall ord og setninger
  const numWords = words.length;
  const numSentences = sentences.length;

  // Beregner gjennomsnittlig antall ord per setning
  const wordsPerSentence = numWords / numSentences;

  // Beregner gjennomsnittlig antall stavelser per ord
  let syllablesPerWord = 0;
  words.forEach((word) => {
    syllablesPerWord += countSyllables(word);
  });
  const syllablesPerWordAvg = syllablesPerWord / numWords;

  // Beregner Flesch-Kincaid-vurderingen
  const gradeLevel =
    0.39 * wordsPerSentence + 11.8 * syllablesPerWordAvg - 15.59;

  return gradeLevel;
}

// Funksjon for å telle antall stavelser i et ord
function countSyllables(word) {
  word = word.toLowerCase();
  if (word.length <= 3) {
    return 1;
  }
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const match = word.match(/[aeiouy]{1,2}/g);
  return match ? match.length : 1;
}
