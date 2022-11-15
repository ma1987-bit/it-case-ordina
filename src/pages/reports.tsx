import Header from "@/components/Header";
import { Report } from "@/interfaces";
import { graphql } from "gatsby";

interface ReportsPageProps {
  reports: Report[];
}

const ReportsPage = ({data: {allWpDashboard: {nodes}}} : any) => {
  return (
    <Header>
    <h1>Reports page</h1>
    {nodes.map((dashboard: any) => 
      <div>
        <p>{dashboard.title}</p>
        <a href={dashboard.dashboardfields.url}>{dashboard.title}</a>
      </div>
    )}
    </Header>
  );
};

export const query = graphql `
  query {
    allWpDashboard {
      nodes {
        title
        dashboardfields {
          url
        }
      }
    }
  }  
`

export default ReportsPage;
