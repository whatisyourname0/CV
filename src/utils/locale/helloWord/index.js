function helloWord(locale) {
  switch (locale) {
    case "ko":
      return "반갑습니다!";
    case "fr" || "fr-BE" || "fr-CA" || "fr-CH" || "fr-LU":
      return "Bonjour!";
    case "es":
      return "Hola!";
    case "cn" || "hk" || "mo":
      return "Ciao!";
    case "ru":
      return "Zdravstvuyte!";
    case "it":
      return "Salve!";
    case "jp":
      return "Konnichiwa!";
    case "de":
      return "Guten Tag!";
    case "pt":
      return "Olá!";
    default:
      return "Hi!";
  }
}

export default helloWord;
