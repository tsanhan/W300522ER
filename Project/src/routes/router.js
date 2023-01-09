import { ABOUT_PAGE, ERROR_404_PAGE, HOME_PAGE,CREATE_PIC_PAGE,LOGIN_PAGE, SIGNUP_PAGE } from "../services/domService.js";
import PAGES from "../models/pageModel.js";

const pageToDOMMap = [{
    page: PAGES.HOME,
    dom: HOME_PAGE
}, {
    page: PAGES.ABOUT,
    dom: ABOUT_PAGE
}, {
    page: PAGES.CREATE_PIC,
    dom: CREATE_PIC_PAGE
}, {
    page: PAGES.LOGIN,
    dom: LOGIN_PAGE
}, {
    page: PAGES.ERROR_404,
    dom: ERROR_404_PAGE
}, {
    page: PAGES.SIGN_UP,
    dom: SIGNUP_PAGE
}]
export const onChangePage = page  => {
    pageToDOMMap.forEach(pageMap => pageMap.dom.className = 'd-none'); // hide all pages
    
    const pageMap = pageToDOMMap.find(pageMap => pageMap.page === page); // find the page that was clicked

    if(pageMap) return pageMap.dom.className = 'd-block'; // show the page that was clicked
    
    // show 404 page if we got this far (the page was not found, so the 'return' statement was not executed)
    ERROR_404_PAGE.className = 'd-block';
}








