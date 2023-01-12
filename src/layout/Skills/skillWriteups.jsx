function designWriteup() {
  return (
    <>
      What users see and experience is important as the product itself. <br />
      I ask myself what and how users really focus on and interact with. <br />
      I prefer drawing my imagination using paper and pencil, <br />
      but conside utilizing modern prototyping tools such as Figma <br />
      for better UI / UX. <br />
    </>
  );
}

function frontEndWriteup() {
  return (
    <>
      'Design as a service' needs more than the design itself since <br />
      frontend of the service defines most of user experience and interface.{" "}
      <br />
      Modern frontend interaction and optimization is crucial nowadays, <br />
      implying modern frontend code is something more than layout and art.{" "}
      <br />
      My biggest interest lies in optimization & interaction with the code and
      the user. <br />
    </>
  );
}

function backendWriteup() {
  return (
    <>
      Backend of the service is something magical to the user, because <br />
      all of the talks between the client and the server work under the hood.{" "}
      <br />
      Every communication should be held in integrated way, <br />
      and each communication should have their own responsibility. <br />
    </>
  );
}

function testWriteup() {
  return (
    <>
      Managing and continuous service is needed as making and deploying the
      service. <br />
      All parts / modules / microservices should act as a whole, <br />
      and testing whether they work and they work in harmony. <br />
    </>
  );
}

const skillWriteups = {
  designWriteup,
  frontEndWriteup,
  backendWriteup,
  testWriteup,
};

export default skillWriteups;
