import React from 'react';
import '../App.css'

import { auth } from '../firebase';

const SignOutButton = () =>
   <button
       type="button"
       onClick={auth.doSignOut}
       className="btn btn-orange btn-radius"
   >
       <a href="/"> Sign Out </a>
 </button>

export default SignOutButton;