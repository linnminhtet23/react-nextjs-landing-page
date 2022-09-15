import HeroText from "../../share-components/HeroText";
import urlBuilder from "../../lib/imageUrl";

function NewHero({ item, error }) {
  return error ? (
    <div className="erroralert">
      <h1>No Post Found or Something was wrong. Please, try later!</h1>
    </div>
  ) : (
    <HeroText title={item.title} url={urlBuilder(item.image.url)} />
  );
}

export default NewHero;
