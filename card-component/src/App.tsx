import "./App.css";
import { HandThumbUpIcon } from "@heroicons/react/16/solid";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <section className="card-container">
        {/* <Badge text="New post" filled={false} />
        <Button
          text="Button"
          href="#"
          type="secondary"
          filled={false}
          icon={<HandThumbUpIcon />}
        /> */}
        <Card
          body="hi"
          title="hi2"
          image="https://source.unsplash.com/random"
          badge={{
            text: "hi",
            filled: true,
          }}
          indicator="Sold"
          subtitle="Great"
          btn={{
            text: "Button",
            href: "#",
            type: "secondary",
            filled: false,
            icon: <HandThumbUpIcon />,
          }}
        />
      </section>
    </div>
  );
}

export default App;
