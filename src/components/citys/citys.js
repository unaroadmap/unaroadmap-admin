import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, ReferenceInput } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const CityTitle = ({ record }) => {
    return <span>Cidade {record ? `"${record.name}"` : ''}</span>
};


export const CityList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.name}            
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField  label="Estado" source="state_id" reference="states">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
        )}
    </List>
    )
};

export const CityEdit = props => (
    <Edit title={<CityTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <ReferenceInput source="state_id"  reference="states">
            <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>    
    </Edit>  
  );

  export const CityCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
          <ReferenceInput source="state_id"  reference="states">
            <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>    
    </Create>  
  );