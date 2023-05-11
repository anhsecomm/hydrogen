import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div className="column feature bg-white mx-auto my-6 rounded-xl w-1/3 p-4 shadow space-y-4" {...storyblokEditable(blok)}>
      <h2>{blok.name}</h2>
    </div>
  );
};

export default Feature;
