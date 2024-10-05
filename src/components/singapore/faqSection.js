import React, {useState} from 'react';
import FAQSectionData from '../../content/singapore.json';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleItem = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };
    return (
        <div className='container-fluid pb-100 pt-100' style={{backgroundColor: "#F7F7F7"}}>
            <div className='container'>
                <div className='row'>
                    <div className='roi-detail'>
                        <h2>{FAQSectionData?.FAQSection?.title}<span className="dot"></span></h2>
                        <Accordion allowZeroExpanded>
                            {FAQSectionData?.FAQSection?.FAQs?.map((item, index) => {
                                return (
                                    <AccordionItem key={index} expanded={expandedIndex === index}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                {item?.question}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>{item?.answer}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQSection;