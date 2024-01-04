import { List, Paper, Text, ThemeIcon, rem } from "@mantine/core";

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
                    <div style={{ marginRight: "20px" }}>
                        <List
                            style={{ width: "50px", height: "50px" }}
                            color="blue"
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    {/* <IconCircleCheck
                                        style={{ width: rem(16), height: rem(16) }}
                                    /> */}
                                </ThemeIcon>
                            }
                        />
                    </div>
                    <div>
                        <Text size="lg">{workStation.yearRange}</Text>
                        <Text>{workStation.title}</Text>
                    </div>
                </div>
            ))}
        </Paper>
    );
};

export default WorkStationOverview;
