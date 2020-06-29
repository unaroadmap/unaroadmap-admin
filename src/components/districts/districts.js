import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, ReferenceInput } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const DistrictTitle = ({ record }) => {
    return <span>Bairro {record ? `"${record.name}"` : ''}</span>
};


export const DistrictList = props => {
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
            <ReferenceField  label="Cidade" source="city_id" reference="citys">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
        )}
    </List>
    )
};

export const DistrictEdit = props => (
    <Edit title={<DistrictTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <ReferenceInput source="city_id"  reference="citys">
            <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>    
    </Edit>  
  );

  export const DistrictCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
          <ReferenceInput source="city_id"  reference="citys">
            <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>    
    </Create>  
  );