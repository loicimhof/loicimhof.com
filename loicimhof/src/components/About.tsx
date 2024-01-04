import {
  Card,
  Grid,
  Text,
  Title,
  Image,
  Button,
  GridCol,
  Box,
} from "@mantine/core";

const About = () => {
  return (
    <Card
      shadow="xs"
      padding="lg"
      style={{ width: "80%", boxShadow: "0 0 0 1px teal ", borderRadius: 15 }}
    >
      <Grid gutter="lg">
        <GridCol span={6} style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="../passfoto.jpg"
            alt="Photo"
            style={{ height: "400px", width: "300px", borderRadius: 15 }}
          />
        </GridCol>
        <GridCol span={6}>
          <Title order={2} style={{ margin: 20 }}>
            About Me
          </Title>
          <Text>
            I'm 19 years old and I'm learning software engineering at
            NoserYoung. I love technology and always want to be up to date with
            the latest advancements.
          </Text>
          <Box
            style={{
              display: "flex",
              alignContent: "flex-end",
              height: "100%",
            }}
          >
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
          </Box>
        </GridCol>
      </Grid>
    </Card>
  );
};

export default About;
