
const useForm = () => {
    window.data = {};
    let errors = {};

    /************* validate term ***************/
    const validateTerm = (field, validation) => {
        let errors = [];
        const {
            regex = null,
            min = 0,
            max = 1_000_000_000_000,
            upperCase = null,
            lowerCase = null,
            numMin = 0,
            numMax = 1_000_000_000_000,
        } = validation;

        const { value: input } = field;


        if (+input < +numMin) {
            errors.push(`The field must be at least ${numMin}`);
        }



        if (+input > +numMax) {
            errors.push(`The field cannot be more then ${numMax}`);
        }




        if (input.length < +min) {
            errors.push(`The field must have at least ${min} characters long`);
        }

        if (input.length > +max) {
            errors.push(`The field cannot contain more then ${max} characters`);
        }

        if (lowerCase) {
            if (!input.match(/[a-z]/g)) {
                errors.push(`The field must contain at least one lowercase letter`);
            }
        }

        if (upperCase) {
            if (!input.match(/[A-Z]/g)) {
                errors.push(`The field must contain at least one uppercase letter`);
            }
        }

        if (regex) {
            if (!input.match(regex)) {
                errors.push(`The field must contain the following regex: ${regex}`);
            }
        }

        if (input.match(/[^A-Za-z0-9א-ת\s!@#$%^*&_/:.-]/g)) {
            errors.push(`you used a forbidden character`);
        }

        return errors.length ? errors : null;
    }

    /************* input validation ***************/
    const onValidateField = (input, errorSpan, validation = {}) => {
        data[input.name] = input.value;
        errorSpan.innerHTML = '';
        const errorsForField = validateTerm(input, validation);
        if (errorsForField) {
            errorsForField.forEach(error => errorSpan.innerHTML += `${error}<br>`);
            errors[input.name] = errorsForField;
            return;
        }
        delete errors[input.name];
    };

    const onCheckErrors = (schema, btn) => {
        const isArrayEmpty = schema.filter(key => !data[key]);
        if (isArrayEmpty.length) return btn.setAttribute('disabled', 'disabled');
        const keys = Object.keys(errors);
        if (keys.length) return btn.setAttribute('disabled', 'disabled');

        btn.removeAttribute('disabled');
        return;
    };

    const onChangeInputField = (schema, element, btn) => {
        const { input, errorSpan, validation } = element;
        onValidateField(input, errorSpan, validation);
        onCheckErrors(schema, btn);
    };

    const onClearFormFields = (btn, fields, errorSpans) => {
        fields.forEach(field => {
            field.removeEventListener('input', onChangeInputField);
            field.value = '';
        });
        errorSpans.forEach(span => span.innerHTML = '');
        btn.setAttribute('disabled', 'disabled');
        errors = {};
        data = {};
    };

    return {
        onCheckErrors,
        onChangeInputField,
        onClearFormFields,
    }
}

export default useForm;

