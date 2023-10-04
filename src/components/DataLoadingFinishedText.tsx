import StrokeLine from './StrokeLine';

const DataLoadingFinishedText = ({text}) => {
    return (
        <div className="flex flex-col items-center mb-6 mt-14">
          <h4 className="text-4xl">{text}</h4>
          <div className="pt-3">
            <StrokeLine />
          </div>
        </div>
    );
};

export default DataLoadingFinishedText;