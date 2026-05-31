import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyD42sTgdRuieZr2ykGkazLFO0CmWbSfZD8',
    authDomain: 'arthsetu-checklist.firebaseapp.com',
      projectId: 'arthsetu-checklist',
        storageBucket: 'arthsetu-checklist.firebasestorage.app',
          messagingSenderId: '849948712046',
            appId: '1:849948712046:web:76fe5be2eb0cfa90461a7f'
            };

            const VAPID_KEY = 'BPm5nB_DkH_mH1iUSRJQSeZTkO-IuPAe7dpksl7A-77uK19VQuLcBgDGCdcqfczBBJB1Y7TJzzgoH2_mBcjGjyo';

            const app = initializeApp(firebaseConfig);
            export const db = getFirestore(app);
            export const messaging = getMessaging(app);

            export async function requestNotificationPermission() {
              const permission = await Notification.requestPermission();
                if (permission !== 'granted') return null;
                  const token = await getToken(messaging, { vapidKey: VAPID_KEY });
                    if (token) {
                        const { doc, setDoc } = await import('firebase/firestore');
                            await setDoc(doc(db, 'tokens', token), { token });
                              }
                                return token;
                                }

                                export { onMessage };
