import {db} from '../../firebase-app'

export const createProject = (project) => (async (dispatch)=>{
  dispatch({type: 'CREATE_PROJECT_STARTED'})
  const projectDocReference = await db.collection('projects').add(project)
  const projectDocSnapshot = await projectDocReference.get()
  dispatch({type: 'CREATE_PROJECT', project: projectDocSnapshot.data()})
  dispatch({type: 'CREATE_PROJECT_DONE'})
})

export const fetchAndStoreProjects = () => (async (dispatch)=> {
  dispatch({type: 'FETCH_PROJECTS_STARTED'})
  const projectCollection = await db.collection('projects').get()
  const projects = projectCollection.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  dispatch({
    type: 'STORE_PROJECTS',
    projects,
  })
  dispatch({type: 'FETCH_PROJECTS_DONE'})
})

export const fetchProject = (projectId) => (async (dispatch) => {
  dispatch({type: 'FETCH_PROJECT_STARTED'})
  const docRef = db.collection('projects').doc(projectId)
  const doc = await docRef.get()
  if (doc.exists) dispatch({type: 'STORE_FETCHED_PROJECT', project: doc.data()})
  else console.log('no such doc...')
  dispatch({type: 'FETCH_PROJECT_ENDED'})
})
