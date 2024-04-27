import React from 'react';

interface TechOption {
    name: string;
    color: string;
}

type TechKeys = 'vue' | 'react' | 'django' | 'docker' | 'firebase' | 'swift' | 'flask';


// Using a mapped type for TechOptions
type TechOptions = {
    [K in TechKeys]: TechOption;
};

const techOptions: TechOptions = {
    flask: {
        name: 'Flask',
        color: 'bg-[#CCA4E3] text-[#5C2C83]'
    },
    vue: {
        name: 'Vue.js',
        color: 'bg-[#A0EAC9] text-[#1E4039]'
    },
    react: {
        name: 'React.js',
        color: 'bg-[#7FBEDB] text-[#1D3647]'
    },
    django: {
        name: 'Django',
        color: 'bg-[#E9ABFF] text-[#122920]'
    },
    docker: {
        name: 'Docker',
        color: 'bg-[#FFD1D5] text-[#401112]'
    },
    firebase: {
        name: 'Firebase',
        color: 'bg-[#E0F2FC] text-[#274555]'
    },
    swift: {
        name: 'Swift',
        color: 'bg-[#FF8A80] text-[#3F1B18]'
    },
};



interface Props {
    tech: TechKeys[];
}

const CaseStudyTech: React.FC<Props> = ({ tech }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
                <div
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs ${techOptions[item].color} px-3 min-w-16 text-center`}
                >
                    {techOptions[item].name}
                </div>
            ))}
        </div>
    );
}

export default CaseStudyTech;
