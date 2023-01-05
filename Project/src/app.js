import {
    ABOUT_PAGE_LINK,
    LINK_HOME_PAGE,
    HOME_PAGE_LINK,
    CREATE_PIC_PAGE_LINK,
    LOGIN_PAGE_LINK,
    SLIDER_PREV_BTN,
    SLIDER_NEXT_BTN,

    URL_CREATE_PIC_FIELD,
    URL_CREATE_PIC_ERROR,
    SUBMIT_CREATE_PIC_BTN,
    CANCEL_BTN,
    ALT_CREATE_PIC_FIELD,
    CREDIT_CREATE_PIC_FIELD,
    PRICE_CREATE_PIC_FIELD,
    PRICE_CREATE_PIC_ERROR
} from "./services/domService.js";

import Picture from "./models/PictureModel.js";
import useForm from "./services/formService.js";

import PAGES from "./models/pageModel.js";
import User from "./models/UserModel.js";


import { onChangePage } from "./routes/router.js";
import { renderSlider as render } from "./services/renderSlider.js";
import { setCounter } from "./services/picService.js";

import initialData from "./initialData/initialData.js";

//#region הגדרת משתנים גלובליים
let { pictures, users } = initialData();
console.log(pictures);
console.log(users);

let counter = 0;


//#endregion

// אתחול הצגה ראשונית
render(pictures);


//#region slider logic
const onChangeSliderPic = controller => {
    counter = setCounter(pictures, counter, controller);
    render(pictures, counter);
}


//#endregion

//#region האזנה לאירועים
// ניתוב דפים
HOME_PAGE_LINK.addEventListener('click', () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener('click', () => onChangePage(PAGES.ABOUT));
CREATE_PIC_PAGE_LINK.addEventListener('click', () => handleCreatePic());
LOGIN_PAGE_LINK.addEventListener('click', () => onChangePage(PAGES.LOGIN));
LINK_HOME_PAGE.addEventListener('click', () => onChangePage(PAGES.HOME));

// מצגת תמונות
SLIDER_PREV_BTN.addEventListener('click', () => onChangeSliderPic('prev'));
SLIDER_NEXT_BTN.addEventListener('click', () => onChangeSliderPic('next'));

//#endregion


//#region Create Picture

export const handleCreatePic = () => {
    // הגענו לדף
    onChangePage(PAGES.CREATE_PIC);

    // להרשם לאירועי הזנת המידע בשדות
    createPicFromFieldsListeners();

    CANCEL_BTN.addEventListener('click', () => handleCancelCreatePic);
    SUBMIT_CREATE_PIC_BTN.addEventListener('click', () => handleSubmitNewPic);
}

export const createPicFromFieldsListeners = () => {
    const { onChangeInputField } = useForm();
    const schema = ['url','price'];
    URL_CREATE_PIC_FIELD.addEventListener('input', e => {
        const validation = {
            regex: /^http[s]?\:\/\/.{1,}.(jpg|png|jpeg)$/g,
            min: 10,
            lowerCase:true
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


    

}

export const handleCancelCreatePic = () => {
}

export const handleSubmitNewPic = () => {
}
//#endregion