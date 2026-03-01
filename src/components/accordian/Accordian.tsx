import { useState } from "react"
import AccordianItem from "./AccordianItem"

const accordianData = [
    {
        id: 1,
        title: 'Accordian 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra lorem vel ex facilisis lacinia. Donec tincidunt felis non faucibus pellentesque. Suspendisse in finibus mauris. Morbi molestie ut purus sed.'
    },
    {
        id: 2,
        title: 'Accordian 2',
        description: 'Nullam molestie, ex eu vehicula faucibus, quam leo congue eros, et ullamcorper turpis est id nisi. Cras viverra felis quam, a accumsan est imperdiet a. Donec ut enim maximus, volutpat.'
    },
    {
        id: 3,
        title: 'Accordian 3',
        description: 'Donec egestas nibh ut enim pharetra ultricies. Aliquam nec porttitor tellus. Nulla bibendum accumsan justo non mollis. Curabitur et eros ut eros congue tempus a in ligula. Nullam in lorem.'
    }
]

const Accordian = () => {

    const [openId, isOpenedId] = useState<number[]>([accordianData[1].id]);

    const handleToggle = (id: number) => {
        isOpenedId((prev) => (
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        ))
    };

    return (
        <div className="flex flex-col gap-4">
            {
                accordianData?.map((item) => {
                    return (
                        <AccordianItem 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            isOpen={openId.includes(item.id)}
                            handleToggle={() => {
                                if(openId.includes(item.id)) {
                                    return handleToggle(item.id)
                                }
                                handleToggle(item.id)
                            }}
                        />
                    )
                })
            }
        </div>
    )
}

export default Accordian