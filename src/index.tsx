/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import './theme.sass'

render(() => <App />, document.getElementById('root') as HTMLElement);
