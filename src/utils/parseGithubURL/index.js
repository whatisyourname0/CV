const parseGithubURL = (url) => {
  const newStr = url.replace("https://github.com/", "");

  return newStr;
};

export default parseGithubURL;
