import "./styles.css";
import styled from "styled-components";
import { Accordion, Typography, Chip, Icon } from "@equinor/eds-core-react";
import { delete_to_trash } from "@equinor/eds-icons";

Icon.add({ delete_to_trash });

const casingRunStates = [
  {
    from: Date("2022-02-08T14:03:23Z"),
    states: ["Running"]
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>Multiple casing runs</h1>

      <Accordion>
        <Accordion.Item isExpanded="true">
          <Accordion.Header>
            NO 30/6-E-4 C - OSEBERG ØST / OSEBERG ØST
          </Accordion.Header>
          <Accordion.Panel>
            <CasingRunContainer key="1">
              <CasingRunName>
                <StyledLink>7. feb 08:49 – 4503m</StyledLink>
              </CasingRunName>
              <CasingRunActions>
                <Icon name="delete_to_trash" title="Menu" />
              </CasingRunActions>
              <CasingRunStatus>
                <Chip>Running</Chip>
              </CasingRunStatus>
            </CasingRunContainer>
            <CasingRunContainer key="2">
              <CasingRunName>
                <StyledLink>9. feb 14:00 – 4600m</StyledLink>
              </CasingRunName>
              <CasingRunActions>
                <Icon name="delete_to_trash" title="Menu" />
              </CasingRunActions>
              <CasingRunStatus>
                <Chip>Scheduled</Chip>
              </CasingRunStatus>
            </CasingRunContainer>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

const CasingRunContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 100px 100px;
  border-color: red;
  border-width: 3px;
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
