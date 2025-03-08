// import { NewProject } from "./components/NewProject"
import { useState } from "react";
import { ProjectsSidebar } from "./components/ProjectsSidebar"
import { NoProjectSelected } from "./components/NoProjectSelected"
import { NewProject } from "./components/NewProject";
import { v4 as uuidv4 } from 'uuid';

function App() {
   
  const [projectState, setProjectState] = useState({
     selectedProjetId: undefined,
     projects: []
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjetId: null,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: uuidv4()
      }


      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectState)

  let content;

  if (projectState.selectedProjetId == null) {
    content = <NewProject onAdd={handleAddProject}/>;
  } else if (projectState.selectedProjetId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  )
}

export default App
