import IconWrapper from "@components/IconWrapper";
import copyToClipboard from "@utils/copyToClipboard";
import styled from "styled-components";

import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { GrFacebook } from "@react-icons/all-files/gr/GrFacebook";
import { RiKakaoTalkFill } from "@react-icons/all-files/ri/RiKakaoTalkFill";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { useSetRecoilState } from "recoil";
import { focusedSectionAtom } from "@store/atoms";

function Contact({ sectionRefs }) {
  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  useEffect(() => {
    if (sectionEntry?.intersectionRatio > 0.9) {
      setFocusedSection(4);
    }
  }, [sectionEntry, setFocusedSection]);

  const handleMailClick = () => {
    copyToClipboard("mynameisjune111@gmail.com");
  };

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Contact: el };
        scrollRef.current = el;
      }}
    >
      <SpanContainer>
        <MainSpan>CALL</MainSpan>
        <MainSpan>ME UP</MainSpan>
      </SpanContainer>
      <VerticalBar />
      <DescContainer>
        <NameSpan>Joon Ho Lee</NameSpan>
        <MailSpan>mynameisjune111@gmail.com</MailSpan>
        <CitySpan>Seoul, South Korea</CitySpan>
        <ExternalLinks>
          <IconWrapper
            link="https://github.com/jennyjunho2"
            icon={<AiFillGithub />}
            toastMessage={"Github"}
          />
          <IconWrapper
            link="https://www.linkedin.com/in/%EC%A4%80%ED%98%B8-%EC%9D%B4-24b836246/"
            icon={<AiFillLinkedin />}
            toastMessage={"LinkedIn"}
          />
          <IconWrapper
            link="https://www.facebook.com/profile.php?id=100014285883414"
            icon={<GrFacebook />}
            toastMessage={"Facebook"}
          />
          <IconWrapper
            link="https://www.instagram.com/maybe2_juck/"
            icon={<AiOutlineInstagram />}
            toastMessage={"Instagram"}
          />
          <IconWrapper
            link={"mailto:mynameisjune111@gmail.com"}
            icon={<FiMail />}
            toastMessage={"Mail Me!"}
            onClick={handleMailClick}
          />
          <IconWrapper
            link={"https://open.kakao.com/o/sEUwg9re"}
            icon={<RiKakaoTalkFill />}
            toastMessage={"Kakao Open Chat"}
          />
        </ExternalLinks>
      </DescContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.section`
  width: 100%;
  height: 245px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2d2d2d;
`;

const SpanContainer = styled.div`
  width: 45%;
  height: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainSpan = styled.span`
  display: inline-block;

  font-size: 100px;
  font-weight: 500;
  color: #ffffff;
`;

const VerticalBar = styled.div`
  width: 0;
  height: calc(100% - (4px));
  border: 2px;
  border-style: solid;
  border-color: #ffffff;
  background-color: #ffffff;
`;

const DescContainer = styled.div`
  width: 45%;
  height: 100%;
  box-sizing: border-box;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

const NameSpan = styled.span`
  display: block;
  padding: 0 10%;
  color: white;

  font-size: 40px;
  font-weight: 400;
`;

const MailSpan = styled.span`
  color: white;
  display: block;
  padding: 0 10%;

  font-size: 20px;
  font-weight: 300;
`;

const CitySpan = styled.span`
  display: block;
  padding: 0 10%;
  color: white;

  font-size: 15px;
  font-weight: 300;
`;

const ExternalLinks = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;
