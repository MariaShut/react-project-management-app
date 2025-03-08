/* eslint-disable react/prop-types */
import { Button } from "./Button";

export const ProjectsSidebar = ({ onStartAddProject }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-blue-950 text-neutral-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-blue-50">Projects</h2>
      <div>
        <Button onClick={onStartAddProject} >
          &#43; Add project
        </Button>
      </div>
    </aside>
  );
};