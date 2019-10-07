describe("Sample text set", () => {
    let formService;

    beforeEach(() => {
        formService = new FormService();
    });

    it('testValidateNameCorrect', function() {
        const a = formService.validateName('Roberto');
        expect(a).toBe(true);
    });

    it('testValidateNameIncorrect', function() {
        const a = formService.validateName('Ro');
        expect(a).toBe(false);
    });

    it('testValidateLastNameCorrect', function() {
        const a = formService.validateLastName('Roberto');
        expect(a).toBe(true);
    });

    it('testValidateLastNameIncorrect', function() {
        const a = formService.validateLastName('Ro');
        expect(a).toBe(false);
    });

    it('testValidateEmailCorrect', function() {
        const a = formService.validateEmail('roberto@gmail.com');
        expect(a).toBe(true);
    });

    it('testValidateEmailIncorrect', function() {
        const a = formService.validateEmail('r@ej.z');
        expect(a).toBe(false);
    });

    // Adress is a common validation
    it('testValidateAdressCorrect', function() {
        const a = formService.validateAddress('Calle Politecnico');
        expect(a).toBe(true);
    });

    it('testValidateAddressIncorrect', function() {
        const a = formService.validateAddress('123');
        expect(a).toBe(false);
    });

    // Testing Spain validations first
    it('testValidateBirthDateSpainCorrect', function() {
        const a = formService.validateBirthDate('08/08/2000', 'es');
        expect(a).toBe(true);
    });

    it('testValidateBirthDateSpainIncorrect', function() {
        const a = formService.validateBirthDate('08/08/74', 'es');
        expect(a).toBe(false);
    });
    
    it('testValidateZipCodeSpainCorrect', function() {
        const a = formService.validateZipCode('29003', 'es');
        expect(a).toBe(true);
    });

    it('testValidateZipCodeSpainIncorrect', function() {
        const a = formService.validateZipCode('290030', 'es');
        expect(a).toBe(false);
    });

    it('testValidateHomePhoneSpainCorrect', function() {
        const a = formService.validateHomePhone('+34952451247', 'es');
        expect(a).toBe(true);
    });

    it('testValidateHomePhoneSpainIncorrect', function() {
        const a = formService.validateHomePhone('9524512474545454', 'es');
        expect(a).toBe(false);
    });

    it('testValidateMobilePhoneSpainCorrect', function() {
        const a = formService.validateMobilePhone('632145789', 'es');
        expect(a).toBe(true);
    });

    it('testValidateMobilePhoneSpainIncorrect', function() {
        const a = formService.validateMobilePhone('852147898', 'es');
        expect(a).toBe(false);
    });


    // Testing USA validations 
    it('testValidateBirthDateUSACorrect', function() {
        const a = formService.validateBirthDate('02/29/2000', 'en');
        expect(a).toBe(true);
    });

    it('testValidateBirthDateUSAIncorrect', function() {
        const a = formService.validateBirthDate('08/32/2019', 'en');
        expect(a).toBe(false);
    });
    
    it('testValidateZipCodeUSACorrect', function() {
        const a = formService.validateZipCode('99501', 'en');
        expect(a).toBe(true);
    });

    it('testValidateZipCodeUSAIncorrect', function() {
        const a = formService.validateZipCode('290030', 'en');
        expect(a).toBe(false);
    });

    it('testValidateHomePhoneUSACorrect', function() {
        const a = formService.validateHomePhone('+2071838750', 'en');
        expect(a).toBe(true);
    });

    it('testValidateHomePhoneUSAIncorrect', function() {
        const a = formService.validateHomePhone('9524512474545454', 'en');
        expect(a).toBe(false);
    });

    it('testValidateMobilePhoneUSACorrect', function() {
        const a = formService.validateMobilePhone('+15555555555', 'en');
        expect(a).toBe(true);
    });

    it('testValidateMobilePhoneUSAIncorrect', function() {
        const a = formService.validateMobilePhone('+155555555557777', 'en');
        expect(a).toBe(false);
    });
});