const SubHeader = ({ title, heading }: any) => {
  return (
    <div className="bg-primary">
      <div className="mx-auto  max-w-6xl h-full">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl py-4">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SubHeader;
