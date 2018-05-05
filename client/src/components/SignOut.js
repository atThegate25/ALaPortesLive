import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
   <button
       type="button"
       onClick={auth.doSignOut}
   >
       <a href="/"> Sign Out </a>
 </button>

export default SignOutButton;