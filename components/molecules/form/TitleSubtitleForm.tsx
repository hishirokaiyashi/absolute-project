import InputFormElement from '@/components/atoms/commons/InputElement';
import Typography from '@/components/atoms/commons/Typography';
import React from 'react';
interface ITitleSubTitleFormProps {
  title: string;
}
const TitleSubtitleForm = ({ title }: ITitleSubTitleFormProps) => {
  return (
    <>
      <Typography as="span" size="paragraph">
        {title}
      </Typography>
      <div className="flex flex-col font-spykDisplay">
        <Typography as="span" size="paragraphSecond">
          Auf mutige Ideen wartet die Welt.
        </Typography>
        <Typography as="span" size="paragraphSecond">
          Wir bringen dein Produkt zum Fliegen.
        </Typography>
      </div>
    </>
  );
};

export default TitleSubtitleForm;
