import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, 
         ReferenceInput, DateField, DateInput  } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const CandidateTitle = ({ record }) => {
    return <span>Candidato {record ? `"${record.name}"` : ''}</span>
};


export const CandidateList = props => {
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
            <TextField source="name" />
            <DateField source="birthday" />
            <TextField source="sexo" />
            <TextField source="schooling" />
            <TextField source="nationality" />
            <TextField source="mother_name" />
            <TextField source="father_name" />
            <TextField source="telephone" />
            <TextField source="cell_phone" />
            <ReferenceField source="user_id" reference="users">
              <TextField source="email" />
            </ReferenceField>
        </Datagrid>
        )}
    </List>
    )
};

export const CandidateEdit = props => (
    <Edit title={<CandidateTitle />} {...props}>
      <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" /> 
            <DateInput source="birthday" />
            <TextInput source="sexo" />
            <TextInput source="schooling" />
            <TextInput source="nationality" />
            <TextInput source="mother_name" />
            <TextInput source="father_name" />
            <TextInput source="telephone" />
            <TextInput source="cell_phone" />
          <ReferenceInput source="user_id"  reference="users">
            <SelectInput optionText="email" />
        </ReferenceInput>
      </SimpleForm>    
    </Edit>  
  );

  export const CandidateCreate = props => (
    <Create {...props}>
      <SimpleForm>
      <TextInput source="name" /> 
            <DateInput source="birthday" />
            <TextInput source="sexo" />
            <TextInput source="schooling" />
            <TextInput source="nationality" />
            <TextInput source="mother_name" />
            <TextInput source="father_name" />
            <TextInput source="telephone" />
            <TextInput source="cell_phone" />
          <ReferenceInput source="user_id"  reference="users">
            <SelectInput optionText="email" />
        </ReferenceInput>
      </SimpleForm>    
    </Create>  
  );