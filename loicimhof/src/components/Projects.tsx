import { Card, Grid, Text, Title, GridCol } from "@mantine/core";

const ProjectsOverview = () => {
  interface Project {
    logo: string;
    name: string;
    description: string;
    link: string;
    // add website link if available (fanpage for example)
  }

  const projects: Project[] = [
    {
      logo: "https://img.icons8.com/color/48/000000/html-5.png",
      name: "loicimhof.com",
      description: "My personal portfolio",
      link: "https://www.w3schools.com/html/",
    },
    {
      logo: "https://img.icons8.com/color/48/000000/html-5.png",
      name: "miniipa",
      description: "A storage management tool",
      link: "https://github.com/loicimhof/miniipa",
    },
    {
      logo: "https://img.icons8.com/color/48/000000/html-5.png",
      name: "fanpage",
      description: "Quite literally a fanshop",
      link: "https://github.com/loicimhof/fanpage",
    },
    {
      logo: "https://img.icons8.com/color/48/000000/html-5.png",
      name: "true tea",
      description: "A tea shop",
      link: "https://github.com/loicimhof/truetea1",
    },
  ];
  return (
    <>
      <h2>My recent work</h2>
      <Card
        style={{
          width: "80%",
          marginBottom: "100px",
          backgroundColor: "transparent",
        }}
      >
        <Grid gutter="lg">
          {projects.map((project, index) => (
            <GridCol span={3}>
              <Card
                shadow="xs"
                padding="lg"
                style={{
                  boxShadow: "0 0 0 1px teal ",
                  borderRadius: 15,
                  height: "200px",
                }}
                onClick={() => (window.location.href = project.link)}
              >
                <Title order={2} style={{ margin: 20 }}>
                  {project.name}
                </Title>
                <Text>{project.description}</Text>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default ProjectsOverview;
