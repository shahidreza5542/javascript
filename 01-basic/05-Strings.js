const Name = "shahid"
const repoCount = 50

// console.log(Name + repoCount);
// console.log(`hello my name is ${Name} and my repo count is ${repoCount}`);

const gamename = new String('shahid')
// console.log(gamename[0]);
// console.log(typeof(gamename)); // output object
// console.log(gamename.length);
// console.log(gamename.charAt(3));

const newstring = gamename.substring(0, 4)
console.log(newstring);

const anotherString = gamename.slice(-5, 4)
console.log(anotherString);

const newstringOne = "    shahid.   "

console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://shahid.com/shahid%20 reza"

console.log(url.replaceAll(' ', '-'));
