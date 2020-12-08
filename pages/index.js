import PageLayout from "components/PageLayout";
import Intro from "components/Intro";
import CardItem from "components/CardItem";

export default function Home() {
  return (
    <PageLayout>
      <Intro />
      <hr />
      <div className="container">
        <CardItem className="container_item" />
      </div>
    </PageLayout>
  );
}
