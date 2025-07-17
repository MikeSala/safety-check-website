type StepLayoutProps = {
  title: string;
  id: string;
  children: React.ReactNode;
  description?: string;
};

const StepLayout: React.FC<StepLayoutProps> = ({
  title,
  id,
  children,
  description,
}) => {
  return (
    <>
      <h2 className="py-6 h3 md:py-8">{title}</h2>
      {description && <p className="pb-4 text-gray-600">{description}</p>}
      <div
        id={id}
        className="flex flex-col gap-4 rounded-lg border-2 border-gray-300 bg-white p-4 md:p-6"
      >
        {children}
      </div>
    </>
  );
};

export default StepLayout;
