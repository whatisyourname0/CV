const { useState, useEffect } = require("react");

const useLocale = (defaultLocale = "en") => {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    setLocale(
      window.navigator.languages && window.navigator.languages.length
        ? navigator.languages[0]
        : navigator.language,
    );
  }, []);

  return locale;
};

export default useLocale;
