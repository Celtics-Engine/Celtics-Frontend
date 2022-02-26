import {Option} from './Option';
import {PageState} from "../types/page-state";
import {faCaretSquareDown, faCaretSquareUp} from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';



export const MENU_OPTIONS: Option[] = [
  {
    state: PageState.LOGIN,
    label: 'Login',
    icon: faCaretSquareUp
  },
  {
    state: PageState.PROFILE,
    label: 'Profile',
    icon: faCalculator
  },
  {
    state: PageState.SEARCH,
    label: 'Search',
    icon: faChartLine
  },
  {
    state: PageState.ASSET_POST,
    label: 'Asset Post',
    icon: faChartPie
  },
  {
    state: PageState.LOGOUT,
    label: 'Logout',
    icon: faCaretSquareDown
  },
];
