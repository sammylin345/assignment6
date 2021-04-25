import Students from './components/Students'
import Project from './components/Project'
import { useState } from 'react'

const App = () =>  {
  const [project, setproject] = useState([
    {
        "project_name" : "PHP Laravel API",
        "due_date" : "February 20, 2021"
    },
    {
        "project_name" : "Python Django Web application",
        "due_date" : "March 20, 2021"
    },
    {
        "project_name" : "Angular front end",
        "due_date" : "June 20, 2021"
    }
])

  const deleteTask = (project_name) => {
    setproject(project.filter((project) => 
    project_name !== project_name))
  }
  
  return (
    <div className="App">
      <div>
            <div className="container-fluid">
            <div className="row">
            <div className="col"></div>
            <div className="col">
            <Students />
            <Project project={project} onDelete={deleteTask}/>
            </div>
            <div className="col"></div>
            </div>
            </div>
      </div>
      
      
    </div>
  )
}

export default App
