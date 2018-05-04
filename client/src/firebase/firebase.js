
import * as firebase from 'firebase';
{/* <script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
    <script>
        // Initialize Firebase */}
        const prodConfig = {
            apiKey: "AIzaSyDckknwwm9_R4KMKfm5Z4klo0qEFMqE7kY",
        authDomain: "atthegate-3db7a.firebaseapp.com",
        databaseURL: "https://atthegate-3db7a.firebaseio.com",
        projectId: "atthegate-3db7a",
        storageBucket: "atthegate-3db7a.appspot.com",
        messagingSenderId: "671355350006"
      };
//       firebase.initializeApp(config);
// </script>
const devConfig = {
    apiKey: "AIzaSyDckknwwm9_R4KMKfm5Z4klo0qEFMqE7kY",
    authDomain: "atthegate-3db7a.firebaseapp.com",
    databaseURL: "https://atthegate-3db7a.firebaseio.com",
    projectId: "atthegate-3db7a",
    storageBucket: "atthegate-3db7a.appspot.com",
    messagingSenderId: "671355350006"
}


const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig; 
    // I commented out these lines because throws error no-undef line 18 and line 19

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};