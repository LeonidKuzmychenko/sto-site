import { sectionsConfig } from "../../entities/section/model/sections.config"
import { SectionRenderer } from "../../entities/section/ui/SectionRenderer"
import React from "react";

const Sections: React.FC = () => {
    return (
        <>
            {sectionsConfig.map((section) => (
                <SectionRenderer
                    key={section.id}
                    section={section}
                />
            ))}
        </>
    )
}

export default Sections;
