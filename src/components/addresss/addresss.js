import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, ReferenceInput } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const AddressTitle = ({ record }) => {
    return <span>Endereço {record ? `"${record.name}"` : ''}</span>
};


export const AddressList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.logradouro}
              secondaryText={record => record.cep}
              tertiaryText={record => record.number}               
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="cep" />
            <TextField source="logradouro" />
            <TextField source="number" />
            <TextField source="complement" />
            <ReferenceField  label="Bairro" source="district_id" reference="districts">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField  label="Usuário" source="user_id" reference="users">
                <TextField source="email" />
            </ReferenceField>
        </Datagrid>
        )}
    </List>
    )
};

export const AddressEdit = props => (
    <Edit title={<AddressTitle />} {...props}>
      <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="cep" />
            <TextInput label="Rua" source="logradouro" />
            <TextInput label="Número" source="number" />
            <TextInput label="Complemento" source="complement" />
            <ReferenceInput label="Bairro" source="district_id" reference="districts">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Usuário" source="user_id" reference="users">
              <SelectInput optionText="email" />
            </ReferenceInput>
      </SimpleForm>    
    </Edit>  
  );

  export const AddressCreate = props => (
    <Create {...props}>
      <SimpleForm>
      <TextInput source="cep" />
            <TextInput source="logradouro" />
            <TextInput source="number" />
            <TextInput source="complement" />
            <ReferenceInput label="Bairro" source="district_id" reference="districts">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Usuário" source="user_id" reference="users">
              <SelectInput optionText="email" />
            </ReferenceInput>
      </SimpleForm>    
    </Create>  
  );