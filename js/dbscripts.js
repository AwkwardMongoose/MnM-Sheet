  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase, ref, child, get, onValue, set, update, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBHueVLPncjcV1nXUVz_Es0MMkNZrH1VNY",
    authDomain: "test-bot-174ac.firebaseapp.com",
    databaseURL: "https://test-bot-174ac-default-rtdb.firebaseio.com",
    projectId: "test-bot-174ac",
    storageBucket: "test-bot-174ac.appspot.com",
    messagingSenderId: "795786236920",
    appId: "1:795786236920:web:037870bef24b3de30cfc0d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const dbRef = ref(getDatabase());
  window.onload = function() {
    const auth = getAuth();
    signInAnonymously(auth)
        .then(() => {
            // Signed in..
            console.log('Signed in!')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ...
        }).then(function() {
            const attributes = $('*[name*="attr_"]').toArray();
            var savedVals = {};

            attributes.forEach(att => {
                att.addEventListener('change', function() {
                saveVals()
                })
            })

            attributes.forEach(att => {
                att.addEventListener('change', function() {
                    if (att.name) {
                        if (att.type != 'checkbox') {
                            update(ref(db, 'testChar/'), {
                                [att.name] : att.value,
                            });
                        } else {
                            update(ref(db, 'testChar/'), {
                                [att.name] : att.checked,
                            });
                        }

                    }
                })
            })

            attributes.forEach(att => {
                att.addEventListener('change', function() {
                saveVals()
                })
            })

            function saveVals() {
                attributes.forEach(el => {        
                    if (el.type == 'checkbox') {
                        savedVals[el.name] = el.checked;
                    } else {
                        savedVals[el.name] = el.value;
                    }
                })
            }

            var loadSheet = {}
            get(child(dbRef, 'testChar/')).then((snapshot) => {
                let data = snapshot.val();
                loadSheet = data;
                attributes.forEach(att => {
                    if (att.name && loadSheet[att.name]) {
                        if (att.type == 'checkbox') {
                            att.checked = loadSheet[att.name];
                            valReplacer(att)
                            sizeMods()
                        } else {
                            att.value = loadSheet[att.name];
                            valReplacer(att)
                            sizeMods()
                        }
                    }
                })
            })

            console.log('DB Scripts Loaded')
      });
}
