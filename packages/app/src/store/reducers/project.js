const initState = {
  projects: [],
  fetchingProjects: false,
  fetchingProject: false,
  fetchedProject: {},
}

const projectReducer = (state = initState, action) => {
  console.log(action)
  const newState = {
    ...state,
  }
  switch (action.type) {
    case 'FETCH_PROJECTS_STARTED':
      return {
        ...state,
        fetchingProjects: true,
      }

    case 'STORE_PROJECTS':
      return {
        ...state,
        projects: action.projects,
      }

    case 'FETCH_PROJECTS_DONE':
      return {
        ...state,
        fetchingProjects: false,
      }

    case 'CREATE_PROJECT_STARTED':
      console.log(action)
      break

    case 'CREATE_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.project],
      }

    case 'CREATE_PROJECT_DONE':
      console.log(action)
      break

    case 'CREATE_PROJECT_ERROR':
      console.log(action)
      break

    case 'FETCH_PROJECT_STARTED':
      return {
        ...state,
        fetchingProject: true,
      }
    case 'FETCH_PROJECT_ENDED':
      return {
        ...state,
        fetchingProject: false,
      }
    case 'STORE_FETCHED_PROJECT':
      return {
        ...state,
        fetchedProject: action.project,
      }

    default:
      break
  }
  return newState
}

export default projectReducer
