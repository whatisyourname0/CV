const fetchGithubStats = ({ username, repo }) => {
  return fetch(`
    https://api.github.com/repos/${username}/${repo}
  `);
};

export default fetchGithubStats;
