const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const generateRandomSlug = (length: number) => {
  let randomString = "";

  for (let i = 0; i < length; i++) {
    randomString += characters[Math.floor(Math.random() * characters.length)];
  }

  return randomString;
};

export default generateRandomSlug;
