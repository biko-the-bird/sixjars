
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//this is a configuration for enzyme that needs
//to be imported in each testing file
const config = configure({ adapter: new Adapter() });
export default config;