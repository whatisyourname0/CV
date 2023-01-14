function helloWord(locale) {
  switch (locale) {
    case "ko":
      return "반갑습니다!";
    case "fr":
    case "fr-BE":
    case "fr-CA":
    case "fr-CH":
    case "fr-LU":
      return "Bonjour!";
    case "es":
      return "Hola!";
    case "cn" || "hk" || "mo":
      return "Ciao!";
    case "ru":
    case "ru-RU":
      return "Zdravstvuyte!";
    case "it":
      return "Salve!";
    case "jp":
      return "Konnichiwa!";
    case "de":
    case "de-DE":
      return "Guten Tag!";
    case "pt":
      return "Olá!";
    default:
      return "Hi!";
  }
}

export default helloWord;
