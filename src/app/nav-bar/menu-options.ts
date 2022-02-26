import {Option} from './Option';
import {PageState} from "../types/page-state";
import {faCaretSquareDown, faCaretSquareUp} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';



export const MENU_OPTIONS: Option[] = [
  {
    state: PageState.LOGIN,
    label: 'Login',
    icon: faCaretSquareUp
  },
  {
    state: PageState.PROFILE,
    label: 'Profile',
    icon: faUser
  },
  {
    state: PageState.SEARCH,
    label: 'Explore',
    icon: faChartLine
  },
  {
    state: PageState.ASSET_POST,
    label: 'Asset Post',
    icon: faFileExport
  },
  {
    state: PageState.LOGOUT,
    label: 'Logout',
    icon: faCaretSquareDown
  },
];
