import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
    EmailField, Edit, SimpleForm, Create, SelectInput,SelectField } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const StateTitle = ({ record }) => {
    return <span>Estado {record ? `"${record.name}"` : ''}</span>
};


export const StateList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.name}
              secondaryText={record => record.sigla}
                          
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="name" />
            <TextField source="sigla" />
        </Datagrid>
        )}
    </List>
    )
};

export const StateEdit = props => (
    <Edit title={<StateTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="sigla" />
      </SimpleForm>    
    </Edit>  
  );

  export const StateCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
          <TextInput source="sigla" />
      </SimpleForm>    
    </Create>  
  );