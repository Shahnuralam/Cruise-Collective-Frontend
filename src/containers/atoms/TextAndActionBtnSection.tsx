import React from 'react';
import RoundedBtn from '@/atoms/RoundedBtn';

export interface ITextAndActionBtnSectionProps {
  title: string;
  description: string;
  actionBtn: {
    title: string;
    href?: string;
    onClick?: () => void;
  };
}

export const TextAndActionBtnSection: React.FC<ITextAndActionBtnSectionProps> = (props) => {
  const { title, description, actionBtn } = props;

  return (
    <div className="flex justify-center items-center w-full pb-12 pt-14 text-center">
      <div className="flex flex-col gap-6 items-center justify-center max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
        <h3 className="text-4xl font-serif text-[#36453b]" dangerouslySetInnerHTML={{ __html: title }} />

        <div className="flex flex-col gap-5 items-center">
          <p className="text-lg text-[#36453b] text-opacity-90 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: description }} />

          <div className="w-fit">
            <RoundedBtn title={actionBtn.title} useLink={Boolean(actionBtn?.href)} href={actionBtn?.href || ''} onClick={actionBtn.onClick} variant="filled-dark-green" />
          </div>
        </div>
      </div>
    </div>
  );
};
