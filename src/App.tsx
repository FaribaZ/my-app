import "./App.css";
import { BasicTable } from "./BasicTable";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <BasicTable />
    </QueryClientProvider>
  );
}

export default App;
