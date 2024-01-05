import { List, Paper, Text } from "@mantine/core";

const WorkStationOverview = () => {
  const workStations = [
    { yearRange: "2011 - 2020", title: "Brunnmattschule Bern" },
    { yearRange: "2020 - 2021", title: "Gymnasium Neufeld" },
    { yearRange: "2021 - Present", title: "Noser Young Professionals AG" },
  ];

  return (
    <Paper>
      {workStations.map((workStation, index) => (
        <div key={index} style={{ display: "flex", marginBottom: "20px" }}>
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
  );
};

export default WorkStationOverview;
