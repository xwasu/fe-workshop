import * as React from 'react';
import * as ReactDOM from 'react-dom';

import initAboutMe from './about-me/index';
import {Repos} from "./github/react-component";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'about-me': { me: string }
    }
  }
}

initAboutMe();

const user = 'mat3e';

ReactDOM.render(
  <>
    <about-me me={user} />
    <Repos user={user} />
  </>,
  document.getElementById('app')
);
