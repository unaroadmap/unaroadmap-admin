import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         NumberInput, NumberField, Edit, SimpleForm, Create, UrlField } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const TopicTitle = ({ record }) => {
    return <span>Topicos {record ? `"${record.name}"` : ''}</span>
};


export const TopicList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.name}
              secondaryText={record => record.sigla}
              tertiaryText={record => record.order} 
                          
            />
        ):(
          <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="order" />
            <UrlField source="url" />
          </Datagrid>
        )}
    </List>
    )
};

export const TopicEdit = props => (
    <Edit title={<TopicTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="description" />
          <TextInput source="order" />
          <TextInput source="url" />
      </SimpleForm>    
    </Edit>  
  );

  export const TopicCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <TextInput label="Nome" source="name" />
          <TextInput label="Descrição" source="description" />
          <NumberInput label="Ordem" source="order" />
          <TextInput label="Url" source="url" />
      </SimpleForm>    
    </Create>  
  );