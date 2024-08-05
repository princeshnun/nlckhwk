import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReportTemplateList } from "./reportTemplate/ReportTemplateList";
import { ReportTemplateCreate } from "./reportTemplate/ReportTemplateCreate";
import { ReportTemplateEdit } from "./reportTemplate/ReportTemplateEdit";
import { ReportTemplateShow } from "./reportTemplate/ReportTemplateShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { ReportDataList } from "./reportData/ReportDataList";
import { ReportDataCreate } from "./reportData/ReportDataCreate";
import { ReportDataEdit } from "./reportData/ReportDataEdit";
import { ReportDataShow } from "./reportData/ReportDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Reports"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ReportTemplate"
          list={ReportTemplateList}
          edit={ReportTemplateEdit}
          create={ReportTemplateCreate}
          show={ReportTemplateShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="ReportData"
          list={ReportDataList}
          edit={ReportDataEdit}
          create={ReportDataCreate}
          show={ReportDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
