import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, 
         ReferenceInput, DateField, DateInput  } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const CompanyTitle = ({ record }) => {
    return <span>Candidato {record ? `"${record.name}"` : ''}</span>
};


export const CompanyList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.name}
              secondaryText={record => record.sexo}
              tertiaryText={record => record.schooling}              
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users">
              <TextField source="email" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="cnpj" />
            <TextField source="email" />
            <TextField source="telephone" />
            <TextField source="cell_phone" />
        </Datagrid>
        )}
    </List>
    )
};

export const CompanyEdit = props => (
    <Edit title={<CompanyTitle />} {...props}>
      <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="user_id"  reference="users">
            <SelectInput optionText="email" />
            </ReferenceInput>
            <TextField source="name" />
            <TextField source="cnpj" />
            <TextField source="email" />
            <TextField source="telephone" />
            <TextField source="cell_phone" />
          
      </SimpleForm>    
    </Edit>  
  );

  export const CompanyCreate = props => (
    <Create {...props}>
      <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="user_id"  reference="users">
            <SelectInput optionText="email" />
            </ReferenceInput>
            <TextField source="name" />
            <TextField source="cnpj" />
            <TextField source="email" />
            <TextField source="telephone" />
            <TextField source="cell_phone" />
      </SimpleForm>    
    </Create>  
  );