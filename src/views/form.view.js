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
            this.cacheDom.country = element.value;
            this.cacheDom.extraInfo.hidden = false;
            this.cleanHiddenInputs();
        });
    });

    cleanHiddenInputs = () => {
        [ ...this.cacheDom.extraInfo.getElementsByTagName('input') ].forEach(element => element.value = '');
        [ ...this.cacheDom.extraInfo.getElementsByTagName('img') ].forEach(element => element.hidden = true);
        this.cacheDom.btnSubmit.disabled = true;
    }

    bindCheckingToInputs = () => {
        [ ...this.cacheDom.form.getElementsByTagName('input') ].forEach(element => element.addEventListener('keyup', () => {
            const total = [ ...this.cacheDom.form.getElementsByTagName('img') ].reduce((accumulator, current) => {
                if (current.src.includes('green-tick') && !current.hidden) {
                    return accumulator + 1;
                }
                return accumulator;
            }, 0);
            console.log(total)
            total == 8 ? this.cacheDom.btnSubmit.disabled = false : this.cacheDom.btnSubmit.disabled = true;
        }))
    }


    cacheDom = {
        form: document.getElementById('formData'),
        btnSubmit: document.getElementById('btnSubmit'),
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