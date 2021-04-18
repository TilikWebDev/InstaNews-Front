  
const customFieldLevelValidation = (value, validations) => {
    for (let validation of validations) {
        const result = validation(value);

        if (result)
            return result;
    }

    return undefined;
}

const required = (value) => {
    return (!value) ? 'Field is required' : undefined; 
}

const maxLength = (length) => {
    return (value) => {
        return (value.length > length) ? `Max length is ${length}` : undefined;
    }
}

const minLength = (length) => {
    return (value) => {
        return (value.length < length) ? `Min length is ${length}` : undefined;
    }
}

const phone = (value) => {
    let search = value.match(/^[\+]{0,1}380([0-9]{9})$/);
    return (!search) ? 'Wrong phone number' : undefined;
}

const email = (value) => {
    let search = value.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);
    return (!search) ? 'Wrong email' : undefined;
}

const photoSize = async (image) => {
    let size = await new Promise(resolve => {
        let file, img;
        
        if ((file = image)) {
            img = new Image();

            img.onload = function () {
                resolve({
                    width: this.width,
                    height: this.height
                })              
            };

            img.src = window.URL.createObjectURL(file);
        }  
    });

    return (size.width < 70 || size.height < 70) ? 'Minimum size of photo 70x70px.' : undefined;
}

const fileFormat = (file) => {
    return ( /\.(jpe?g)$/i.test(file.name) === false ) ? 'The photo format must be jpeg/jpg type.' : undefined;
}

const fileWeight = (size_mb) => {
    return (file) => {
        let file_size = file.size / 1000000;
        return (file_size > size_mb) ? `The photo size must not be greater than ${size_mb} Mb` : undefined;
    }
}

// CUSTOM VALIDATORS

export const validateName = (value) => customFieldLevelValidation(value, [required, minLength(2), maxLength(60)]);
export const validateEmail = (value) => customFieldLevelValidation(value, [required, email, minLength(2), maxLength(100)]);
export const validatePhone = (value) => customFieldLevelValidation(value, [required, phone]);
export const validatePhoto = (value) => customFieldLevelValidation(value, [required, fileFormat, fileWeight(5), photoSize]);
export const validateInput = (value) => customFieldLevelValidation(value, [required]);