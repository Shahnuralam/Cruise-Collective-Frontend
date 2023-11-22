import StrokeLine from './StrokeLine';

const DataLoadingFinishedText = ({text}) => {
    return (
        <div className="flex flex-col items-center mb-6 mt-14">
          <div className="text-2xl tracking-[1px]">{text}</div>
          <div className="pt-3">
            <StrokeLine />
          </div>
        </div>
    );
};

export default DataLoadingFinishedText;