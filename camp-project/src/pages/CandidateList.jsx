import { Table, Header, Menu, Icon } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import CandidateService from "../services/candidateService";
import { Link } from "react-router-dom";
export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);
  return (
    <div>
      <Header as="h2">İŞ ARAYANLAR</Header>
      <Table celled  textAlign="center" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Identity Number</Table.HeaderCell>
            <Table.HeaderCell>Birth Year</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {candidates.map((candidate) => (
              <Table.Row key={candidate.id}>
                <Table.Cell>
                  <Link to={`/candidates/${candidate.firstName}`}></Link>
                </Table.Cell>

                <Table.Cell>{candidate.lastName}</Table.Cell>
                <Table.Cell>{candidate.identityNumber}</Table.Cell>
                <Table.Cell>{candidate.birthYear}</Table.Cell>
                <Table.Cell>{candidate.email}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
