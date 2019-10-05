class FormService {

    validateName = string => /^[A-Za-z].{3,128}$/g.test(string);
    validateLastName = string => /^[A-Za-z].{3,256}$/g.test(string);
    validateEmail = string => /^.{1,256}@.{2,25}\.[a-zA-Z]{2,25}$/g.test(string);

    validateBirthDate = (string, country) => /((0[13578]|1[02])[\/.]31[\/.](18|19|20)[0-9]{2})|((01|0[3-9]|1[1-2])[\/.](29|30)[\/.](18|19|20)[0-9]{2})|((0[1-9]|1[0-2])[\/.](0[1-9]|1[0-9]|2[0-8])[\/.](18|19|20)[0-9]{2})|((02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))/.test(string);
    validateAddress = string => /^.{6,256}$/.test(string);
    validateZipCode = (string, country) => string.length >= 3;
    validateHomePhone = (string, country) => string.length >= 3;
    validateMobilePhone = (string, country) => string.length >= 3;
}