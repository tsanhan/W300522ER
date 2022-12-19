import { ABOUT_PAGE_LINK, HOME_PAGE_LINK } from "./services/domService.js";
import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";


//#region האזנה לאירועים
HOME_PAGE_LINK.addEventListener('click', () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener('click', () => onChangePage(PAGES.ABOUT));

//#endregion