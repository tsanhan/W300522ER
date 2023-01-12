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
    PRICE_CREATE_PIC_ERROR,
    ALT_CREATE_PIC_ERROR,
    CREDIT_CREATE_PIC_ERROR,
    SIGNUP_PAGE_LINK
} from "./services/domService.js";

import Picture from "./models/PictureModel.js";
import useForm from "./services/formService.js";

import PAGES from "./models/pageModel.js";
import User from "./models/UserModel.js";


import { onChangePage, setNavDisplay } from "./routes/router.js";
import { renderSlider as render } from "./services/renderSlider.js";
import { handleCancelCreatePic, handleCreatePic, onCreateNewPic, setCounter } from "./services/picService.js";

import initialData from "./initialData/initialData.js";
import { handleSignup, onSignupNewUser, handleCancelSignup, handleLogin } from "./services/userService.js";

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
LOGIN_PAGE_LINK.addEventListener('click', () => {
    let { users } = initialData();
    handleLogin(users);
} );
SIGNUP_PAGE_LINK.addEventListener('click', handleSignup);
LINK_HOME_PAGE.addEventListener('click', () => onChangePage(PAGES.HOME));

// מצגת תמונות
SLIDER_PREV_BTN.addEventListener('click', () => onChangeSliderPic('prev'));
SLIDER_NEXT_BTN.addEventListener('click', () => onChangeSliderPic('next'));

//#endregion


//#region Create Picture
export const handleSubmitNewPic = () => {
    pictures = onCreateNewPic(pictures);
    console.log(pictures);
    handleCancelCreatePic();
}
//#endregion

//#region Signup new User
export const handleSubmitSignup = () => {
    users = onSignupNewUser(users);
    // clear fields
    handleCancelSignup();
    // return to login page
}
//#endregion


setNavDisplay();