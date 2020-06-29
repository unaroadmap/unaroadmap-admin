import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, ReferenceInput } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const DocumentTitle = ({ record }) => {
    return <span>Documentos {record ? `"${record.name}"` : ''}</span>
};


export const DocumentList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List {...props}>
        {isSmall ? (
            <SimpleList
              primaryText={record => record.cpf}
                 
            />
        ):(
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField label="Candidato" source="candidate_id" reference="candidates">
              <TextField source="name" />
            </ReferenceField>
            <TextField source="cpf" />
            <TextField source="pis" />
            <TextField source="rg" />
            <TextField source="titulo_eleitor" />
            <TextField source="titulo_zona" />
            <TextField source="titulo_secao" />
            <TextField source="certif_militar" />
            <TextField source="cnh" />
            <TextField source="ctps" />
            <TextField source="ctps_serie" />
        </Datagrid>
        )}
    </List>
    )
};

export const DocumentEdit = props => (
    <Edit title={<DocumentTitle />} {...props}>
      <SimpleForm>
            <ReferenceInput label="Candidato" source="candidate_id" reference="candidates">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput disabled source="id" />
            <TextInput source="cpf" />
            <TextInput source="pis" />
            <TextInput source="rg" />
            <TextInput source="titulo_eleitor" />
            <TextInput source="titulo_zona" />
            <TextInput source="titulo_secao" />
            <TextInput source="certif_militar" />
            <TextInput source="cnh" />
            <TextInput source="ctps" />
            <TextInput source="ctps_serie" />
      </SimpleForm>    
    </Edit>  
  );

  export const DocumentCreate = props => (
    <Create {...props}>
      <SimpleForm>
            <ReferenceInput label="Candidato" source="candidate_id" reference="candidates">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="cpf" />
            <TextInput source="pis" />
            <TextInput source="rg" />
            <TextInput source="titulo_eleitor" />
            <TextInput source="titulo_zona" />
            <TextInput source="titulo_secao" />
            <TextInput source="certif_militar" />
            <TextInput source="cnh" />
            <TextInput source="ctps" />
            <TextInput source="ctps_serie" />
      </SimpleForm>    
    </Create>  
  );