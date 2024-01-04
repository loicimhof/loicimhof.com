import React from "react";
import { Card, Grid, Text, Title, Image, Button, GridCol } from "@mantine/core";

const About = () => {
  return (
    <Grid gutter="lg">
      <GridCol span={6} style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="../passfoto.jpg"
          alt="Photo"
          style={{ height: "400px", width: "300px", borderRadius: 15 }}
        />
      </GridCol>
      <GridCol span={6}>
        <Card shadow="xs" padding="lg">
          <Title order={2}>About Me</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue. Sed non mauris vitae erat consequat
            auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
          </Text>
          <Button
            component="a"
            href="https://twitter.com"
            variant="outline"
            left="twitter"
          >
            Twitter
          </Button>
          <Button
            component="a"
            href="https://github.com"
            variant="outline"
            left="github"
          >
            GitHub
          </Button>
          <Button
            component="a"
            href="https://linkedin.com"
            variant="outline"
            left="linkedin"
          >
            LinkedIn
          </Button>
        </Card>
      </GridCol>
    </Grid>
  );
};

export default About;
