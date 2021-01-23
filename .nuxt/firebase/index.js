import createApp from './app.js'

import authService from './service.auth.js'
import databaseService from './service.database.js'
import firestoreService from './service.firestore.js'
import remoteConfigService from './service.remoteConfig.js'

const appConfig = {"apiKey":"AIzaSyCugx7yr0xAFUzrhhmsWhcVB2_JP57XCvY","authDomain":"webkahhve.firebaseapp.com","databaseURL":"https:\u002F\u002Fwebkahhve-default-rtdb.firebaseio.com\u002F","projectId":"webkahhve","storageBucket":"webkahhve.appspot.com","messagingSenderId":"880874762849","appId":"1:880874762849:web:36c72bc4a9f820447ff020","measurementId":"G-6WF2D9KRS0"}

export default async (ctx, inject) => {
  /****************************************
  **************** LAZY MODE **************
  ****************************************/

  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    databaseService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      databaseService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),
      remoteConfigService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    database,
    firestore,
    remoteConfig
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    database: database,
    firestore: firestore,
    remoteConfig: remoteConfig
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}
