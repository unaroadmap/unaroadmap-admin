import * as React from "react";
import { List, Datagrid, TextField, TextInput, 
         ReferenceField, ReferenceInput, EditButton,
         Edit, Create, SimpleForm, SimpleList, SelectInput, Filter } 
from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Pesquisar" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
/*
export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);
*/

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                   primaryText={record => record.title}
                   secondaryText={record => `${record.views} views`}
                   tertiaryText={record => new Date(record.published_at).toLocaleDateString()} 
                />
            ) : (
            <Datagrid>
                <TextField source="id" />
                <ReferenceField label="User" label="Usuário" source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" label="Titulo"/>
                <TextField source="body" label="mensagem" />
                <EditButton />
            </Datagrid>
            )} 
        </List>
    );
}

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId"  reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
    </SimpleForm>    
  </Edit>  
);

export const PostCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <ReferenceInput source="userId"  reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <TextInput multiline source="body" />
      </SimpleForm>    
    </Create>  
  );