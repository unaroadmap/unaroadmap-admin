import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         NumberInput, NumberField, Edit, SimpleForm, Create, UrlField, DateField } from 'react-admin';
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
            <NumberField label="Ordem" source="order" />
            <TextField source="name" />
            <TextField source="description" />
            <UrlField source="url" />
            <TextField label="Tempo Duração" source="duration" />
          </Datagrid>
        )}
    </List>
    )
};

export const TopicEdit = props => (
    <Edit title={<TopicTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <NumberInput label="Ordem" source="order" />
          <TextInput source="name" />
          <TextInput source="description" />
          <TextInput source="url" />
          <TextInput label="Tempo Duração" source="duration" />
      </SimpleForm>    
    </Edit>  
  );

  export const TopicCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <NumberInput label="Ordem" source="order" />
          <TextInput label="Nome" source="name" />
          <TextInput label="Descrição" source="description" />
          
          <TextInput label="Url" source="url" />
          <TextInput label="Tempo Duração" source="duration" />
      </SimpleForm>    
    </Create>  
  );