import React, { useContext } from "react";
import NoteContext from "../context/accordionState/NoteContext";
import { MuiColorInput } from 'mui-color-input'
// import PropTypes from 'prop-types';

export default function AccordionContent(props) {
// eslint-disable-next-line 
  const [abc, setAbc] = useContext(NoteContext);

 
  const handleChange = (action, newValue) => {

    // 
    if( props.title === 'Body'){
      document.querySelector('.accordion-body-main').style.height = 'auto';
    }
    // 

    const key = action;
    
    switch (key) {
     
      case `${props.title}Bg`:
        // 
        if (key === 'ParentBg') {
          setAbc({ ...abc, bgColor: newValue });
        } else if (key === 'HeaderBg') {
          setAbc({ ...abc, headerBg: newValue });
          console.log('Hy! Its me Header Bg')
        } else if (key === 'BodyBg') {
          setAbc({ ...abc, bodyBg: newValue });
        }
        // 
        break;
      case `${props.title}GardientDegree`:
        // 
        if (key === 'ParentGardientDegree') {
          setAbc({ ...abc, gradDeg: newValue });
        }
        else if (key === 'HeaderGardientDegree') {
          setAbc({ ...abc, headerGradDeg: newValue });
        }
        else if (key === 'BodyGardientDegree') {
          setAbc({ ...abc, bodyGradDeg: newValue });
        }
        //

        break;
      case `${props.title}GradientPrimaryColor`:
        //
        if (key === 'ParentGradientPrimaryColor') {
          setAbc({ ...abc, bgColor: newValue });
        }
        else if (key === 'HeaderGradientPrimaryColor') {
          setAbc({ ...abc, headerBg: newValue });
        }
        else if (key === 'BodyGradientPrimaryColor') {
          setAbc({ ...abc, bodyBg: newValue });
        }
        //
      break;
      case `${props.title}GradientSecondaryColor`:
        //
        if (key === 'ParentGradientSecondaryColor') {
          setAbc({ ...abc, gradSecondaryColor: newValue });
        }
        else if (key === 'HeaderGradientSecondaryColor') {
          setAbc({ ...abc, headerGradColor: newValue });
        }
        else if (key === 'BodyGradientPrimaryColor') {
          setAbc({ ...abc, bodyGradColor: newValue });
        }
        break;
      case 'ParentGradPanel':
        setAbc({...abc, parentGraCheck : !abc.parentGraCheck});
      break;
      case 'HeaderGradPanel':
        setAbc({...abc, headerGraCheck : !abc.headerGraCheck});
      break;
      case 'BodyGradPanel':
        setAbc({...abc, bodyGraCheck : !abc.bodyGraCheck});
      break;
      case 'ParentBorderPanel':
        setAbc({...abc, splitBorder: !abc.splitBorder});
      break;
      case 'ParentMarPanel':
        setAbc({...abc, splitMargin: !abc.splitMargin});
      break;
      case 'ParentRadPanel':
        setAbc({...abc, splitRadius : !abc.splitRadius});
      break;
      case 'ParentPadPanel':
        setAbc({...abc, splitPadding : !abc.splitPadding});
      break;
      case 'HeaderBorderPanel':
        setAbc({...abc, splitHeaderBorder: !abc.splitHeaderBorder});
      break;
      case 'HeaderMarPanel':
        setAbc({...abc, splitHeaderMargin: !abc.splitHeaderMargin});
      break;
      case 'HeaderRadPanel':
        setAbc({...abc, splitHeaderRadius : !abc.splitHeaderRadius});
      break;
      case 'HeaderPadPanel':
        setAbc({...abc, splitHeaderPadding : !abc.splitHeaderPadding});
      break;
      case 'BodyBorderPanel':
        setAbc({...abc, splitBodyBorder: !abc.splitBodyBorder});
      break;
      case 'BodyMarPanel':
        setAbc({...abc, splitBodyMargin: !abc.splitBodyMargin});
      break;
      case 'BodyRadPanel':
        setAbc({...abc, splitBodyRadius : !abc.splitBodyRadius});
      break;
      case 'BodyPadPanel':
        setAbc({...abc, splitBodyPadding : !abc.splitBodyPadding});
      break;
      case `${props.title}BorderColor`:
        //
        if (key === 'ParentBorderColor') {
        setAbc({...abc, borderColor :newValue});
      }
        else if (key === 'HeaderBorderColor') {
        setAbc({...abc, headerBorderColor :newValue});
      }
        else if (key === 'BodyBorderColor') {
        setAbc({...abc, bodyBorderColor :newValue});
      }
        // 
      break;
      case `${props.title}Padding`:
        // 
        if (key === 'ParentPadding') {
          setAbc({ ...abc, paddingAcco: newValue });
        }
        else if (key === 'BodyPadding') {
          setAbc({ ...abc, bodyPaddingAcco: newValue });
        }
        else if (key === 'HeaderPadding') {
          setAbc({ ...abc, headerPaddingAcco: newValue });
        }
        // 
        break;

      case `${props.title}Margin`:
        //
        if (key === 'ParentMargin') {
          setAbc({ ...abc, marginAcco: newValue });
        }
        else if (key === 'HeaderMargin') {
          setAbc({ ...abc, headerMarginAcco: newValue });
        }
        else if (key === 'BodyMargin') {
          setAbc({ ...abc, bodyMarginAcco: newValue });
        }
        // 

        break;

      // Padding and Split Padding values changed
      case `${props.title}PaddingTop`:
        if (key === 'ParentPaddingTop') {
          setAbc({ ...abc, parentPaddingTop: newValue });
        }
        else if (key === 'HeaderPaddingTop') {
          setAbc({ ...abc, headerPaddingTop: newValue });
        }
        else if (key === 'BodyPaddingTop') {
          setAbc({ ...abc, bodyPaddingTop: newValue });
        }

        break;
      case `${props.title}PaddingLeft`:
        // 
        if (key === 'ParentPaddingLeft') {
          setAbc({ ...abc, parentPaddingLeft: newValue });
        }
        else if (key === 'HeaderPaddingLeft') {
          setAbc({ ...abc, headerPaddingLeft: newValue });
        }
        else if (key === 'BodyPaddingLeft') {
          setAbc({ ...abc, bodyPaddingLeft: newValue });
        }
        // 
        break;
      case `${props.title}PaddingBottom`:

      if (key === 'ParentPaddingBottom') { 
        setAbc({...abc, parentPaddingBottom : newValue});
        }
      else if (key === 'HeaderPaddingBottom') {
        setAbc({...abc, headerPaddingBottom : newValue});
        }
      else if (key === 'BodyPaddingBottom') {
        setAbc({...abc, bodyPaddingBottom : newValue});
        }

      break;
      case `${props.title}PaddingRight`:

      if (key === 'ParentPaddingRight') {
        setAbc({...abc, parentPaddingRight : newValue});
}
      else if (key === 'HeaderPaddingRight') {
        setAbc({...abc, headerPaddingRight : newValue});
}
      else if (key === 'BodyPaddingRight') {
        setAbc({...abc, bodyPaddingRight : newValue});
}

      break;

      // Margin and Split Margin values changed
      case `${props.title}MarginTop`:
        if (key === 'ParentMarginTop') {
        setAbc({...abc, parentMarginTop : newValue});
}
        else if (key === 'HeaderMarginTop') {
        setAbc({...abc, headerMarginTop : newValue});
}
        else if (key === 'BodyMarginTop') {
        setAbc({...abc, bodyMarginTop : newValue});
}
        
      break;
      case `${props.title}MarginLeft`:

      if (key === 'ParentMarginLeft') {
        setAbc({...abc, parentMarginLeft : newValue});
        }
      else if (key === 'HeaderMarginLeft') {
        setAbc({...abc, headerMarginLeft : newValue});
}
      else if (key === 'BodyMarginLeft') {
        setAbc({...abc, bodyMarginLeft : newValue});
}
// 
      break;
      case `${props.title}MarginBottom`:
        if (key === 'ParentMarginBottom') {
        setAbc({...abc, parentMarginBottom : newValue});
      }
        else if (key === 'HeaderMarginBottom') {
        setAbc({...abc, headerMarginBottom : newValue});
      }
        else if (key === 'BodyMarginBottom') {
        setAbc({...abc, bodyMarginBottom : newValue});
      }
      break;
      case `${props.title}MarginRight`:

      if (key === 'ParentMarginRight') {
        setAbc({...abc, parentMarginRight : newValue});
        }
      else if (key === 'HeaderMarginRight') {
        setAbc({...abc, headerMarginRight : newValue});
        }
      else if (key === 'BodyMarginRight') {
        setAbc({...abc, bodyMarginRight : newValue});
        }
      break;

      // Fall through
      case `${props.title}Border`:
        if (key === 'ParentBorder') {
          setAbc({...abc, borderAcco : newValue});
          }
        else if (key === 'HeaderBorder') {
          setAbc({...abc, headerBorderAcco : newValue});
          }
        else if (key === 'BodyBorder') {
          setAbc({...abc, bodyBorderAcco : newValue});
          }
        
      break;
      case `${props.title}BorderTop`:
        if (key === 'ParentBorderTop') {
          setAbc({...abc, parentBorderTop : newValue});
          }
        else if (key === 'HeaderBorderTop') {
          setAbc({...abc, headerBorderTop : newValue});
          }
        else if (key === 'BodyBorderTop') {
          setAbc({...abc, bodyBorderTop : newValue});
          }

      break;
      case `${props.title}BorderBottom`:
        if (key === 'ParentBorderBottom') {
          setAbc({...abc, parentBorderBottom : newValue});
          }
        else if (key === 'HeaderBorderBottom') {
          setAbc({...abc, headerBorderBottom : newValue});
          }
        else if (key === 'BodyBorderBottom') {
          setAbc({...abc, bodyBorderBottom : newValue});
          }

      break;
      case `${props.title}BorderLeft`:
        // 
        if (key === 'ParentBorderLeft') {
          setAbc({...abc, parentBorderLeft : newValue});
          }
        else if (key === 'HeaderBorderLeft') {
          setAbc({...abc, headerBorderLeft : newValue});
          }
        else if (key === 'BodyBorderLeft') {
          setAbc({...abc, bodyBorderLeft : newValue});
          }
// 
      break;
      case `${props.title}BorderRight`:
        // 
        if (key === 'ParentBorderRight') {
          setAbc({...abc, parentBorderRight : newValue});
          }
        else if (key === 'HeaderBorderRight') {
          setAbc({...abc, headerBorderRight : newValue});
          }
        else if (key === 'BodyBorderRight') {
          setAbc({...abc, bodyBorderRight : newValue});
          }

          // 
      break;

      // Border Radius
      case `${props.title}BorderRadius`:
        if (key === 'ParentBorderRadius') {
          setAbc({...abc, borderRadius : newValue});
        }
        else if (key === 'HeaderBorderRadius') {
          setAbc({...abc, headerBorderRadius : newValue});
        }
        else if (key === 'BodyBorderRadius') {
          setAbc({...abc, bodyBorderRadius : newValue});
        }
        break;
        
      case `${props.title}BorderTopRightRadius`:
        // 

        if (key === 'ParentBorderTopRightRadius') {
          setAbc({...abc, parentBTRR : newValue});
        }
        else if (key === 'HeaderBorderTopRightRadius') {
          setAbc({...abc, headerBTRR : newValue});
        }
        else if (key === 'BodyBorderTopRightRadius') {
          setAbc({...abc, bodyBTRR : newValue});
        }

        // 
      break;
      case `${props.title}BorderTopLeftRadius`:
        if (key === 'BodyBorderTopLeftRadius') { 
          setAbc({...abc, parentBTLR : newValue});
        }
        else if (key === 'HeaderBorderTopLeftRadius') {
          setAbc({...abc, headerBTLR : newValue});
        }
        else if (key === 'ParentBorderTopLeftRadius') {
          setAbc({...abc, bodyBTLR : newValue});
        }


      break;
      case `${props.title}BorderBottomRightRadius`:
        if (key === 'ParentBorderBottomRightRadius') {
          setAbc({...abc, parentBBRR : newValue});
        }
        else if (key === 'HeaderBorderBottomRightRadius') {
          setAbc({...abc, headerBBRR : newValue});
        }
        else if (key === 'BodyBorderBottomRightRadius') {
          setAbc({...abc, bodyBBRR : newValue});
        }
        
      break;
      case `${props.title}BorderBottomLeftRadius`:
        if(key === 'ParentBorderBottomLeftRadius'){
          setAbc({...abc, parentBBLR : newValue});
        }
        else if(key === 'HeaderBorderBottomLeftRadius'){
          setAbc({...abc, headerBBLR : newValue});
        }
        else if(key === 'BodyBorderBottomLeftRadius'){
          setAbc({...abc, bodyBBLR : newValue});
        }
        
      break;
      case `${props.title}BgCheck`:
        if(key === 'ParentBgCheck'){
          console.log(`${props.title}`)
          setAbc({...abc, BgCheck : !abc.BgCheck});
        }
        else if(key === 'HeaderBgCheck'){
          console.log(`${props.title}`)
          setAbc({...abc, headerBgCheck : !abc.headerBgCheck});
        }
        else if(key === 'BodyBgCheck'){
          console.log(`${props.title}`)
          setAbc({...abc, bodyBgCheck : !abc.bodyBgCheck});
        }
        
      break;
    
      default: 
      console.log('Unknown option:' + key );    
        break;
    }


    // 
  } 

  // 
  return (
    <>
      <div>
        <h1 className="text-3xl my-7 font-semibold">Accordion {props.title} Styling</h1>
        <div className="parent-form block sm:grid lg:gap-x-4 md:gap-x-10 gap-x-4 xl:justify-between" style={{gridTemplateColumns: 'repeat(2, minmax(0, 640px)) '}}>
          <div className="column_1 box-border">
            <div className="accordion_bg_div accordion_grid mb-4 ">
              <h5>{props.title} Background :</h5>
              <div className="flex items-center md:my-4">
              <span className="w-6 mr-3 aspect-square bg-slate-100 border cursor-pointer rounded relative inline-flex items-center justify-center" onClick={()=>{handleChange(`${props.title}BgCheck`)}}>
                  {props.BgCheck ? <svg
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
              <MuiColorInput value={props.bgColor} onChange={(color)=>{handleChange(`${props.title}Bg`, color)}} style={{
                ...(props.BgCheck? {pointerEvents: 'all', cursor: 'pointer', opacity: 1}: {pointerEvents: 'none', cursor: 'no-drop', opacity: 0.5}) }} />
              </div>
            </div>
            <div className="accordion_gradient grid grid-cols-2 mb-4">
              <h1>Gradient :</h1>
              <div className="text-center w-full">
                <span className="w-6 aspect-square bg-slate-100 border cursor-pointer rounded relative inline-flex items-center justify-center" onClick={()=>{handleChange(`${props.title}GradPanel`, null)}}>
                  {props.GradientCheck ? <svg
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
            <div className={`accordion_bg_gradient accordion_grid overflow-hidden ease-out duration-300 ${props.GradientCheck ? 'h-7 mb-4' : 'h-0 mb-0'} `}>
              <h1>Background Gradient :</h1>
              <div className="flex justify-between items-center md:my-4">
                <div className="all_flex px-2">
                  <span className="mr-3">From</span>
                  <input
                  className="cursor-pointer"
                    type="color"
                    name=""
                    id=""
                    value={props.bgColor}
                    onChange={(e) => {
                      handleChange(`${props.title}GradientPrimaryColor`, e.target.value)
                    }}
                  />
                </div>
                <div className="all_flex px-2">
                  <span className="mr-3">To</span>
                  <input
                  className="cursor-pointer"
                    type="color"
                    name=""
                    id=""
                    value={props.gradiendSecondaryColor}
                    onChange={(e) => {
                      handleChange(`${props.title}GradientSecondaryColor`, e.target.value)
                    }}
                  />
                </div>
                <div className="input">
                  <input
                    type="number"
                    name=""
                    id=""
                    className="style-1-input w-10"
                    value={props.gradDeg}
                    step={5}
                    onChange={(e)=>{handleChange(`${props.title}GardientDegree` , e.target.value)}}
                    />
                </div>
              </div>
            </div>
            <div className="accordion_border accordion_grid mb-4">
              <h5>{props.title} Border :</h5>
              <div className="border-form md:my-4">
                <div className="all_flex style-1 relative">
                  <span className={`style-1-svg ${props.splitBorder ? 'bg-[#0000001a]' : 'hover:bg-[#0000001a]'}`} onClick={()=>{handleChange(`${props.title}BorderPanel`)}}>
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
                  <input className="style-1-input" min={0} type="number" name="" id="" value={props.borderWidth} disabled={props.splitBorder} onChange={(e)=>{handleChange(`${props.title}Border`, e.target.value)}} />
                </div>
                <div className={`all_flex justify-evenly mt-3 bg-[#F4F4F4] rounded-md overflow-hidden ease-out duration-300 ${props.splitBorder ? 'h-20 py-2' : 'h-0 py-0'}`}>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">Top</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={props.borderTop}
                      onChange={(e)=>{handleChange(`${props.title}BorderTop` , e.target.value)}}
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
                      value={props.borderLeft}
                      onChange={(e)=>{handleChange(`${props.title}BorderLeft` , e.target.value)}}
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
                      value={props.borderBottom}
                      onChange={(e)=>{handleChange(`${props.title}BorderBottom` , e.target.value)}}
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
                      value={props.borderRight}
                      onChange={(e)=>{handleChange(`${props.title}BorderRight` , e.target.value)}}
                      
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion_margin accordion_grid mb-4">
              <h1>{props.title} Margin :</h1>
              <div className="margin-form md:my-4">
                <div className="all_flex style-1 relative">
                  <span className={`style-1-svg ${props.splitMargin ? 'bg-[#0000001a]' : 'hover:bg-[#0000001a]'}`} onClick={()=>{handleChange(`${props.title}MarPanel`)}}>
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
                    disabled={props.splitMargin ? true : false}
                    value={props.margin}
                    onChange={(e)=>{handleChange(`${props.title}Margin`, e.target.value)}}
                  />
                </div>
                <div className={`all_flex justify-evenly mt-3 bg-[#F4F4F4] rounded-md overflow-hidden ease-out duration-300 ${props.splitMargin ? 'h-20 py-2' : 'h-0 py-0'}`}>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">Top</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={props.marginTop}
                      onChange={(e)=>{handleChange(`${props.title}MarginTop` , e.target.value)}}
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
                      value={props.marginLeft}
                      onChange={(e)=>{handleChange(`${props.title}MarginLeft`, e.target.value)}}
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
                      value={props.marginBottom}
                      onChange={(e)=>{handleChange(`${props.title}MarginBottom`, e.target.value)}}
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
                      value={props.marginRight}
                      onChange={(e)=>{handleChange(`${props.title}MarginRight`, e.target.value)}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column_2 box-border">
            <div className="accordion-border-color accordion_grid mb-4">
              <h1>Border Color :</h1>
              <div className="lg:text-center md:my-4">
                
              <MuiColorInput value={props.borderColor} onChange={(e)=>{handleChange(`${props.title}BorderColor`, e)}} />
              </div>
            </div>
            <div className="border_radius accordion_grid mb-4">
              <h1>Border Radius :</h1>
              <div className="border-form md:my-4">
                <div className="all_flex style-1 relative">
                  <span className={`style-1-svg ${props.splitRadius ? 'bg-[#0000001a]' : 'hover:bg-[#0000001a]'}`} onClick={()=>{handleChange(`${props.title}RadPanel`, null)}}>
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
                    disabled={props.splitRadius ? true : false}
                    value={props.borderRadius}
                    onChange={(e)=>{handleChange(`${props.title}BorderRadius`, e.target.value)}}
                  />
                </div>
                <div className={`all_flex justify-evenly mt-3 bg-[#F4F4F4] rounded-md overflow-hidden ease-out duration-300 ${props.splitRadius ? 'h-20 py-2' : 'h-0 py-0'}`}>

                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">TL</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={props.borderTLRadius}
                      onChange={(e)=>{handleChange(`${props.title}BorderTopLeftRadius`, e.target.value)}}
                    />
                  </div>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">TR</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={props.borderTRRadius}
                      onChange={(e)=>{handleChange(`${props.title}BorderTopRightRadius`, e.target.value)}}
                    />
                  </div>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">BL</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={props.borderBLRadius}
                      onChange={(e)=>{handleChange(`${props.title}BorderBottomLeftRadius`, e.target.value)}}
                    />
                  </div>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">BR</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={props.borderBRRadius}
                      onChange={(e)=>{handleChange(`${props.title}BorderBottomRightRadius`, e.target.value)}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion_padding accordion_grid mb-4">
              <h1>{props.title} Padding :</h1>
              <div className="border-form md:my-4">
                <div className="all_flex style-1 relative">
                  <span className={`style-1-svg ${props.splitPadding ? 'bg-[#0000001a]' : 'hover:bg-[#0000001a]'}`} onClick={()=>{handleChange(`${props.title}PadPanel`)}}>
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
                    disabled={props.splitPadding ? true : false}
                    value={props.padding}
                    onChange={(e)=>{handleChange(`${props.title}Padding`, e.target.value)}}
                  />
                </div>
                <div className={`all_flex justify-evenly mt-3 bg-[#F4F4F4] rounded-md overflow-hidden ease-out duration-300 ${props.splitPadding ? 'h-20 py-2' : 'h-0 py-0'}`}>
                  <div className="all_flex flex-col m-1">
                    <span className="count-input-title">Top</span>
                    <input
                      type="number"
                      min={0}
                      name=""
                      id=""
                      className="count-input"
                      placeholder="0"
                      value={props.paddingTop}
                      onChange={(e)=>{handleChange(`${props.title}PaddingTop`, e.target.value)}}
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
                      value={props.paddingLeft}
                      onChange={(e)=>{handleChange(`${props.title}PaddingLeft`, e.target.value)}}
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
                      value={props.paddingBottom}
                      onChange={(e)=>{handleChange(`${props.title}PaddingBottom`, e.target.value)}}
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
                      value={props.paddingRight}
                      onChange={(e)=>{handleChange(`${props.title}PaddingRight`, e.target.value)}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/*
AccordionContent.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  GradientCheck: PropTypes.bool.isRequired,
  gradiendSecondaryColor: PropTypes.string.isRequired,
  margin: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginLeft: PropTypes.number.isRequired,
  marginRight: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  paddingTop: PropTypes.number.isRequired,
  paddingLeft: PropTypes.number.isRequired,
  paddingRight: PropTypes.number.isRequired,
  paddingBottom: PropTypes.number.isRequired,
  borderWidth: PropTypes.number.isRequired,
  borderTop: PropTypes.number.isRequired,
  borderLeft: PropTypes.number.isRequired,
  borderRight: PropTypes.number.isRequired,
  borderBottom: PropTypes.number.isRequired,
  borderRadius: PropTypes.number.isRequired,
  borderTLRadius: PropTypes.number.isRequired,
  borderTRRadius: PropTypes.number.isRequired,
  borderBLRadius: PropTypes.number.isRequired,
  borderBRRadius: PropTypes.number.isRequired,
  //  
};
*/