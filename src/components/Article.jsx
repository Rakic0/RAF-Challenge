import { Paragraph, SmallHeading } from "./Typo";

const Article = ({ img, alt, h1, p }) => {
  return (
    <article className={`mb-12`}>
      <div>
        <img
          src={img}
          alt={alt}
          className="w-32 h-32 rounded-full shadow-xl mb-2 object-cover"
        />
        <div className="xl:w-96">
          <SmallHeading className="text-black mb-2">{h1}</SmallHeading>
          <Paragraph className="!text-black">{p}</Paragraph>
        </div>
      </div>
    </article>
  );
};

export default Article;
