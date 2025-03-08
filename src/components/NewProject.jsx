/* eslint-disable react/prop-types */
import { useRef } from "react"
import { Input } from "./Input"

export const NewProject = ({ onAdd }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // validation ...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-blue-800 hover:text-blue-950">Cancel</button>
        </li>
        <li>
          <button 
            className="px-6 py-2 rounded-md bg-blue-800 text-blue-50 hover:bg-blue-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label='Title'/>
        <Input ref={descriptionRef} label='Description' textarea/>
        <Input type="date" ref={dueDateRef} label='Due Date'/>
      </div>
    </div>
  )
}