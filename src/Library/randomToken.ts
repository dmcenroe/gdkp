const words: Array<string> = [];

words.push("bard");
words.push("cleric");
words.push("druid");
words.push("dungeon");
words.push("experience");
words.push("aggro");
words.push("amiable");
words.push("buff");
words.push("dubious");
words.push("kindly");
words.push("nerf");
words.push("buff");
words.push("train");
words.push("zone");
words.push("warmly");
words.push("scowling");
words.push("mana");
words.push("luclin");
words.push("velious");
words.push("kunark");
words.push("rivervale");
words.push("omens");
words.push("gates");
words.push("darkhollow");
words.push("akanon");
words.push("faydark");
words.push("paladin");
words.push("epic");

const NumberOfWords = words.length;

const numbers = "0123456789";

const generateRandomNumber = (length: number) => {
  let randomString = "";

  for (let i = 0; i < length; i++) {
    randomString += numbers[Math.floor(Math.random() * numbers.length)];
  }

  return randomString;
};

function PickRandomWord() {
  const num: string = generateRandomNumber(2);
  const word: string = words[
    Math.ceil(Math.random() * NumberOfWords)
  ] as string;

  const token = word + num;

  return token;
}

export default PickRandomWord;
