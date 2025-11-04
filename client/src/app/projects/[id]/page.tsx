import React from 'react'
import { useState } from 'react'
import ProjectHeader from "@/app/projects/[id]/ProjectHeader";
type Props = {
    params:{id:string}
}
const Project = ({params}: Props) => {
    const {id} = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)

  return (
    <div>
        {/*  new task*/}
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
  )
}
export default Project