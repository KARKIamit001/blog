import React from "react";
import Marquee from "react-fast-marquee";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Marquee autoFill={false} className="bg-green-500"
      >
      <p> Hello i am amit</p>
      </Marquee>


      <Marquee autoFill={true} className="bg-yellow-500"
      >
      <p> Hello i am amit</p>
      </Marquee>


      <Marquee autoFill={true} play={false} className="bg-green-500"
      >
      <p> Hello i am amit</p>
      </Marquee>


      
      <Marquee autoFill={true} play={true} pauseOnHover={true} className="bg-green-500"
      >
      <p> Hello i am amit</p>
      </Marquee>


       
      <Marquee autoFill={true} play={true} pauseOnHover={true} direction="right" speed={40} className="bg-green-500"
      >
      <p> Hello i am amit</p>
      </Marquee>

      <Accordion allowMultiple className="space-y-4">
      <AccordionItem header="What is Lorem Ipsum?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>





      
    </div>
  );
}
