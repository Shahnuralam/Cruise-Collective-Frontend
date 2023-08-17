import React from 'react';
import Link from 'next/link';
export interface SocialIcon {
  id: string | number;
  name: string;
  href: string;
  icon: any;
}
export interface ISocialIconProps {
  icons: SocialIcon[];
}
const SocialIcons: React.FC<ISocialIconProps> = (props) => {
  const { icons } = props;

  const iconProps = {
    viewBox: '0 0 48 48',
    className: 'w-[24px] h-[24px] lg:w-[32px] lg:[32px] xl:w-[48px] xl:h-[48px]',
  };

  return (
    <div className="flex justify-center items-center gap-6">
      {icons.map((icon, iconIdx) => (
        <Link key={`_i-${icon.id}-${iconIdx}`} href={icon.href} target="_blank" rel="nofollow" className="transition-all ease-out duration-300 text-[#36453b] hover:text-[#607b53]">
          {icon.icon(iconProps)}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
