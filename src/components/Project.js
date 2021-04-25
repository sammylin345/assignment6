import Projects from './Projects'

const Project = ( {project} ) => {
    return (
        <>
         {project.map((project) => (
         <Projects key={project.project_name} project={project}/>
         ))}   
        </>
    )
}

export default Project
