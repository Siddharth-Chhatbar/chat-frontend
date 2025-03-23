import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";

const App = () => {
  return <div className="text-4xl text-red-400">
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  </div>;
};

export default App;
