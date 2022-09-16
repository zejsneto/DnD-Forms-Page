import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import app from './firebase.js'

export async function subscribeToHellfireClube(subscribe) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'Hellfire-Club')
    const docRef = await addDoc(hellfireClubCollection, subscribe)
    return docRef.id
}