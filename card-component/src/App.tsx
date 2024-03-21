import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  DashBoard,
  ErrorPage,
  HomePageLayout,
  Landing,
  NbaPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    errorElement: <ErrorPage title="error" />,
    children: [
      {
        index: true,
        element: (
          <Landing
            btn={{
              text: "Click for App",
              href: "dashboard",
              type: "primary",
              filled: true,
            }}
          />
        ),
      },
      {
        path: "dashboard",
        element: <DashBoard />,
        children: [
          {
            index: true,
            element: <NbaPage text="NBA" />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    // <div className="App">
    //   <section className="card-container">
    //     {/* <Card
    //       body="hi"
    //       title="Stephen"
    //       image={image}
    //       badge={{
    //         text: "GSW",
    //         filled: true,
    //       }}
    //       indicator="Sold"
    //       subtitle="Curry"
    // btn={{
    //   text: "Button",
    //   href: "#",
    //   type: "primary",
    //   filled: true,
    //   icon: <HandThumbUpIcon />,
    // }}
    //     /> */}
    //   </section>
    // </div>
    //);
    <RouterProvider router={router} />
  );
}

export default App;
