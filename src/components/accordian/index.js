import Accordian from "./accordian";


const AccordianApp = () => {
    const accordianItems = [
        {
            title:"Title 1",
            content:"Content of title 1"
        },
        {
            title:"Title 2",
            content:"Content of title 2"
        },
        {
            title:"Title 3",
            content:"Content of title 3"
        },
    ]
    return (
        <div>
          <Accordian items={accordianItems} />
        </div>
    )
};

export default AccordianApp;