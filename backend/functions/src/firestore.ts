import admin from 'firebase-admin'

admin.initializeApp()

const firestore = admin.firestore()
firestore.settings({ projectId: 'love-4255f', timestampsInSnapshots: true })

export default firestore
