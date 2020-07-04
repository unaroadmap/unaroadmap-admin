import * as React from "react";
import { List, SimpleList, Datagrid, TextField, TextInput, 
         Edit, SimpleForm, Create, SelectInput, ReferenceField, 
         ReferenceInput, DateField, DateInput  } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


const SexoCandidate = [
  {id: 'M', name: 'Masculino'},
  {id: 'F', name: 'Feminino'}
];

const UnaSexoInput = (props) => {
  return (
    <SelectInput {...props} choices={SexoCandidate} />
  );
};

const EscolaridadeCandidate = [
  {id: 'Fundamental - Incompleto', name: 'Fundamental - Incompleto'},
  {id: 'Fundamental - Completo', name: 'Fundamental - Completo'},
  {id: 'Médio - Incompleto', name: 'Médio - Incompleto'},
  {id: 'Médio - Completo', name: 'Médio - Completo'},
];

const UnaEscolaridadeInput = (props) => {
  return (
    <SelectInput {...props} choices={EscolaridadeCandidate} />
  );
};

const NacionalidadeCandidate = [
  {id: 'Brasileiro', name: 'Brasileiro'},
  {id: 'Estrangeiro', name: 'Estrangeiro'}
];

const UnaNacionalidadeInput = (props) => {
  return (
    <SelectInput {...props} choices={NacionalidadeCandidate} />
  );
};

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
            <TextField label="Nome" source="name" />
            <DateField label="Data de Nascimento" source="birthday" />
            <TextField source="sexo" />
            <TextField label="Escolaridade" source="schooling" />
            <TextField label="Nacionalidade" source="nationality" />
            <TextField label="Nome da Mãe" source="mother_name" />
            <TextField label="Nome do Pai" source="father_name" />
            <TextField label="Telefone" source="telephone" />
            <TextField label="Celular" source="cell_phone" />
            <ReferenceField label="Usuário" source="user_id" reference="users">
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
            <TextInput label="Nome" source="name" /> 
            <DateInput label="Data de Nascimento" source="birthday" />
            <UnaSexoInput source="sexo" />
            <UnaEscolaridadeInput label="Escolaridade" source="schooling" />
            <UnaNacionalidadeInput label="Nacionalidade" source="nationality" />
            <TextInput label="Nome da Mãe" source="mother_name" />
            <TextInput label="Nome do Pai" source="father_name" />
            <TextInput label="Telefone" source="telephone" />
            <TextInput label="Celular" source="cell_phone" />
          <ReferenceInput label="Usuário" source="user_id"  reference="users">
            <SelectInput optionText="email" />
        </ReferenceInput>
      </SimpleForm>    
    </Edit>  
  );

  export const CandidateCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <ReferenceInput label="Usuário" source="user_id"  reference="users">
              <SelectInput optionText="email" />
            </ReferenceInput>
            <TextInput label="Nome" source="name" /> 
            <DateInput label="Data de Nascimento" source="birthday" />
            <UnaSexoInput source="sexo" />
            <UnaEscolaridadeInput label="Escolaridade" source="schooling" />
            <UnaNacionalidadeInput label="Nacionalidade" source="nationality" />
            <TextInput label="Nome da Mãe" source="mother_name" />
            <TextInput label="Nome do Pai" source="father_name" />
            <TextInput label="Telefone" source="telephone" />
            <TextInput label="Celular" source="cell_phone" />
            
      </SimpleForm>    
    </Create>  
  );