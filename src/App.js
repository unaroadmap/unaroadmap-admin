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
import { ProjectList, ProjectEdit, ProjectCreate } from './components/projects/projects';
import { TopicList, TopicEdit, TopicCreate } from './components/topics/topics';
import { TrailList, TrailEdit, TrailCreate } from './components/trails/trails';

import UserIcon from '@material-ui/icons/Group';
import AccountBoxRounded from '@material-ui/icons/AccountBoxRounded';
import BusinessCenterSharp from '@material-ui/icons/BusinessCenterSharp';
import BallotSharp from '@material-ui/icons/BallotSharp';
import Code from '@material-ui/icons/Code';
import Settings from '@material-ui/icons/Settings';
import Timeline from '@material-ui/icons/Timeline';

import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
   <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
      <Resource name="states" list={StateList} edit={StateEdit} create={StateCreate} />
      <Resource name="citys" list={CityList} edit={CityEdit} create={CityCreate} />
      <Resource name="districts" list={DistrictList} edit={DistrictEdit} create={DistrictCreate}/>
      <Resource name="candidates" list={CandidateList} edit={CandidateEdit} create={CandidateCreate} icon={AccountBoxRounded} />
      <Resource name="address" list={AddressList} edit={AddressEdit} create={AddressCreate} />
      <Resource name="documents" list={DocumentList} edit={DocumentEdit} create={DocumentCreate} />
      <Resource name="companys" list={CompanyList} edit={CompanyEdit} create={CompanyCreate} icon={BusinessCenterSharp} />
      <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} icon={BallotSharp} />
      <Resource name="topics" list={TopicList} edit={TopicEdit} create={TopicCreate} icon={Settings} />
      <Resource name="trails" list={TrailList} edit={EditGuesser} create={TrailCreate} icon={Timeline} />
      <Resource name="techs" list={ListGuesser} edit={EditGuesser} icon={Code} />

   </Admin>   
);

export default App;
