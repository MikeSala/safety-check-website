import { MarginLayout } from "~/components/layouts/MarginLayout";

type BannerProps = {
  title: string;
};

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="flex flex-shrink-0 items-center bg-black">
      <MarginLayout verticalPadding="sm">
        <h1 className="text-white h1">{title}</h1>
      </MarginLayout>
    </div>
  );
};

export { Banner };
