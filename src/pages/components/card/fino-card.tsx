import { Card } from "flowbite-react";

export interface INFTCardProps {
  tag: string;
  title: string;
  body: string;
  owner: string;
  time: string;
}

const FinoCard: React.FC<INFTCardProps> = (props: INFTCardProps) => {
  return (
    <div className="max-w-sm">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.body}
        </p>
      </Card>
    </div>
  );
};

export default FinoCard;
