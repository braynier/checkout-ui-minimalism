interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <h1 className="text-gray-darkest text-2xl leading-8 font-bold tracking-normal">
      {text}
    </h1>
  );
};

export default Heading;
