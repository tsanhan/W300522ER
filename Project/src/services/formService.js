const useForm = () => {
    window.data = {};
    let errors = {};


    const validateTerm = (field, validation) => {
        let errors = [];
        const {
            regex = null,
            min = 0,
            max = 1_000_000_000_000,
            upperCase = null,
            lowerCase = null,
        } = validation;

        const { value: input } = field;

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

    
}

export default useForm;

