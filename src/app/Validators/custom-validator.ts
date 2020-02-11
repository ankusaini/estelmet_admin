import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {

    // min length
    public static minLength(min: number): ValidatorFn | any {
        return (control: AbstractControl[]) => {
            if (!(control instanceof FormArray)) return;
            return control.length < min ? { minLength: true } : null;
        }
    }

    // noWhitespaceValidator
    public static noWhitespaceValidator(control: AbstractControl): ValidationErrors {
        const valueNoWhiteSpace = control.value?control.value.trim():null;
        const isValid = valueNoWhiteSpace === control.value;
       // return isValid ? null : { whitespace: true };
       const message = {
        'noWhitespaceValidator': {
            'message': 'No whiltespaces are allowed'
        }
    };
    return isValid ? null : message;
    }

    //allow A-Z,a-z,0-9 - ( ) .
    static alphanumericValidate(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9-().]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'alphanumericValidateAndSpecialCharactersForSampleLabelName': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( )'
            }
        };
        return isValid ? null : message;
    }

    static latitudeAndLongitudeMatcher(control: AbstractControl): ValidationErrors {
        var reg = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'latitudeAndLongitudeMatcher': {
                'message': 'Enter valid value'
            }
        };
        return isValid ? null : message;
    }



    static testCodeValidate(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'testCodeValidation': {
                'message': 'This field only accepts alphanumeric characters.'
            }
        };
        return isValid ? null : message;
    }

    static cardholderNameValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9 ]*$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'testCodeValidation': {
                'message': 'This field only accepts alphanumeric characters.'
            }
        };
        return isValid ? null : message;
    }

    //allow A-Z,a-z
    static alphabetValidate(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'alphabetValidate': {
                'message': 'This field only accepts alphabet characters .'
            }
        };
        return isValid ? null : message;
    }

    static compondValueValidate(control: AbstractControl): ValidationErrors {
        // var reg = /^[0-9]\d*(\.\d+)?$/;
        var reg = /^[0-9]\d*(\.\d+)?$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'compondValueValidate': {
                'message': 'This field only accepts numbers and this symbol:.'
            }
        };
        return isValid ? null : message;
    }

    static startRangeValidation(control: AbstractControl): ValidationErrors {
        //var reg = /^[a-zA-Z0-9]+$/;
        if (!control.value) {
            return null;
        }
        //  var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'startRangeError': {
                'message': 'Start Range Should be less than End Range.' // Will changes the error defined in errors helper.
            }
        };
        return message;
    }


    static normalOrderCompletionTimeValidation(control: AbstractControl): ValidationErrors {
        //var reg = /^[a-zA-Z0-9]+$/;
        if (!control.value) {
            return null;
        }
        //  var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'normalOrderCompletionTimeError': {
                'message': 'Normal Order Completion Days Should be more than or equal to Rush Order Completion Days and Emergency Order Completion Days.' // Will changes the error defined in errors helper.
            }
        };
        return message;
    }

    static endRangeValidation(control: AbstractControl): ValidationErrors {
        //var reg = /^[a-zA-Z0-9]+$/;
        if (!control.value) {
            return null;
        }
        //  var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'endRangeError': {
                'message': 'End Range should be greater than Start Range' // Will changes the error defined in errors helper.
            }
        };
        return message;
    }

    static startRangeOverlapValidation(control: AbstractControl): ValidationErrors {
        //var reg = /^[a-zA-Z0-9]+$/;
        if (!control.value) {
            return null;
        }
        //  var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'startRangeOverlap': true
        };
        return message;
    }

    static endRangeOverlapValidation(control: AbstractControl): ValidationErrors {
        //var reg = /^[a-zA-Z0-9]+$/;
        if (!control.value) {
            return null;
        }
        //  var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'endRangeOverlap': true
        };
        return message;
    }

    static integer(control: AbstractControl): ValidationErrors {
        const num = Number(control.value);
        var reg = /^[0-9]\d*$/;
        var isValid = !isNaN(num) && reg.test(num.toString());
        const message = {
            'integer': {
                'message': 'Should be valid integer.' // Will changes the error defined in errors helper.
            }
        };
        return isValid ? null : message;
    }


    static numberUpdateDurationValidation(control: AbstractControl): ValidationErrors {
        const num = Number(control.value);
        var reg = /^[1-9]\d*$/;
        var isValid = !isNaN(num) && reg.test(num.toString());
        const message = {
            'numericInstrumentUpdateFrequency': {
                'message': 'Number should be in range of 1-9.' // Will changes the error defined in errors helper.
            }
        };
        return isValid ? null : message;
    }

    //allow A-Z,a-z,0-9 _ - ( ) .
    static alphanumericSpecialCharacterValidate(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9-_(). ]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'alphanumericSpecialCharacterValidate': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static alphanumericAndProductSymbolValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9-_@.]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'alphanumericAndProductSymbol': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static alphabetAndNameValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z-_. ]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'alphabetAndNameValidation': {
                'message': 'This field only accepts letters and the following symbols: - .'
            }
        };
        return isValid ? null : message;
    }

    static alphabetsAndTestSymbolValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z-. ]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'alphabetsAndTestSymbol': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static contactNumberValidation(control: AbstractControl): ValidationErrors {
        //var reg = /^[0-9-,()]{10,13}$/;
        //var reg=/^\d{10,13}$/;
        var tenDigitRegex=/^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
        var thirteenDigitRegex=/^[0][1-9]\d{12}$|^[1-9]\d{12}$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && (tenDigitRegex.test(control.value.toString()) || thirteenDigitRegex.test(control.value.toString()));
        const message = {
            'contactNumberValidation': {
                'message': 'This field only accepts 10 or 13 digits numbers.'
            }
        };
        return isValid ? null : message;
    }


    static pinCodeValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[0-9-]{6,6}$/;
        //var reg=/^[0][1-9]\d{5}$|^[1-9]\d{5}$/;
        if (!control.value) {
            return null;

        }
        var isValid = control.value && (reg.test(control.value.toString()));
        const message = {
            'pinCodeValidation': {
                'message': 'This field only accepts 6 digits numbers.'
            }
        };
        return isValid ? null : message;
    }

    static passwordValidation(control: AbstractControl): ValidationErrors {
        var reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,15}/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'passwordValidation': {
                'message': ' Password Must Contain 5-20 characters and must have  one uppercase,one lowercase,one number and special characters !'
            }
        };
        return isValid ? null : message;
    }


    static emailValidation(control: AbstractControl): ValidationErrors {
        var reg = /^.+@.+\..{2,5}$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'emailValidation': {
                'message': 'Please enter your email in this format: yourname@email.com'
            }
        };
        return isValid ? null : message;
    }
    static emailCharacterValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9-_@.]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'emailCharacterValidation': {
                'message': 'This field only accepts letters, numbers and the following symbols: - . _ @'
            }
        };
        return isValid ? null : message;
    }

    static addressValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9-_@. ()&,$!':;/]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'addressValidation': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }


    static alphabetAndNumberValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'alphabetAndNumberValidation': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static required(control: AbstractControl): ValidationErrors {
        var reg = /^(?!\s*$)/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'required': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static oneUppercaseCharValidation(control: AbstractControl): ValidationErrors {
        var reg = /(?=[A-Z]+)/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'oneUppercaseChar': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static oneLowercaseCharValidation(control: AbstractControl): ValidationErrors {
        var reg = /(?=[a-z]+)/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'oneLowercaseChar': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static phoneNumberValidation(control: AbstractControl): ValidationErrors {
        var reg = /(?=[0-9]+)/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'phoneNumberValidation': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static passwordCharactersValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z0-9-.]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'passwordCharactersValidation': {
                'message': 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }

    static alphabetAndNameValidationAcceptEnter(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z-_. ]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'alphabetAndNameValidationAcceptEnter': {
                'message': 'This field only accepts letters and the following symbols: - .'
            }
        };
        return isValid ? null : message;
    }
    static ccvValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[0-9]{3}$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'ccvValidation': {
                'message': 'Please enter a valid ccv number.It must be 3 digit number.'
            }
        };
        return isValid ? null : message;
    }

    static userNameValidation(control: AbstractControl): ValidationErrors {
        var reg = /^[a-zA-Z-. ]+$/;
        if (!control.value) {
            return null;
        }
        var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'userNameMsg': {
                'message': 'The username does not match our records.'
            }
        };
        return isValid ? null : message;
    }

    // static passwordValidation(control: AbstractControl): ValidationErrors {
    //     var reg = /^[a-zA-Z-. ]+$/;
    //     if (!control.value) {
    //         return null;
    //     }
    //     var isValid = control.value && reg.test(control.value.toString());
    //     const message = {
    //         'passwordMsg': {
    //             'message': 'The password does not match our records.'
    //         }
    //     };
    //     return isValid ? null : message;
    // }

    static duplicateName(control: AbstractControl): ValidationErrors {
        //var reg = /^[a-zA-Z0-9]+$/;
        if (!control.value) {
            return null;
        }
        //  var isValid = control.value && reg.test(control.value.toString());
        const message = {
            'duplicateName': true
        };
        return message;
    }
}
