import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, 
         ReferenceInput, ArrayField, SingleFieldList, ChipField, 
         DateField, DateInput,ArrayInput,SimpleFormIterator, UrlField, Filter  } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const ProjectTitle = ({ record }) => {
    return <span>Projeto {record ? `"${record.name}"` : ''}</span>
};

const ProjectFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Pesquisar" source="q" alwaysOn />
  </Filter>
);


export const ProjectList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List filters={<ProjectFilter />} {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.name}
              secondaryText={record => record.description}
                         
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField label="Código" source="id" />
            <TextField label="Nome" source="name" />
            <TextField label="Descrição" source="description" />
            <ReferenceField label="Empresa" source="company_id" reference="companys">
              <TextField source="name" />
            </ReferenceField>
            <ArrayField label="Candidatos" source="candidates">
              <SingleFieldList>
                <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
            <ArrayField label="Trilhas" source="trails">
              <SingleFieldList>
                <ChipField source="name" />
              </SingleFieldList>
            </ArrayField>
            <UrlField label="Questionário" source="str" />
        </Datagrid>
        )}
    </List>
    )
};

export const ProjectEdit = props => (
    <Edit title={<ProjectTitle />} {...props}>
       <SimpleForm>
            <TextInput disabled label="Código" source="id" />
            <TextInput label="Nome" source="name" />
            <TextInput label="Descrição" source="description" />
            <TextInput label="Questionário" source="str" />
            <ReferenceInput label="Empresa" source="company_id" reference="companys">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ArrayInput label="Candidatos" source="candidates">
              <SimpleFormIterator>
                <ReferenceInput label="Candidato" source="id" reference="candidates">
                  <SelectInput optionText="name" />
                </ReferenceInput>
              </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="Trilhas" source="trails">
              <SimpleFormIterator>
                <ReferenceInput label="Trilha" source="id" reference="trails">
                  <SelectInput optionText="name" />
                </ReferenceInput>
              </SimpleFormIterator>
            </ArrayInput>
      </SimpleForm>
      
    </Edit>  
  );

  export const ProjectCreate = props => (
    <Create {...props}>
      <SimpleForm>
            <TextInput label="Nome" source="name" />
            <TextInput label="Descrição" source="description" />
            <TextInput label="Questionário" source="str" />
            <ReferenceInput label="Empresa" source="company_id" reference="companys">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ArrayInput label="Candidatos" source="candidates">
              <SimpleFormIterator>
                <ReferenceInput label="Candidato" source="id" reference="candidates">
                  <SelectInput optionText="name" />
                </ReferenceInput>
              </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="Trilhas" source="trails">
              <SimpleFormIterator>
                <ReferenceInput label="Trilha" source="id" reference="trails">
                  <SelectInput optionText="name" />
                </ReferenceInput>
              </SimpleFormIterator>
            </ArrayInput>
      </SimpleForm>
          
    </Create>  
  );