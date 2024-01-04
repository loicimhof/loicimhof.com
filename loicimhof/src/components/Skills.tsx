import React from "react";
import { Paper, Image, Text, Badge } from "@mantine/core";

interface Skill {
    logo: string;
    name: string;
    experience: number;
}

const SkillsOverview = () => {
    const skills: Skill[] = [
        {
            logo: "https://img.icons8.com/color/48/000000/html-5.png",
            name: "HTML",
            experience: 60,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/css3.png",
            name: "CSS",
            experience: 50,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/javascript.png",
            name: "JavaScript",
            experience: 50,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/typescript.png",
            name: "TypeScript",
            experience: 60,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/react-native.png",
            name: "React",
            experience: 60,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/nodejs.png",
            name: "Node.js",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/next.png",
            name: "Next.js",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/mongodb.png",
            name: "MongoDB",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/postgreesql.png",
            name: "PostgreSQL",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/python.png",
            name: "Python",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/java.png",
            name: "Java",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
            name: "C++",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/c-programming.png",
            name: "C",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/git.png",
            name: "Git",
            experience: 30,
        },
        {
            logo: "https://img.icons8.com/color/48/000000/docker.png",
            name: "Docker",
            experience: 30,
        },
    ];

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {skills.map((skill, index) => (
                <Paper key={index} shadow="xs">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Image
                            src={skill.logo}
                            width={32}
                            height={32}
                            alt={skill.name}
                            style={{ marginRight: "1rem" }}
                        />
                        <Text size="sm" style={{ flex: 1 }}>
                            {skill.name}
                        </Text>
                        <Badge color="teal" variant="light">
                            {skill.experience}%
                        </Badge>
                    </div>
                </Paper>
            ))}
        </div>
    );
};

export default SkillsOverview;
