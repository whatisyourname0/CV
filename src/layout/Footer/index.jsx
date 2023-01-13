import fetchGithubStats from "@/api/fetchGithubStats";
import logo from "@assets/images/logo/logo512Light.png";
import { GoRepoForked } from "@react-icons/all-files/go/GoRepoForked";
import { GoStar } from "@react-icons/all-files/go/GoStar";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Footer() {
  const [githubStats, setGithubStats] = useState({
    stars: "-",
    forks: "-",
  });

  useEffect(() => {
    const getGithubStats = async () => {
      const result = await fetchGithubStats({
        username: "whatisyourname0",
        repo: "personal-website",
      });
      const jsonData = await result.json();

      setGithubStats({
        stars: jsonData.stargazers_count,
        forks: jsonData.forks_count,
      });
    };

    getGithubStats();
  }, []);

  return (
    <Container>
      <AppendixIcon src={logo}></AppendixIcon>
      <ExternalLink
        href="https://github.com/whatisyourname0/personal-website"
        target="_blank"
        rel="noreferrer noopener"
      >
        <StatsWrapper>
          <StarIcon />
          <Stats>{githubStats.stars}</Stats>
          <ForkIcon />
          <Stats>{githubStats.forks}</Stats>
        </StatsWrapper>
      </ExternalLink>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  padding: 20px 0 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #2d2d2d;
`;

const AppendixIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const ExternalLink = styled.a`
  text-decoration: none;
`;

const StatsWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const Stats = styled.p`
  margin: 0 5px 0 3px;
  font-size: 15px;
  font-family: "Open Sans";
  font-weight: 600;

  color: #bbbaba;
`;

const StarIcon = styled(GoStar)`
  color: #bbbaba;
`;

const ForkIcon = styled(GoRepoForked)`
  color: #bbbaba;
`;
