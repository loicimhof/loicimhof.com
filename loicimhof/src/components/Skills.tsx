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
  ];

  return (
    <div>
      {skills.map((skill, index) => (
        <Paper key={index} shadow="xs" style={{ marginBottom: "1rem" }}>
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
