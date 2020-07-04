import { Layout } from 'react-admin';
import UnaMenu from './components/unaMenu';

const UnaLayout = (props) => <Layout {...props} menu={UnaMenu} />;

export default UnaLayout;