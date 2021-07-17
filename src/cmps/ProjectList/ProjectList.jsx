import { Fragment } from 'react';
import { useState } from 'react'
import { projectService } from '../../services/projectService'
import { ProjectDetails } from '../../cmps/ProjectDetails'
import './ProjectList.scss'

export const ProjectList = (props) => {
    const projects = projectService.getProjects()
    const [showModal, setShowModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const handleOpen = async (project) => {
        await setSelectedProject(project)
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <Fragment>
            <section id='projects' className='project-list'>
                <h1>Projects</h1>
                <div className='bottom-line'></div>
                <div className='list main-layout flex'>
                    {projects && projects.map((project, idx) => (
                        <div className='project-preview' key={idx}>
                            <img src={project.imgUrl[0]} alt={project.title} />
                            <div className='overlay flex-column flex-center'>
                                <h2>{project.title}</h2>
                                <p>{project.tools}</p>
                                <button className='btn more-btn' onClick={() => handleOpen(project)}>LEARN MORE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {selectedProject && <ProjectDetails selectedProject={selectedProject} showModal={showModal} handleClose={handleClose} />}
        </Fragment>
    )
}

