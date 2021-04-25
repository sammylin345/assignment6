import {FaTimes} from 'react-icons/fa'

const Projects = ( {project, onDelete} ) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <div className='border m-2 p-2'>
           <h3>
               {project.project_name} <FaTimes style={{color:'red',cursor:'pointer'}} 
               onClick={onDelete}/>
           </h3> 
           <h3>{project.due_date}</h3>
        </div>
    )
}

export default Projects
