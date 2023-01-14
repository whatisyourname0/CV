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
    case "ko":
      return (
        <Paragraph>
          안녕하세요! 저의 페이지에 방문해주셔서 감사합니다. 이 웹사이트는
          전체적으로 영어로 작성되어 있지만, 적어도 한국인에게 자기소개만큼은
          한국어로 작성해야 맞는것 같아 한국어로 작성합니다.
          <Break />
          반갑습니다! 제 이름은 이준호이고, 현재 웹 및 프론트엔드 분야 개발을
          지망하고 있지만, 프론트엔드를 넘어 끝부터 끝까지 설계가 가능하도록
          저의 커리어 목표를 세웠습니다.
          <Break />
          현재 연세대학교 전기전자공학과에 재학중이며, 언어에 구애받지 않고 여러
          다양한 프로젝트 및 프로그래밍 과제, 웹사이트들을 제작하였습니다.
          <Break />
          저는 제 자신에게 끊임없이 동기를 부여하며, 관심있는 분야는 어떠한
          방법으로든 제 자신의 한계를 확장하고, 자신 만의 기술과 능력, 노하우를
          키워나갔고, 키워나가고 있습니다.
          <Break />
          웹 및 프론트엔드 분야는 최신 기술에 굉장히 민감한 분야라고 알고
          있습니다. 저의 끊임없는 동기부여는 이 분야의 성격과 굉장히 잘 맞고,
          또한 앞으로도 잘 맞을것이라 생각됩니다.
          <Break />
          저는 저와 고객의 일에 한해 항상 최선을 다하며, 저를 찾아주신 분께
          최선의 가치를 제공해 드릴 수 있으리라 생각됩니다. 문의사항 혹은 협업
          관련 요청이 있다면 언제 어디서든 저에게 연락을 주시면 도와드리도록
          하겠습니다. <br />
          <Break />
          감사합니다 :)
        </Paragraph>
      );
    default:
      return (
        <Paragraph>
          Hello, and welcome to my personal website! Thank your for visiting
          here, and this introduction is for non-koreans.
          <Break />
          My name is Junho Lee, and June in short. I live in Seoul, Korea, and
          undergraduate in Yonsei University. My career goal is to be an expert
          in web programming & front-end programming, but my ultimate goal is to
          be an end-to-end programmer.
          <Break />
          My major is EEE, and I did my studies and projects in various
          languages. You can check out some skills that I have in
          &apos;skills&apos; tab.
          <Break />
          <br />I am truly self-motivated, and I expanded and will expand my
          limits in every way i can take, and possibilities that I can enjoy and
          immerse.
          <Break />
          Web development & front-end engineering is sensitive to the
          state-of-the-art technologies, and my true passion of self-motivation
          fits with the atmosphere, and leads at the front of the field.
          <Break />
          I do my best for myself and my clients, and I can provide the best for
          those who visit me. Any contact or inquiries related to collaboration
          is welcomed, and please contact me anytime, anywhere and I will help
          you.
          <Break />
          Thank you :)
        </Paragraph>
      );
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
