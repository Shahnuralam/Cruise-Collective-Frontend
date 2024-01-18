import Image from 'next/image';
import React from 'react';

const HeaderImageSliderItem = ({ attributes }) => {
    return (
        <div className="bg-image-height w-full relative h-full">
            {attributes?.url && (
                <Image
                    className="transform cursor-pointer hover:scale-105 transition duration-300 object-cover object-center"
                    src={attributes.url}
                    alt={attributes.name || ""}

                    fill

                />
            )}

        </div>
    );
};

export default HeaderImageSliderItem;