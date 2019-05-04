import React from "react"

import { Section } from "../Section/Section.js"
import { SectionTitle } from "../Section/SectionTitle.js"
import Project from "./Project.js"

const ProjectComponent = ({ projects }) => {
  console.log(projects)
  return (
    <div>
      {projects.edges.map((node, index) => {
        return <Project key={index} project={node} />
      })}
      <Section>
        <SectionTitle title="projects" message="check out my" />
      </Section>
    </div>
  )
}

export default ProjectComponent
