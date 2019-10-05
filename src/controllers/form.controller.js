class FormController {
    constructor(_view, _service) {
        this.view = _view;
        this.service = _service;

        this.view.bindName(this.handleName);
        this.view.bindLastName(this.handleLastName);
        this.view.bindEmail(this.handleEmail);
        
        this.view.bindBirthDate(this.handleBirthDate);
        this.view.bindAddress(this.handleAdress);
        this.view.bindZipCode(this.handleZipCode);
        this.view.bindHomePhone(this.handleHomePhone);
        this.view.bindMobilePhone(this.handleMobilePhone);
    }

    setInputStatus = (inputElement, status) => {
        const greenTickElement = this.getGreenTickElement(inputElement);
        if(status) {
            greenTickElement.hidden = false;
            greenTickElement.nextElementSibling.hidden = true;
        } else {
            greenTickElement.hidden = true;
            greenTickElement.nextElementSibling.hidden = false;
        }
    }

    getGreenTickElement = element => element.parentElement.nextElementSibling  


    handleName = () => {
        const status = this.service.validateName(this.view.cacheDom.name.value);
        this.setInputStatus(this.view.cacheDom.name, status);
    }

    handleLastName = () => {
        const status = this.service.validateLastName(this.view.cacheDom.lastName.value);
        this.setInputStatus(this.view.cacheDom.lastName, status);
    }

    handleEmail = () => {
        const status = this.service.validateEmail(this.view.cacheDom.email.value);
        this.setInputStatus(this.view.cacheDom.email, status);
    }


    handleBirthDate = () => {
        const status = this.service.validateBirthDate(this.view.cacheDom.birthDate.value , this.view.cacheDom.country);
        this.setInputStatus(this.view.cacheDom.birthDate, status);
    }

    handleAdress = () => {
        const status = this.service.validateAddress(this.view.cacheDom.address.value);
        this.setInputStatus(this.view.cacheDom.address, status);
    }

    handleZipCode = () => {
        const status = this.service.validateZipCode(this.view.cacheDom.zipCode.value);
        this.setInputStatus(this.view.cacheDom.zipCode, status);
    }

    handleHomePhone = () => {
        const status = this.service.validateHomePhone(this.view.cacheDom.homePhone.value);
        this.setInputStatus(this.view.cacheDom.homePhone, status);
    }

    handleMobilePhone = () => {
        const status = this.service.validaMobilePhone(this.view.cacheDom.mobilePhone.value);
        this.setInputStatus(this.view.cacheDom.mobilePhone, status);
    }
}