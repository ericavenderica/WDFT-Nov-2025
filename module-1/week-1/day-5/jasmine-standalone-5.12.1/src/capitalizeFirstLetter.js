function capitalizeFirstLetter(word) {
  if (typeof word === "number" || word === undefined) {
    return null;
  }
  return word[0].toUpperCase() + word.slice(1);
}
