importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyD42sTgdRuieZr2ykGkazLFO0CmWbSfZD8',
    authDomain: 'arthsetu-checklist.firebaseapp.com',
      projectId: 'arthsetu-checklist',
        storageBucket: 'arthsetu-checklist.firebasestorage.app',
          messagingSenderId: '849948712046',
            appId: '1:849948712046:web:76fe5be2eb0cfa90461a7f'
            });

            const messaging = firebase.messaging();

            messaging.onBackgroundMessage((payload) => {
              const { title, body } = payload.notification;
                self.registration.showNotification(title, {
                    body,
                        icon: '/icons/icon-192.png'
                          });
                          });
