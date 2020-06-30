import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         NumberInput, Edit, SimpleForm, Create, ArrayField, ArrayInput, SingleFieldList, SimpleFormIterator, ChipField, DateInput, RichTextField  } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const TrailTitle = ({ record }) => {
    return <span>Trilhas {record ? `"${record.name}"` : ''}</span>
};


export const TrailList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.name}
              secondaryText={record => record.description}
              tertiaryText={record => record.topics} 
                          
            />
        ):(
          <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ArrayField label="Tópicos" source="topics">
              <SingleFieldList>
                <ChipField source="name" />
              </SingleFieldList>
            </ArrayField>
         </Datagrid>
        )}
    </List>
    )
};

export const TrailEdit = props => (
    <Edit title={<TrailTitle />} {...props}>
      <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <ArrayInput source="topics">
              <SimpleFormIterator>
                <TextInput source="id" />
                <DateInput source="name" />
                <TextInput source="description" />
                <NumberInput source="order" />
                <TextInput source="url" />
              </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>    
    </Edit>  
  );

  export const TrailCreate = props => (
    <Create {...props}>
       <SimpleForm>
            <TextInput label="Nome" source="name" />
            <TextInput label="Descrição" source="description" />
            <ArrayInput label="Tópicos" source="topics">
              <SimpleFormIterator>
                <TextInput source="id" />
                <DateInput source="name" />
                <TextInput source="description" />
                <NumberInput source="order" />
                <TextInput source="url" />
              </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>      
    </Create>  
  );