import { MarginLayout } from "~/components/layouts/MarginLayout";

type BannerProps = {
  title: string;
};

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="flex flex-shrink-0 items-center bg-sky-900">
      <MarginLayout verticalPadding="sm" className="-mt-1">
        <h1 className="text-white h1">{title}</h1>
      </MarginLayout>
    </div>
  );
};

export { Banner };
