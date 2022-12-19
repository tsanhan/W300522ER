import { ABOUT_PAGE_LINK, HOME_PAGE_LINK } from "./services/domService.js";
import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";


//#region האזנה לאירועים
HOME_PAGE_LINK.addEventListener('click', () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener('click', () => onChangePage(PAGES.ABOUT));

//#endregion


// class assignment:
// 1. I want to be able to bounce between pages: 'home', 'about', 'add pic' and login.
// 2. create another page for 404 (in case the user got into a page that did not match any of the pages)
// 3. create a page for 'add pic' and 'login'
// 4. create links for 'add pic' and 'login'
// 5. add a nice title and subtitle to the pages
// 6. add the the page model keys and values for there pages
// 7. add the pages to the domService
// 8. add event listeners for the links in the nav for these pages 
