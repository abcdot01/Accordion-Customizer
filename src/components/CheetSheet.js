import React, { useContext, useEffect } from "react";
import Prism from "prismjs";
import NoteContext from "../context/accordionState/NoteContext";
import AccordionCss from "./Code/AccordionCss";
import 'prismjs/themes/prism-coy.css'
export default function CheetSheet() {
  // eslint-disable-next-line
  const [abc, setAbc] = useContext(NoteContext);
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  const [openTab, setOpenTab] = React.useState(1);
  const color = "slate";

  return (
    <div>
      {/* Tab Content */}

      <div className="tabs">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-[#7c41e1]"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Html
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-[#7c41e1]"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Css
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-[#7c41e1]"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Js
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="relative flex flex-col w-full">
                      <pre className="language-html">
                        <code className="language-html flex flex-col" >
                          &lt;!DOCTYPE html&gt; 
                          &lt;html lang="en"&gt; 
                          &lt;head&gt; 
                          &lt;meta charset="UTF-8"&gt; 
                          &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
                          &lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;
                          &lt;title&gt;Document&lt;/title&gt; 
                          &lt;/head&gt;
                          &lt;body&gt; 
                          &lt;div class= 'accordion' &gt;
                          {/* Accordion Header */}
                          &lt;!-- Accordion Header --&gt; 
                          &lt;div class="accordion-head" &gt; &lt;div class="heading"&gt;
                          {/* Accordion Header Icon */}
                          {abc.headerIconShow ? `<!-- Accordion Header Icon -->
                          <svg class="head-icon" width='16px' height= '14px' viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M2.02513 2.05023C0.658291 3.41706 0.658291 5.63314 2.02513 6.99997L8.00004 12.9749L13.9749 6.99997C15.3417 5.63314 15.3417 3.41706 13.9749 2.05023C12.608 0.683392 10.392 0.683392 9.02513 2.05023L8.00004 3.07539L6.97487 2.05023C5.60804 0.683392 3.39196 0.683392 2.02513 2.05023Z" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" /> </svg>` : ''}
                          &lt;h4 class=""&gt; Label &lt;/h4&gt; &lt;/div&gt;
                          {/* Accordion Close/Open Btn */}
                          &lt;!-- Accordion Close/Open Btn --&gt; &lt;div
                          class="collapse-btn"&gt; &lt;span
                          class="close-icon cursor-pointer" &gt; &lt;svg
                          viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg" &gt; &lt;path
                          d="M15 13L10 8L5 13" strokeWidth="1.67"
                          strokeLinecap="round" strokeLinejoin="round" /&gt;
                          &lt;/svg&gt; &lt;/span&gt; &lt;/div&gt; &lt;/div&gt;
                          {/* Accordion Body */}
                          &lt;!-- Accordion Body --&gt; &lt;div
                          class="accordion-body-main"&gt; &lt;div class="accordion-body "
                          &gt; &lt;div class="accordion-card"&gt; &lt;div
                          class="accordion-items"&gt; &lt;p&gt;
                          This is some subtext which appears after expanding the
                          accordion. &lt;/p&gt; &lt;p&gt; This is some subtext
                          which appears after expanding the accordion.
                          &lt;/p&gt; &lt;p&gt; This is some subtext which
                          appears after expanding the accordion. &lt;/p&gt;
                          &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                          &lt;/div&gt; &lt;/body&gt; &lt;/html&gt;
                        </code>
                      </pre>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="css_tab">
                      <pre>
                        <code className="language-js dd">
                           <AccordionCss />
                        </code>
                      </pre>
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <pre>
                      <code className="language-js">{`let collapseBtn = document.querySelector('.close-icon');
   let accordionBodyMain = document.querySelector(".accordion-body-main");
   let clickCheck = true;
 
   collapseBtn.addEventListener('click', (e) => {
    let accordionCardHeight = document.querySelector(".accordion-body").getBoundingClientRect().height + 4;
       if(clickCheck){
           accordionBodyMain.style.height = accordionCardHeight + 'px';
           e.target.style.transform = 'rotate(0deg)';
           clickCheck = false;
       }
       else{
         accordionBodyMain.style.height = '0px';
         e.target.style.transform = 'rotate(180deg)';
         clickCheck = true;
       }
   })
                        `}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}
