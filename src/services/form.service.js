class FormService {
    validateName = string => /^[A-Za-z].{3,128}$/g.test(string);
    validateLastName = string => /^[A-Za-z].{3,256}$/g.test(string);
    validateEmail = string => /^.{2,256}@.{2,25}\.[a-zA-Z]{2,25}$/g.test(string);

    validateBirthDate = (string, country) => country === 'es' ? /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/.test(string) : /((0[13578]|1[02])[\/.]31[\/.](18|19|20)[0-9]{2})|((01|0[3-9]|1[1-2])[\/.](29|30)[\/.](18|19|20)[0-9]{2})|((0[1-9]|1[0-2])[\/.](0[1-9]|1[0-9]|2[0-8])[\/.](18|19|20)[0-9]{2})|((02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))/.test(string);
    validateAddress = string => /^.{6,256}$/.test(string);
    validateZipCode = (string, country) => country === 'es' ? /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(string) : /^\d{5}(-\d{4})?$/g.test(string);
    validateHomePhone = (string, country) => country === 'es' ? /^(\+34|0034|34)?[\s|-|.]?[8|9][\s|-|.]?([0-9][\s|-|.]?){8}$/.test(string) : /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(string);
    validateMobilePhone = (string, country) => country === 'es' ? /^(\+34|0034|34)?[\s|-|.]?[6|7][\s|-|.]?([0-9][\s|-|.]?){8}$/.test(string) : /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(string);    
}