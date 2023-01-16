import styled from "styled-components";

function Break() {
  return (
    <>
      <br /> <br />
    </>
  );
}

function Introduction({ locale }) {
  switch (locale) {
    default:
      return (
        <Paragraph>
          안녕하세요, <Strong>이준호</Strong>입니다.
          <Break />
          <Strong>연세대학교 전기전자공학과</Strong>
          에 재학 중이고, 언어 및 프레임워크에 상관 없이 다양한 프로젝트 및
          웹사이트를 제작하였습니다.
          <Break />
          현재 <Strong>프론트엔드 / 웹</Strong> 분야 개발을 지망하며, 단순
          프론트엔드 뿐만 아니라 조금 더 다양하고 유저 친화적인 설계를 하는 것이
          목표입니다.
          <Break />
          {/* 자신에게 끊임없이 동기를 부여하며, 관심있는 분야는 어떠한
          방법으로든 제 자신의 한계를 확장하고, 자신 만의 기술과 능력, 노하우를
          키워나갔고, 키워나가고 있습니다.
          <Break /> */}
          웹 및 프론트엔드 분야는 최신 기술에 굉장히 민감한 분야라고
          생각합니다.&nbsp;
          <Strong>빠른 적응력과 높은 학습력</Strong> 덕분에 트렌드를 이끌고,
          어떠한 개발 문화에도 적응할 수 있습니다.
          <Break />
          {/* 저는 저와 고객의 일에 한해 항상 최선을 다하며, 저를 찾아주신 분께
          최선의 가치를 제공해 드릴 수 있으리라 생각됩니다. 문의사항 혹은 협업
          관련 요청이 있다면 언제 어디서든 저에게 연락을 주시면 도와드리도록
          하겠습니다. <br />
          <Break /> */}
          감사합니다.
        </Paragraph>
      );
    // default:
    //   return (
    //     <Paragraph>
    //       Hello, and welcome to my personal website! Thank your for visiting
    //       here.
    //       <Break />
    //       My name is Junho Lee. I live in Seoul, Korea, and undergraduate in
    //       Yonsei University. My career goal is to be an expert in web
    //       programming & front-end programming, but my ultimate goal is to be an
    //       end-to-end programmer.
    //       <Break />
    //       My major is EEE, and I did my studies and projects in various
    //       languages. You can check out some skills that I have in
    //       &apos;skills&apos; tab.
    //       <Break />
    //       <br />I am truly self-motivated, and I expanded and will expand my
    //       limits in every way i can take, and possibilities that I can enjoy and
    //       immerse.
    //       <Break />
    //       Web development & front-end engineering is sensitive to the
    //       state-of-the-art technologies, and my true passion of self-motivation
    //       fits with the atmosphere, and leads at the front of the field.
    //       <Break />
    //       I do my best for myself and my clients, and I can provide the best for
    //       those who visit me. Any contact or inquiries related to collaboration
    //       is welcomed, and please contact me anytime, anywhere and I will help
    //       you.
    //       <Break />
    //       Thank you :)
    //     </Paragraph>
    //   );
  }
}

export default Introduction;

const Paragraph = styled.p`
  display: block;

  line-height: 1.5;
  line-break: auto;

  font-size: 2.5vw;
  font-family: "Neue Montreal";
  font-weight: 300;
`;

const Strong = styled.strong`
  font-weight: 600;
`;
