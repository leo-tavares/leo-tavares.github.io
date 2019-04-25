import React from "react";
import { Table, Icon } from "semantic-ui-react";
import TextLink from "../TextLink";

const ProjectStructure = () => {
  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            Organizações dos pricipais itens
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name="folder" /> node_modules
          </Table.Cell>
          <Table.Cell>
            Abriga as dependências do modulos listados no aquivo package.json
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> Components
          </Table.Cell>
          <Table.Cell>
            Contem os components que são utilizados para montar as paginas
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> Page/Container
          </Table.Cell>
          <Table.Cell>
            Contem as páginas, estas são montados com os components
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> Routes
          </Table.Cell>
          <Table.Cell>
            Contem arquivos para o gerênciamento das routes do projeto
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="file outline" /> package.json
          </Table.Cell>
          <Table.Cell>
            É responsál por listar os principais caracteristicas do projeto.
            <br />
            As dependencies e <TextLink text="devDependencies" link="https://pt.stackoverflow.com/questions/163785/qual-a-diferen%C3%A7a-entre-dependencies-e-devdependencies"/>
            tambem são listadas nesse arquivo
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ProjectStructure;
