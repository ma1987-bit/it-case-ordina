import Header from '@/components/Header';
import Title from '@/components/Title';
import { Report } from '@/interfaces';
const Home = () => {
  
const reports: Report[] = [{id:"1", title:"First report"},{id:"2",title:"Second report"}, {id:"3", title:"Third report"}];

return (
      <Header >
   <h1>Homepage</h1>
   </Header>

);
}

export default Home;
