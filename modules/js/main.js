import create, { addClass} from './html.js';


const h1 = create('h1', 'Welcome to my page!', document.body);
addClass(h1, 'big');
