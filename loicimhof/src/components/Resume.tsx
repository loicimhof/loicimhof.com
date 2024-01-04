import { List, Paper, Text } from "@mantine/core";

const WorkStationOverview = () => {
  const workStations = [
    { yearRange: "2015 - 2017", title: "Company A" },
    { yearRange: "2017 - 2019", title: "Company B" },
    { yearRange: "2019 - Present", title: "Company C" },
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
