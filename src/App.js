import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
//import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate } from './components/users/users';
import { StateList, StateEdit, StateCreate } from './components/states/states';
import { CityList, CityEdit, CityCreate } from './components/citys/citys';
import { DistrictList, DistrictEdit, DistrictCreate } from './components/districts/districts';
import { CandidateList, CandidateEdit, CandidateCreate } from './components/candidates/candidates';
import { AddressList, AddressEdit, AddressCreate } from './components/addresss/addresss';
import { DocumentList, DocumentEdit, DocumentCreate } from './components/documents/documents';
import { CompanyList, CompanyEdit, CompanyCreate } from './components/companys/companys';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import RecentActors from '@material-ui/icons/RecentActors';
import Business from '@material-ui/icons/Business';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
   <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
      <Resource name="states" list={StateList} edit={StateEdit} create={StateCreate}/>
      <Resource name="citys" list={CityList} edit={CityEdit} create={CityCreate}/>
      <Resource name="districts" list={DistrictList} edit={DistrictEdit} create={DistrictCreate}/>
      <Resource name="candidates" list={CandidateList} edit={CandidateEdit} create={CandidateCreate} icon={RecentActors}/>
      <Resource name="address" list={AddressList} edit={AddressEdit} create={AddressCreate}/>
      <Resource name="documents" list={DocumentList} edit={DocumentEdit} create={DocumentCreate}/>
      <Resource name="companys" list={CompanyList} edit={CompanyEdit} create={CompanyCreate} icon={Business}/>
      <Resource name="projects" list={ListGuesser} edit={EditGuesser}/>
      <Resource name="topics" list={ListGuesser} edit={EditGuesser}/>
      <Resource name="trails" list={ListGuesser} edit={EditGuesser}/>
      <Resource name="techs" list={ListGuesser} edit={EditGuesser}/>

   </Admin>   
);

export default App;
