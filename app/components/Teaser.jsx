import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="text-2xl mb-10" >{blok.headline}</h2>
    </div>
  );
};

export default Teaser;
