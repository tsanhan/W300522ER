import {
    ABOUT_PAGE_LINK,
    LINK_HOME_PAGE,
    HOME_PAGE_LINK,
    CREATE_PIC_PAGE_LINK,
    LOGIN_PAGE_LINK,
    SLIDER_PREV_BTN,
    SLIDER_NEXT_BTN,

    SIGNUP_PAGE_LINK,
    TABLE_ICON,
    SLIDER_ICON,
    LINK_TO_CREATE_PIC_PAGE
} from "./services/domService.js";


import PAGES from "./models/pageModel.js";


import { onChangeDisplayMode, onChangePage, setNavDisplay } from "./routes/router.js";
import { renderSlider as render } from "./services/renderSlider.js";
import { handleCancelCreatePic, handleCreatePic, onCreateNewPic, setCounter } from "./services/picService.js";

import initialData from "./initialData/initialData.js";
import { handleSignup, onSignupNewUser, handleCancelSignup, handleLogin } from "./services/userService.js";
import DISPLAY from "./models/displayModel.js";

//#region הגדרת משתנים גלובליים
let { users } = initialData();

let counter = 0;
let pictures = [];

//#endregion
setNavDisplay();


//#region slider logic
const onChangeSliderPic = controller => {
    counter = setCounter(pictures, counter, controller);
    render(pictures, counter);
}

//#endregion

//#region האזנה לאירועים
// ניתוב דפים
HOME_PAGE_LINK.addEventListener('click', () => onChangePage(PAGES.HOME));
LINK_TO_CREATE_PIC_PAGE.addEventListener('click',() => handleCreatePic());
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


// בקרי תצוגה
TABLE_ICON.addEventListener('click', () => onChangeDisplayMode(pictures, DISPLAY.TABLE));
SLIDER_ICON.addEventListener('click', () => onChangeDisplayMode(pictures, DISPLAY.SLIDER));

//#endregion


//#region Create Picture
export const handleSubmitNewPic = () => {
    pictures = onCreateNewPic(pictures);
    onChangeDisplayMode(pictures, DISPLAY.SLIDER);
    render(pictures, counter);
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

//#region Change Display Mode


// אתחול הצגה ראשונית
onChangePage(PAGES.HOME);
onChangeDisplayMode(pictures, DISPLAY.SLIDER);
onChangeSliderPic();
render(pictures);