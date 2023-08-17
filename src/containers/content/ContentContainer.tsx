import React from 'react';
import classNames from 'classnames';

export const ContentContainer: React.FC<{ children: React.ReactNode | React.ReactNode[]; className?: string }> = (props) => {
  const { children, className } = props;

  return (
    <div className={classNames('flex justify-center items-center max-w-[90%] lg:max-w-[60%] xl:max-w-[55%] w-full mx-auto', className)}>
      <div className="max-w-[25rem] lg:max-w-[60%] w-full">{children}</div>
    </div>
  );
};
