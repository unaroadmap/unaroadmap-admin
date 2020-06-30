import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, 
         ReferenceInput, DateField, DateInput  } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const ProjectTitle = ({ record }) => {
    return <span>Projeto {record ? `"${record.name}"` : ''}</span>
};


export const ProjectList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.name}
              secondaryText={record => record.description}
                         
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField label="Empresa" source="company_id" reference="companys">
              <TextField source="name" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="description" />
        </Datagrid>
        )}
    </List>
    )
};

export const ProjectEdit = props => (
    <Edit title={<ProjectTitle />} {...props}>
      <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="Empresa" source="company_id" reference="companys">
              <SelectInput source="name" />
            </ReferenceInput>
            <TextInput source="name" /> 
            <TextInput source="description" />
      </SimpleForm>    
    </Edit>  
  );

  export const ProjectCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <TextInput source="name" /> 
          <TextInput disabled source="id" />
          <ReferenceInput label="Empresa" source="company_id" reference="companys">
              <SelectInput source="name" />
          </ReferenceInput>
          <TextInput source="name" /> 
          <TextInput source="description" />
      </SimpleForm>    
    </Create>  
  );