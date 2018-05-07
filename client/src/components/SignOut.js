import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
   <button
       type="button"
       onClick={auth.doSignOut}
       className="btn btn-default"
   >
       <a href="/"> Sign Out </a>
 </button>

export default SignOutButton;