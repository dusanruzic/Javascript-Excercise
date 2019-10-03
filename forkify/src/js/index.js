import string from './models/Search';
import { add, multiply as m, ID} from './views/searchView';

console.log(`Using imported functions! ${add(ID, 2)} and ${m(ID, 2)}`);