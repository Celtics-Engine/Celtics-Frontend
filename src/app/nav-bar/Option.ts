
import { PageState } from "../types/page-state";
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

export interface Option {
    state: PageState;
    label: string;
    icon: IconDefinition;
}
