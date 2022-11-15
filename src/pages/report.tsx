import { Report } from "@/interfaces";

interface ReportPageProps {
  reports: Report[];
}

const ReportPage = (props: ReportPageProps) => {
  let id = "1" // moet van gatsby komen
  let report =
    id != null ? props.reports.find((report) => report.id == id) : null;

  return (
    <div>
      <h1> REPORT DETAILPAGE</h1>
      {report && (
        <>
          <h2>{report?.title}</h2>
          <h4>report id: {report?.id}</h4>
        </>
      )}

      {report == null && (
        <>
          <h2>REPORT NOT FOUND</h2>
        </>
      )}
    </div>
  );
};

export default ReportPage;
