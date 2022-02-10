import "./styles.css";
import styled from "styled-components";
import { Accordion, Chip, Icon, Typography } from "@equinor/eds-core-react";
import { delete_to_trash } from "@equinor/eds-icons";
import moment from "moment";

Icon.add({ delete_to_trash });

const wellbores = [
  {
    name: "NO 33/9-E-4 HT4",
    wellUid: "66e8d42f-0cda-4701-bff8-7b0bb3ba3d1f",
    wellboreUid: "1b52f37c-827a-418e-bb7d-d52a9f0a8a3b",
    rigName: "DEEPSEA ATLANTIC",
    oilField: "STATFJORD NORD",
    active: true
  },
  {
    name: "NO 16/2-D-35",
    wellUid: "95992c20-f691-40d9-86e1-4f3e5ce823b4",
    wellboreUid: "b6045ffb-68f9-4e97-b4e2-f092fc7263a8",
    rigName: "JOHAN SVERDRUP DP",
    oilField: "JOHAN SVERDRUP",
    active: true
  }
];

const casingRunStates = [
  {
    id: "123",
    from: Date("2022-02-08T14:03:23Z"),
    to: 4503,
    states: ["Running"]
  },
  {
    id: "124",
    from: Date("2022-02-09T08:03:23Z"),
    to: 5400,
    states: ["Scheduled", "Casing data"]
  }
];

const DATETIME_FORMAT = "DD.MM.yyyy HH:mm:ss";

export default function App() {
  return (
    <div className="App">
      <h1>Multiple casing runs</h1>

      <Accordion>
        {wellbores.map((wellbore) => (
          <Accordion.Item isExpanded="true">
            <Accordion.Header>
              <Typography>
                {wellbore.name} / {wellbore.rigName} / {wellbore.oilField}
              </Typography>
            </Accordion.Header>
            <Accordion.Panel>
              {casingRunStates.map((state) => (
                <CasingRunContainer key={state.id}>
                  <CasingRunName>
                    <StyledLink>
                      From {moment(state.from).format(DATETIME_FORMAT)} to{" "}
                      {state.to}m
                    </StyledLink>
                  </CasingRunName>
                  <CasingRunActions>
                    <Icon name="delete_to_trash" title="Menu" />
                  </CasingRunActions>
                  <CasingRunStatus>
                    {state.states.map((s) => (
                      <Chip>{s}</Chip>
                    ))}
                  </CasingRunStatus>
                </CasingRunContainer>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

const CasingRunContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 100px 100px;
  padding: 5px;
`;

const CasingRunName = styled.div`
  grid-column: 1;
`;

const CasingRunActions = styled.div`
  grid-column: 2;
`;

const CasingRunStatus = styled.div`
  grid-column: 3;
`;

const StyledLink = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
