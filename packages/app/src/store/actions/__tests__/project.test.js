import * as projectActions from '../project'

jest.mock('../../../firebase-app', ()=> {
  const firebasemock = require('firebase-mock')
  class FirebaseApp {
    constructor() {
      this.db = new firebasemock.MockFirestore()
    }
  }
  const {db} = new FirebaseApp()
  db.collection('projects')
      .doc('1')
      .set({
        id: 1,
        title: 'Project 1',
        body: 'This is Project 1',
      })
  db.autoFlush(1000)
  return {db}
})

describe('createProject Function', ()=> {
  const {createProject} = projectActions
  const dispatcher = createProject()

  it('should return a function', () => {
    expect(typeof createProject).toBe('function')
  })

  it('dispatcher should be a function', ()=> {
    expect(typeof dispatcher).toBe('function')
  })

  test(`the argument passed to dispatcher to be
    a function that is called at least once`, async ()=> {
    const dispatchFunction = jest.fn()
    await dispatcher(dispatchFunction)
    expect(dispatchFunction).toHaveBeenCalled()
  })
})

describe('fetchAndStoreProject Function', () => {
  it('should return a function', () => {
    expect.assertions(1)
    const {fetchAndStoreProjects} = projectActions
    expect(typeof fetchAndStoreProjects).toBe('function')
  })
  it('should execute the `dispatch` at least once', async ()=> {
    expect.assertions(1)
    const {fetchAndStoreProjects} = projectActions
    const dispatch = jest.fn()
    const dispatcher = fetchAndStoreProjects()
    await dispatcher(dispatch)
    expect(dispatch).toHaveBeenCalledTimes(3)
  })
})

describe('fetchProject Function', () => {
  it('should return a function', () => {
    expect.assertions(1)
    const {fetchProject} = projectActions
    expect(typeof fetchProject(1)).toBe('function')
  })
  it('should execute the `dispatch` 3 times for available doc', async ()=> {
    expect.assertions(1)
    const {fetchProject} = projectActions
    const dispatch = jest.fn()
    const dispatcher = fetchProject(1)
    await dispatcher(dispatch)
    expect(dispatch).toHaveBeenCalledTimes(3)
  })
  it('should execute the `dispatch` 2 times for un-available doc', async ()=> {
    expect.assertions(1)
    const {fetchProject} = projectActions
    const dispatch = jest.fn()
    const dispatcher = fetchProject(2)
    await dispatcher(dispatch)
    expect(dispatch).toHaveBeenCalledTimes(2)
  })
})
