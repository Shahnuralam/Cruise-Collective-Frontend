
const QuotationPage = ({data}) => {
    const {description, text} = data;
    return (
        <div>
            <div className="text-2xl">{description}</div>
            <div className="text-cruise text-sm mt-3">{text}</div>
        </div>
    );
};

export default QuotationPage;