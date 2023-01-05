import { handleSubmitNewPic } from "../app.js";
import PAGES from "../models/pageModel.js";
import Picture from "../models/PictureModel.js";
import { onChangePage } from "../routes/router.js";
import { ALT_CREATE_PIC_ERROR, ALT_CREATE_PIC_FIELD, CANCEL_BTN, CREDIT_CREATE_PIC_ERROR, CREDIT_CREATE_PIC_FIELD, PRICE_CREATE_PIC_ERROR, PRICE_CREATE_PIC_FIELD, SUBMIT_CREATE_PIC_BTN, URL_CREATE_PIC_ERROR, URL_CREATE_PIC_FIELD } from "./domService.js";
import useForm from "./formService.js";

export const setCounter = (array, counter, controller = "") => {
    let newCounter;
    if (controller === "next") {
        newCounter = counter < array.length - 1 ? counter + 1 : 0;
        return newCounter;
    }

    if (controller === "prev") {
        newCounter = counter > 0 ? counter - 1 : array.length - 1;
        return newCounter;
    }

    return 0;
};


export const handleCreatePic = () => {
    // הגענו לדף
    onChangePage(PAGES.CREATE_PIC);

    // להרשם לאירועי הזנת המידע בשדות
    createPicFromFieldsListeners();

    const cancelEH = () => {
        const conf = confirm('Are you sure you want to cancel?')
        if (conf) handleCancelCreatePic()
    }
    
    CANCEL_BTN.removeEventListener('click', cancelEH);
    CANCEL_BTN.addEventListener('click', cancelEH);

    SUBMIT_CREATE_PIC_BTN.removeEventListener('click', handleSubmitNewPic);
    SUBMIT_CREATE_PIC_BTN.addEventListener('click', handleSubmitNewPic);
};

export const createPicFromFieldsListeners = () => {
    const { onChangeInputField } = useForm();
    const schema = ['url', 'price'];
    URL_CREATE_PIC_FIELD.addEventListener('input', e => {
        const validation = {
            regex: /^http[s]?\:\/\/.{1,}.(jpg|png|jpeg)$/g,
            min: 10,
            lowerCase: true
        };

        const element = {
            input: e.target,
            errorSpan: URL_CREATE_PIC_ERROR,
            validation
        }

        onChangeInputField(schema, element, SUBMIT_CREATE_PIC_BTN);
    });


    PRICE_CREATE_PIC_FIELD.addEventListener('input', e => {
        const validation = {
            regex: /^\d+$/,
            numMin: 100
        };

        const element = {
            input: e.target,
            errorSpan: PRICE_CREATE_PIC_ERROR,
            validation
        };

        onChangeInputField(schema, element, SUBMIT_CREATE_PIC_BTN);
    });
};

export const handleCancelCreatePic = () => {
    const { onClearFormFields } = useForm();
    const fields = [URL_CREATE_PIC_FIELD, ALT_CREATE_PIC_FIELD, CREDIT_CREATE_PIC_FIELD, PRICE_CREATE_PIC_FIELD];
    const errorSpans = [URL_CREATE_PIC_ERROR, ALT_CREATE_PIC_ERROR, CREDIT_CREATE_PIC_ERROR, PRICE_CREATE_PIC_ERROR];
    onClearFormFields(SUBMIT_CREATE_PIC_BTN, fields, errorSpans);
    onChangePage(PAGES.HOME);
};

export const onCreateNewPic = pictures => {
    try {
        let newArray = [...pictures];
        const pic = new Picture({
            url: URL_CREATE_PIC_FIELD.value,
            alt: ALT_CREATE_PIC_FIELD.value,
            credit: CREDIT_CREATE_PIC_FIELD.value,
            price: PRICE_CREATE_PIC_FIELD.value
        }, newArray);
        newArray.push(pic);

        return newArray;
    } catch (error) {
        console.log(error.message);
    }
};