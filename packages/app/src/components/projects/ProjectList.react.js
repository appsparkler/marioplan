import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProjectSummary from './ProjectSummary.react'
import {fetchAndStoreProjects} from '../../store/actions/project'
import {Link} from 'react-router-dom'

export function useEffectForFetchingAndStoringProjects(dispatch) {
  dispatch(fetchAndStoreProjects())
}

const ProjectList = () => {
  const {projects, fetchingProjects} = useSelector((state) => state.project)
  const dispatch = useDispatch()
  useEffect(useEffectForFetchingAndStoringProjects.bind(null, dispatch),
      [dispatch])
  return (
    <div className="project-list section" style={{
      maxHeight: '500px',
      padding: '0 20px',
      overflow: 'auto',
    }}>
      {
        fetchingProjects ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
        ): (
          projects && projects.map((project, i) => (
            <Link
              to={`/project/${project.id}`}
              key={`project-summary-${project.id}`}
            >
              <div>
                <ProjectSummary project={project} />
              </div>
            </Link>
          ))
        )
      }
    </div>
  )
}

export default ProjectList
