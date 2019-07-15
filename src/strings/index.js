var str = 'Life is too short to be waisting it.';


const split = (str, delim) => {
  // strings.split
return str.split(delim)

}

const pairs = (str) => {
  // strings.pairs
  const arr = str.lentgh('');
  arr.pairs();
  return arr.contain('');
}

// test('Break a string into pairs', () => {
//   const pairs = strings.pairs('abcdefghijklmnop')
//   expect(pairs.length).toEqual(8)
//   expect(pairs).toContain('gh')
//   expect(pairs).toEqual(['ab', 'cd', 'ef', 'gh', 'ij', 'kl', 'mn', 'op'])
// })




const reverse = (str) => {
  // strings.reverse
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
  }

module.exports = {
  split,
  pairs,
  reverse
}