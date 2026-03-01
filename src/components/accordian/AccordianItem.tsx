interface AccordianItemProps {
    title: string;
    description: string;
    isOpen: boolean;
    handleToggle: () => void;
}

const AccordianItem = ({ title, description, isOpen, handleToggle }: AccordianItemProps) => {

    return (
        <div className="w-[50%] m-auto border border-black rounded-lg">
            <div 
                className="bg-gray-200 p-4 rounded-tr-lg rounded-tl-lg w-full flex justify-between cursor-pointer"
                onClick={handleToggle}
            >
                <h4 className="font-bold">{title}</h4>
                <span>{isOpen ? '↑' : '↓'}</span>
            </div>
            {
                isOpen &&
                <p className="font-medium p-4">{description}</p>
            }
        </div>
    )
}

export default AccordianItem