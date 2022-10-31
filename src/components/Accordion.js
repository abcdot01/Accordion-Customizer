import React, { useContext } from "react";
import { useState } from "react";
import AccordionContent from "./AccordionContent";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import NoteContext from "../context/accordionState/NoteContext";
import CheetSheet from "./CheetSheet";

export default function Accordion() {
  //
  const [abc, setAbc] = useContext(NoteContext);

  //
  const [clickCheck, setClickCheck] = useState(true);
  const [rotateDeg, setRotateDeg] = useState(180);

  // Functions
  const toggleAccordion = () => {
    let accordionCardHeight = document.querySelector(".accordion-body").getBoundingClientRect().height + 4;

    if (clickCheck) {
      setAbc({...abc, accordionHeight : accordionCardHeight});
      setClickCheck(false);
      setRotateDeg(0);
      console.log(accordionCardHeight);
    } else {
      setAbc({...abc, accordionHeight : 0});
      setClickCheck(true);
      setRotateDeg(180);
    }
  };

  // 
  const handleAuto = () => {
    if (document.querySelector('.accordion-body-main').style.height === 'auto') {
      let accordionCardHeight = document.querySelector(".accordion-body").getBoundingClientRect().height + 4;
      setAbc({ ...abc, accordionHeight: accordionCardHeight });
    }
  }
  //

  const handleChange = (action , newValue)=>{
    switch (action) {
      case 'Heading Size':
        setAbc({...abc, headingSize: newValue})
        break;
      case 'Heading Color':
        setAbc({...abc, headingColor: newValue})
        break;
      case 'Collapse Btn Size':
        setAbc({...abc, collapseBtnSize : newValue})
        break;
      case 'Collapse Btn Color':
        setAbc({...abc, collapseBtnColor : newValue})
        break;
      case 'Header Icon Size':
        setAbc({...abc, headerIconSize : newValue})
        break;
      case 'Header Icon Color':
        setAbc({...abc, headerIconColor : newValue})
        break;
      case 'Text Color':
        setAbc({...abc, textColor : newValue})
        break;
      case 'Text Size':
        setAbc({...abc, textSize : newValue})
        break;
      case 'Text Padding':
        setAbc({...abc, textPadding : newValue})
        break;
      case 'Text Top Padding':
        setAbc({...abc, textPaddingTop : newValue})
        break;
      case 'Text Bottom Padding':
        setAbc({...abc, textPaddingBottom : newValue})
        break;
      case 'Text Left Padding':
        setAbc({...abc, textPaddingLeft : newValue})
        break;
      case 'Text Right Padding':
        setAbc({...abc, textPaddingRight : newValue})
        break;
      
        // 
       
        //         
      default:
        break;

        
    


    }
    
    if (action === 'Text Size' || action === 'Text Padding' || abc.splitTextPadding) {
      document.querySelector('.accordion-body-main').style.height = 'auto';
    }
  }

  //
  return (
    <>
      {/*  */}

      {/*  */}

      <div className="main px-4 pt-4 flex justify-center flex-col w-full z-50 bg-white">
        {/* Accordion  */}
        <div
          className={`accordion w-full overflow-hidden`}
          style={{
            ...(abc.BgCheck? {background: abc.parentGraCheck ? `linear-gradient(${abc.gradDeg}deg,${abc.bgColor},${abc.gradSecondaryColor})` : abc.bgColor} : {background : 'none'}),
              
            // Border Width And  Split Border Width
            ...(!abc.splitBorder ? { borderWidth: `${abc.borderAcco}px` } :
              {
                borderWidth: `${abc.parentBorderTop}px ${abc.parentBorderRight}px ${abc.parentBorderBottom}px ${abc.parentBorderLeft}px`
              }),
            //
            borderStyle: 'solid',
            borderColor: abc.borderColor,
            // Border Radius And Split Border Radius
            
            ...(!abc.splitRadius ? {  borderRadius: `${abc.borderRadius}px` } :
              {
                borderRadius: `${abc.parentBTLR}px ${abc.parentBTRR}px ${abc.parentBBRR}px ${abc.parentBBLR}px` 
              }),
           
            // Padding And  Split Padding
            
            ...(!abc.splitPadding ? { padding: `${abc.paddingAcco}px` } :
              {
                padding: `${abc.parentPaddingTop}px ${abc.parentPaddingRight}px ${abc.parentPaddingBottom}px ${abc.parentPaddingLeft}px`
              }),
            // Margin And  Split Margin
            
            ...(!abc.splitMargin ? { margin: `${abc.marginAcco}px` } :
              {
                margin: `${abc.parentMarginTop}px ${abc.parentMarginRight}px ${abc.parentMarginBottom}px ${abc.parentMarginLeft}px`
              }),

            // 
          }}
        >
          {/* Accordion Header */}

          <div className="accordion-head flex justify-between items-center"
               style={{
                ...(abc.headerBgCheck? {background: abc.headerGraCheck ? `linear-gradient(${abc.headerGradDeg}deg,${abc.headerBg},${abc.headerGradColor})` : abc.headerBg} : {background : 'none'}),
                
                // Border Width And  Split Border Width
                ...(!abc.splitHeaderBorder ? { borderWidth: `${abc.headerBorderAcco}px` } :
                  {
                    borderWidth: `${abc.headerBorderTop}px ${abc.headerBorderRight}px ${abc.headerBorderBottom}px ${abc.headerBorderLeft}px`
                  }),
                //
                borderStyle: 'solid',
                borderColor: abc.headerBorderColor,
                // Border Radius And Split Border Radius
                
                ...(!abc.splitHeaderRadius ? {  borderRadius: `${abc.headerBorderRadius}px` } :
                  {
                    borderRadius: `${abc.headerBTLR}px ${abc.headerBTRR}px ${abc.headerBBRR}px ${abc.headerBBLR}px` 
                  }),
               
                // Padding And  Split Padding
                
                ...(!abc.splitHeaderPadding ? { padding: `${abc.headerPaddingAcco}px` } :
                  {
                    padding: `${abc.headerPaddingTop}px ${abc.headerPaddingRight}px ${abc.headerPaddingBottom}px ${abc.headerPaddingLeft}px`
                  }),
                // Margin And  Split Margin
                
                ...(!abc.splitHeaderMargin ? { margin: `${abc.headerMarginAcco}px` } :
                  {
                    margin: `${abc.headerMarginTop}px ${abc.headerMarginRight}px ${abc.headerMarginBottom}px ${abc.headerMarginLeft}px`
                  }),
    
                // 
              }}
          
          >
            <div className="heading-main flex justify-center items-center">
              {/* Accordion Header Icon */}
             {abc.headerIconShow? <span className="head-icon mr-[10px]">
                <svg
                  style={{width: `${abc.headerIconSize}px`, aspectRatio: 1/1}}
                  className= 'header-icon'
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.02513 2.05023C0.658291 3.41706 0.658291 5.63314 2.02513 6.99997L8.00004 12.9749L13.9749 6.99997C15.3417 5.63314 15.3417 3.41706 13.9749 2.05023C12.608 0.683392 10.392 0.683392 9.02513 2.05023L8.00004 3.07539L6.97487 2.05023C5.60804 0.683392 3.39196 0.683392 2.02513 2.05023Z"
                    stroke= {abc.headerIconColor}
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span> : ''}

              <h4 className="heading" style={{fontSize : `${abc.headingSize}px`, color : abc.headingColor}}>
                Label
              </h4>
            </div>
            {/* Accordion Close/Open Btn */}
            <div className="collapse-btn">
              <span className="cursor-pointer" onClick={toggleAccordion} onMouseEnter= {handleAuto} >
                <svg
                  className={'ease-in duration-300 close-icon'}
                  style={{ transform : `rotate(${rotateDeg}deg)`, width : `${abc.collapseBtnSize}px`, aspectRatio: 1/1}}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 13L10 8L5 13"
                    stroke= {abc.collapseBtnColor}
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* Accordion Body */}
          <div className="accordion-body-main overflow-hidden ease-in duration-300"
          style={{
            height : `${abc.accordionHeight}px`,
            ...(abc.bodyBgCheck? {background: abc.bodyGraCheck ? `linear-gradient(${abc.bodyGradDeg}deg,${abc.bodyBg},${abc.bodyGradColor})` : abc.bodyBg} : {background : 'none'}),
            
            // Border Width And  Split Border Width
            ...(!abc.splitBodyBorder ? { borderWidth: `${abc.bodyBorderAcco}px` } :
              {
                borderWidth: `${abc.bodyBorderTop}px ${abc.bodyBorderRight}px ${abc.bodyBorderBottom}px ${abc.bodyBorderLeft}px`
              }),
            //
            borderStyle: 'solid',
            borderColor: abc.bodyBorderColor,
            // Border Radius And Split Border Radius
            
            ...(!abc.splitBodyRadius ? {  borderRadius: `${abc.bodyBorderRadius}px` } :
              {
                borderRadius: `${abc.bodyBTLR}px ${abc.bodyBTRR}px ${abc.bodyBBRR}px ${abc.bodyBBLR}px` 
              }),
           
            // Padding And  Split Padding
            
            ...(!abc.splitBodyPadding ? { padding: `${abc.bodyPaddingAcco}px` } :
              {
                padding: `${abc.bodyPaddingTop}px ${abc.bodyPaddingRight}px ${abc.bodyPaddingBottom}px ${abc.bodyPaddingLeft}px`
              }),
            // Margin And  Split Margin
            
            ...(!abc.splitBodyMargin ? { margin: `${abc.bodyMarginAcco}px` } :
              {
                margin: `${abc.bodyMarginTop}px ${abc.bodyMarginRight}px ${abc.bodyMarginBottom}px ${abc.bodyMarginLeft}px`
              }),

            // 
          }}
          >
            <div className="accordion-body">
              <div className="accordion-card">
                <div className="accordion-items">
                  <p style={{
                    fontSize: `${abc.textSize}px`, color: abc.textColor,
                    ...(!abc.splitTextPadding? {padding : `${abc.textPadding}px`} : { padding : `${abc.textPaddingTop}px ${abc.textPaddingRight}px ${abc.textPaddingBottom}px ${abc.textPaddingLeft}px`})
                  }}>
                    This is some subtext which appears after expanding the
                    accordion.
                  </p>
                  <p style={{
                    fontSize: `${abc.textSize}px`, color: abc.textColor,
                    ...(!abc.splitTextPadding? {padding : `${abc.textPadding}px`} : { padding : `${abc.textPaddingTop}px ${abc.textPaddingRight}px ${abc.textPaddingBottom}px ${abc.textPaddingLeft}px`})
                  }}>
                    This is some subtext which appears after expanding the
                    accordion.
                  </p>
                  <p style={{
                    fontSize: `${abc.textSize}px`, color: abc.textColor,
                    ...(!abc.splitTextPadding? {padding : `${abc.textPadding}px`} : { padding : `${abc.textPaddingTop}px ${abc.textPaddingRight}px ${abc.textPaddingBottom}px ${abc.textPaddingLeft}px`})
                  }}>
                    This is some subtext which appears after expanding the
                    accordion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      {/*  */}

      {/*  */}

      {/*  */}

      <div className="px-4 mt-5">
        <Tabs>
          <TabList>
            <Tab>Parent</Tab>
            <Tab>Header</Tab>
            <Tab>Header Content</Tab>
            <Tab>Body</Tab>
            <Tab>Body Content</Tab>
            <Tab>Get Code</Tab>
          </TabList>
          <div className="md:px-12 px-3">
            <TabPanel>
              <div>
                <AccordionContent
                  title={"Parent"}
                  // states with props
                  bgColor={abc.bgColor}
                  BgCheck={abc.BgCheck}
                  // 
                  
                  gradiendSecondaryColor= {abc.gradSecondaryColor}
                  gradDeg ={abc.gradDeg}

                  // Toggles state with props when the tab is selected  or when the tab is unselected
                  splitPadding={abc.splitPadding}
                  splitMargin={abc.splitMargin}
                  splitBorder={abc.splitBorder}
                  splitRadius={abc.splitRadius}
                  GradientCheck={abc.parentGraCheck}
                  // Margin and Split margin values
                  margin={abc.marginAcco}
                  marginTop={abc.parentMarginTop}
                  marginLeft={abc.parentMarginLeft}
                  marginRight={abc.parentMarginRight}
                  marginBottom={abc.parentMarginBottom}
                  // Margin and Split margin values
                  padding={abc.paddingAcco}
                  paddingTop={abc.parentPaddingTop}
                  paddingLeft={abc.parentPaddingLeft}
                  paddingRight={abc.parentPaddingRight}
                  paddingBottom={abc.parentPaddingBottom}
                  // Border ,Border Radius ,Border Color
                  borderColor={abc.borderColor}
                  borderWidth={abc.borderAcco}
                  borderTop={abc.parentBorderTop}
                  borderLeft={abc.parentBorderLeft}
                  borderRight={abc.parentBorderRight}
                  borderBottom={abc.parentBorderBottom}
                  borderRadius={abc.borderRadius}
                  borderTLRadius = {abc.parentBTLR}
                  borderTRRadius = {abc.parentBTRR}
                  borderBLRadius = {abc.parentBBLR}
                  borderBRRadius = {abc.parentBBRR}
                  // 
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <AccordionContent
                  title={"Header"}
                  // states with props
                  BgCheck={abc.headerBgCheck}
                  bgColor={abc.headerBg}
                  splitPadding={abc.splitHeaderPadding}
                  splitMargin={abc.splitHeaderMargin}
                  splitBorder={abc.splitHeaderBorder}
                  splitRadius={abc.splitHeaderRadius}
                  GradientCheck={abc.headerGraCheck}
                  // 
                  gradiendSecondaryColor={abc.headerGradColor}
                  headerGradDeg ={abc.headerGradDeg}
                   // Margin and Split margin values
                  margin={abc.headerMarginAcco}
                  marginTop={abc.headerMarginTop}
                  marginLeft={abc.headerMarginLeft}
                  marginRight={abc.headerMarginRight}
                  marginBottom={abc.headerMarginBottom}
                  // Margin and Split margin values
                  padding={abc.headerPaddingAcco}
                  paddingTop={abc.headerPaddingTop}
                  paddingLeft={abc.headerPaddingLeft}
                  paddingRight={abc.headerPaddingRight}
                  paddingBottom={abc.headerPaddingBottom}
                  // Border ,Border Radius ,Border Color
                  borderColor={abc.headerBorderColor}
                  borderWidth={abc.headerBorderAcco}
                  borderTop={abc.headerBorderTop}
                  borderLeft={abc.headerBorderLeft}
                  borderRight={abc.headerBorderRight}
                  borderBottom={abc.headerBorderBottom}
                  borderRadius={abc.headerBorderRadius}
                  borderTLRadius = {abc.headerBTLR}
                  borderTRRadius = {abc.headerBTRR}
                  borderBLRadius = {abc.headerBBLR}
                  borderBRRadius = {abc.headerBBRR}
                  // 
                  //
                />
              </div>

            </TabPanel>
            <TabPanel>
              <div>
                <h1 className="font-semibold text-3xl my-7">Header Content</h1>
                <div className="xsm:block flex justify-between items-start ">
                  <div className="xsm:w-full w-2/5 max-w-[640px]">
                    {/* 1 */}
                    <div className="accordion_grid mb-4">
                      <h1>Heading Size :</h1>
                      <div className="lg:text-center">
                        <input
                          type="number"
                          name=""
                          id=""
                          value={abc.headingSize}
                          placeholder="0"
                          className="text-center style-1 outline-none"
                          onChange={(e)=>{ handleChange('Heading Size', e.target.value) }}
                        />
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="accordion_grid mb-4">
                      <h1>Heading Color :</h1>
                      <div className="lg:text-center">
                        <input
                        className="cursor-pointer"
                          type="color"
                          name=""
                          id=""
                          value={abc.headingColor}
                          onChange={(e) => {handleChange('Heading Color', e.target.value)}}
                        />
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="accordion_grid mb-4">
                      <h1>Collapse Btn Size :</h1>
                      <div className="lg:text-center">
                        <input
                          type="number"
                          name=""
                          id=""
                          value={abc.collapseBtnSize}
                          placeholder="0"
                          className="text-center style-1 outline-none"
                          onChange={(e)=>{handleChange('Collapse Btn Size',e.target.value)}}
                        />
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="accordion_grid mb-4">
                      <h1>Collapse Btn Color :</h1>
                      <div className="lg:text-center">
                        <input
                        className="cursor-pointer"
                          type="color"
                          name=""
                          id=""
                          value={abc.collapseBtnColor}
                          onChange = {(e) => {handleChange('Collapse Btn Color', e.target.value)}}
                        />
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  <div className="xsm:w-full w-2/5 max-w-[640px]">
                    {/* 1 */}
                    <div className="accordion_grid mb-4">
                      <h1>Header Icon :</h1>
                      <div className="lg:text-center">
                        <div className="text-center">
                          <span className="w-6 aspect-square bg-slate-100 border cursor-pointer rounded relative inline-flex items-center justify-center" onClick={()=>{setAbc({...abc, headerIconShow : !abc.headerIconShow })}}>
                          { abc.headerIconShow ? 
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.66669 8.20914L6.43792 11.9804L13.9804 4.4379"
                                stroke="#14142B"
                                strokeLinecap="round"
                              />
                            </svg> : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* 2 */}
                    {abc.headerIconShow ? 
                    <div className="accordion_grid mb-4">
                      <h1>Header Icon Size :</h1>
                      <div className="lg:text-center">
                        <input
                          type="number"
                          name=""
                          id=""
                          value={abc.headerIconSize}
                          placeholder="0"
                          className="text-center style-1 outline-none"
                          onChange={(e)=>{handleChange('Header Icon Size', e.target.value)}}
                        />
                      </div>
                    </div> : ''}
                    {/* 3 */}
                   { abc.headerIconShow ?  <div className="accordion_grid mb-4">
                      <h1>Header Icon Color :</h1>
                      <div className="lg:text-center">
                        <input
                        className="cursor-pointer"
                          type="color"
                          name=""
                          id=""
                          value={abc.headerIconColor}
                          onChange={(e) => {handleChange('Header Icon Color', e.target.value)}}
                        />
                      </div>
                    </div> : ''}
                    {/*  */}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div> 
                <AccordionContent
                  title={"Body"}

                  // states with props
                  BgCheck={abc.bodyBgCheck}
                  splitPadding={abc.splitBodyPadding}
                  splitMargin={abc.splitBodyMargin}
                  splitBorder={abc.splitBodyBorder}
                  splitRadius={abc.splitBodyRadius}
                  GradientCheck={abc.bodyGraCheck}
                  // 
                  bgColor={abc.bodyBg}                  
                  gradiendSecondaryColor={abc.bodyGradColor}
                  headerGradDeg ={abc.bodyGradDeg}
                   // Margin and Split margin values
                  margin={abc.bodyMarginAcco}
                  marginTop={abc.bodyMarginTop}
                  marginLeft={abc.bodyMarginLeft}
                  marginRight={abc.bodyMarginRight}
                  marginBottom={abc.bodyMarginBottom}
                  // Margin and Split margin values
                  padding={abc.bodyPaddingAcco}
                  paddingTop={abc.bodyPaddingTop}
                  paddingLeft={abc.bodyPaddingLeft}
                  paddingRight={abc.bodyPaddingRight}
                  paddingBottom={abc.bodyPaddingBottom}
                  // Border ,Border Radius ,Border Color
                  borderColor={abc.bodyBorderColor}
                  borderWidth={abc.bodyBorderAcco}
                  borderTop={abc.bodyBorderTop}
                  borderLeft={abc.bodyBorderLeft}
                  borderRight={abc.bodyBorderRight}
                  borderBottom={abc.bodyBorderBottom}
                  borderRadius={abc.bodyBorderRadius}
                  borderTLRadius = {abc.bodyBTLR}
                  borderTRRadius = {abc.bodyBTRR}
                  borderBLRadius = {abc.bodyBBLR}
                  borderBRRadius = {abc.bodyBBRR}
                  // 
                /> 
              </div>
            </TabPanel>
            <TabPanel>
              <div className="my-7">
                <h1 className="font-semibold text-3xl mb-6">Body Content</h1>
                {/* 1 */}
                <div className="mb-4 flex items-center">
                      <h1>Text Size :</h1>
                      <div className="text-center ml-4">
                        <input
                          type="number"
                          name=""
                          id=""
                          value={abc.textSize}
                          placeholder="0"
                          className="text-center style-1 outline-none"
                          onChange={(e)=>{ handleChange('Text Size', e.target.value) }}
                        />
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="flex items-center mb-4">
                      <h1>Text Color :</h1>
                      <div className="text-center ml-16">
                        <input
                        className="cursor-pointer"
                          type="color"
                          name=""
                          id=""
                          value={abc.textColor}
                          onChange={(e) => {handleChange('Text Color', e.target.value)}}
                        />
                      </div>
                    </div>
                    {/* 3 */}

                    <div className="accordion_padding flex items-center mb-4">
              <h1>Text Padding :</h1>
              <div className="border-form">
                <div className="all_flex style-1 relative ml-4">
                  <span className={`style-1-svg ${abc.splitTextPadding ? 'bg-[#0000001a]' : 'hover:bg-[#0000001a]'}`} onClick={()=>{ setAbc({...abc, splitTextPadding : !abc.splitTextPadding}) }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 0.5H2C1.44772 0.5 1 0.947715 1 1.5V3.5"
                        stroke="black"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 10.5L10 10.5C10.5523 10.5 11 10.0523 11 9.5L11 7.5"
                        stroke="black"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1 7.5L1 9.5C1 10.0523 1.44772 10.5 2 10.5H4"
                        stroke="black"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 3.5L11 1.5C11 0.947715 10.5523 0.5 10 0.5L8 0.5"
                        stroke="black"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="number"
                    min={0}
                    name=""
                    id=""
                    placeholder="Enter a value..."
                    className="style-1-input"
                    disabled={abc.splitTextPadding}
                    value={abc.textPadding}
                    onChange={(e)=>{handleChange('Text Padding', e.target.value)}}
                  />
                </div>
                <div className={`all_flex justify-evenly mt-3 ml-4 bg-[#F4F4F4] rounded-md overflow-hidden ease-out duration-300 ${abc.splitTextPadding ? 'h-20 py-2' : 'h-0 py-0'}`}>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">Top</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={abc.textPaddingTop}
                      onChange={(e)=>{handleChange('Text Top Padding', e.target.value)}}
                    />
                  </div>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">Left</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={abc.textPaddingLeft}
                      onChange={(e)=>{handleChange('Text Left Padding', e.target.value)}}
                    />
                  </div>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">Bottom</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={abc.textPaddingBottom}
                      onChange={(e)=>{handleChange('Text Bottom Padding', e.target.value)}}
                    />
                  </div>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">Right</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={abc.textPaddingRight}
                      onChange={(e)=>{handleChange('Text Right Padding', e.target.value)}}
                    />
                  </div>
                </div>
              </div>
            </div>

                    {/* 
                     */}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <CheetSheet />
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </>
  );
}
