import { Card, Grid, List, Paper, Text } from "@mantine/core";
import Languages from "./Languages";

const WorkStationOverview = () => {
  const workStations = [
    { yearRange: "2011 - 2020", title: "Brunnmattschule Bern" },
    { yearRange: "2020 - 2021", title: "Gymnasium Neufeld" },
    { yearRange: "2021 - Present", title: "Noser Young Professionals AG" },
  ];

  return (
    <Card
      padding="lg"
      style={{
        width: "80%",
        marginBottom: "100px",
        justifyContent: "center",
        marginTop: "50px",
        backgroundColor: "transparent",
      }}
    >
      <Grid>
        <Grid.Col span={6}>
          <h3>Education / Workstations</h3>
          <Paper>
            {workStations.map((workStation, index) => (
              <div
                key={index}
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <List>
                  <List.Item>
                    <Text size="lg">
                      {workStation.yearRange} : {workStation.title}
                    </Text>
                  </List.Item>
                </List>
              </div>
            ))}
          </Paper>
        </Grid.Col>
        <Grid.Col span={6}>
          <Languages />
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default WorkStationOverview;
