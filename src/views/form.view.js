class FormView {
    bindName = handler => this.cacheDom.name.addEventListener('keyup', handler);
    bindLastName = handler => this.cacheDom.lastName.addEventListener('keyup', handler);
    bindEmail = handler => this.cacheDom.email.addEventListener('keyup', handler);

    bindBirthDate = handler => this.cacheDom.birthDate.addEventListener('keyup', handler);
    bindAddress = handler => this.cacheDom.address.addEventListener('keyup', handler);
    bindZipCode= handler => this.cacheDom.zipCode.addEventListener('keyup', handler);
    bindHomePhone = handler => this.cacheDom.homePhone.addEventListener('keyup', handler);
    bindMobilePhone = handler => this.cacheDom.mobilePhone.addEventListener('keyup', handler);

    findCountry = () => document.getElementsByName('countries').forEach(element => {
        element.addEventListener('click', () => {
            if(element.checked) {
                this.cacheDom.country = element.value;
                this.cacheDom.extraInfo.hidden = false;
            }
        });
    });

    cacheDom = {
        name: document.getElementById('inputName'),
        lastName: document.getElementById('inputLastName'),
        email: document.getElementById('inputEmail'),
        birthDate : document.getElementById('inputBirthDate'),
        address : document.getElementById('inputAddress'),
        zipCode : document.getElementById('inputZipCode'),
        homePhone : document.getElementById('inputHomePhone'),
        mobilePhone : document.getElementById('inputMobilePhone'),
        extraInfo: document.getElementById('extraInfo'),
        country: this.findCountry()
    };
}