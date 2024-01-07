import { Text, List, Paper } from "@mantine/core";

const Languages = () => {
  return (
    <Paper>
      <div>
        <List>
          <h3>Languages </h3>
          <List.Item>
            <Text size="lg">German</Text>
          </List.Item>
          <List.Item>
            <Text size="lg">English</Text>
          </List.Item>
          <List.Item>
            <Text size="lg">French</Text>
          </List.Item>
        </List>
      </div>
    </Paper>
  );
};

export default Languages;
