import { useRoute } from "react-router5";
import { MainLayout } from "./components/Layout";
import { Inbox, Compose, Contacts, Message, NotFound } from "./pages";

const RenderPage = () => {
  const { route } = useRoute();

  if (route.name === "inbox") {
    return <Inbox />;
  }

  if (route.name === "contacts") {
    return <Contacts />;
  }

  if (route.name === "inbox.message") {
    return <Message />;
  }

  if (route.name === "compose") {
    return <Compose />;
  }

  return <NotFound />;
};

function App() {
  return (
    <MainLayout>
      <RenderPage />
    </MainLayout>
  );
}

export default App;
