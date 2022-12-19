import { ABOUT_PAGE, HOME_PAGE } from "../services/domService.js";
import PAGES from "../models/pageModel.js";



export const onChangePage = page  => {
    HOME_PAGE.className = 'd-none'
    ABOUT_PAGE.className = 'd-none'

    switch (page) {
        case PAGES.HOME:
            HOME_PAGE.className = 'd-block'
            break;
        case PAGES.ABOUT:
            ABOUT_PAGE.className = 'd-block'
            break;
    }
}
