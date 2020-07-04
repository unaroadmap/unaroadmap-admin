import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
    EmailField, Edit, SimpleForm, Create, SelectInput,SelectField } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PerfilUser = [
  {id: 'Administrador', name: 'Administrador'},
  {id: 'Candidato', name: 'Candidato'},
  {id: 'Empresa', name: 'Empresa'}
];

const StatusUser = [
  {id: 'Active', name: 'Ativo'},
  {id: 'Inactive', name: 'Desativado'}
];

const UnaPerfilInput = (props) => {
  return (
    <SelectInput {...props} choices={PerfilUser} />
  );
};

const UnaStatusInput = (props) => {
  return (
    <SelectInput {...props} choices={StatusUser} />
  );
};

const UserTitle = ({ record }) => {
    return <span>Usuário {record ? `"${record.email}"` : ''}</span>
};


export const UserList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.email}
              secondaryText={record => record.profile}
              tertiaryText={record => record.status}            
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="status" />
            <TextField source="profile" label="Perfil" />
        </Datagrid>
        )}
    </List>
    )
};

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="email" />
          <UnaStatusInput source="status" />
          <UnaPerfilInput source="profile" label="Perfil" />
      </SimpleForm>    
    </Edit>  
  );

  export const UserCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <TextInput source="email" />
          <TextInput source="password" />
          <UnaStatusInput source="status" />
          <UnaPerfilInput source="profile" label="Perfil" />
      </SimpleForm>    
    </Create>  
  );