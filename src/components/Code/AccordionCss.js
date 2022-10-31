import React, { useContext } from "react";
import NoteContext from "../../context/accordionState/NoteContext";

export default function AccordionCss() {
  // eslint-disable-next-line
  const [abc, setAbc] = useContext(NoteContext);
  // Parent Style
  const AccordionStyling = {
    ...(abc.BgCheck
      ? {
          background: abc.parentGraCheck
            ? `linear-gradient(${abc.gradDeg}deg,${abc.bgColor},${abc.gradSecondaryColor}); \n`
            : `${abc.bgColor} ;\n`,
        }
      : { background: "none ; \n" }),

    // Border Width And  Split Border Width
    ...(abc.borderAcco !== 0 || abc.splitBorder
      ? {
          ...(!abc.splitBorder
            ? {
                "border-width": `${abc.borderAcco}px; \n`,
                "border-style": "solid; \n",
                "border-color": `${abc.borderColor}; \n`,
              }
            : {
                ...(abc.parentBorderTop !== 0 ||
                abc.parentBorderRight !== 0 ||
                abc.parentBorderBottom !== 0 ||
                abc.parentBorderLeft !== 0
                  ? {
                      ...(abc.parentBorderTop === abc.parentBorderBottom &&
                      abc.parentBorderLeft === abc.parentBorderRight
                        ? {
                            "border-width": `${abc.parentBorderTop}px ${abc.parentBorderRight}px; \n`,
                            "border-style": "solid; \n",
                            "border-color": `${abc.borderColor}; \n`,
                          }
                        : {
                            "border-width": `${abc.parentBorderTop}px ${abc.parentBorderRight}px ${abc.parentBorderBottom}px ${abc.parentBorderLeft}px; \n`,
                            "border-style": "solid; \n",
                            "border-color": `${abc.borderColor};`,
                          }),
                    }
                  : null),
              }),
        }
      : {}),

    //

    // Border Radius And Split Border Radius
    ...(abc.borderRadius !== 0 || abc.splitRadius
      ? {
          ...(!abc.splitRadius
            ? { "border-radius": `${abc.borderRadius}px; \n` }
            : {
                ...(abc.parentBTLR !== 0 &&
                abc.parentBTRR !== 0 &&
                abc.parentBBRR !== 0 &&
                abc.parentBBLR !== 0
                  ? {
                      ...(abc.parentBTLR === abc.parentBBRR &&
                      abc.parentBTRR === abc.parentBBLR
                        ? {
                            "border-radius": `${abc.parentBTLR}px ${abc.parentBTRR}px; \n`,
                          }
                        : {
                            "border-radius": `${abc.parentBTLR}px ${abc.parentBTRR}px ${abc.parentBBRR}px ${abc.parentBBLR}px; \n`,
                          }),
                    }
                  : null),
              }),
        }
      : {}),

    // Padding And  Split Padding
    ...(abc.paddingAcco !== 0 || abc.splitPadding
      ? {
          ...(!abc.splitPadding
            ? { padding: `${abc.paddingAcco}px; \n` }
            : {
                ...(abc.parentPaddingBottom !== 0 ||
                abc.parentPaddingTop !== 0 ||
                abc.parentPaddingLeft !== 0 ||
                abc.parentPaddingRight !== 0
                  ? {
                      ...(abc.parentPaddingTop === abc.parentPaddingBottom &&
                      abc.parentPaddingLeft === abc.parentPaddingRight
                        ? {
                            padding: `${abc.parentPaddingTop}px ${abc.parentPaddingLeft}px; \n`,
                          }
                        : {
                            padding: `${abc.parentPaddingTop}px ${abc.parentPaddingRight}px ${abc.parentPaddingBottom}px ${abc.parentPaddingLeft}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),
    // Margin And  Split Margin
    ...(abc.marginAcco !== 0 || abc.splitMargin
      ? {
          ...(!abc.splitMargin
            ? { margin: `${abc.marginAcco}px; \n` }
            : {
                ...(abc.parentMarginTop !== 0 ||
                abc.parentMarginBottom !== 0 ||
                abc.parentMarginLeft !== 0 ||
                abc.parentMarginRight !== 0
                  ? {
                      ...(abc.parentMarginTop === abc.parentMarginBottom &&
                      abc.parentMarginLeft === abc.parentMarginRight
                        ? {
                            margin: `${abc.parentMarginTop}px ${abc.parentMarginLeft}px; \n`,
                          }
                        : {
                            margin: `${abc.parentMarginTop}px ${abc.parentMarginRight}px ${abc.parentMarginBottom}px ${abc.parentMarginLeft}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),
  };

  let ParentStyling = [];
  for (var key in AccordionStyling) {
    let dd = `${key} : ${AccordionStyling[key]} `;
    ParentStyling.push(dd);
  }

  // Header Styling

  const AccordionHead = {
    ...(abc.headerBgCheck
      ? {
          background : abc.headerGraCheck
            ? `linear-gradient(${abc.headerGradDeg}deg,${abc.headerBg},${abc.headerGradColor}); \n`
            : `${abc.headerBg}; \n`,
        }
      : { 'background': "none; \n" }),

    // Border Width And  Split Border Width
    ...(abc.headerBorderAcco !== 0 || abc.splitHeaderBorder
      ? {
          ...(!abc.splitHeaderBorder
            ? {
                "border-width": `${abc.headerBorderAcco}px; \n`,
                "border-style": "solid; \n",
                "border-color": abc.headerBorderColor,
              }
            : {
                ...(abc.headerBorderTop !== 0 ||
                abc.headerBorderBottom !== 0 ||
                abc.headerBorderLeft !== 0 ||
                abc.headerBorderRight !== 0
                  ? {
                      ...(abc.headerBorderTop === abc.headerBorderBottom &&
                      abc.headerBorderLeft === abc.headerBorderRight
                        ? {
                            "border-width": `${abc.headerBorderTop}px ${abc.headerBorderRight}px; \n`,
                            "border-style": "solid; \n",
                            "border-color": `${abc.headerBorderColor}; \n`,
                          }
                        : {
                            "border-width": `${abc.headerBorderTop}px ${abc.headerBorderRight}px ${abc.headerBorderBottom}px ${abc.headerBorderLeft}px; \n`,
                            "border-style": "solid; \n",
                            "border-color": `${abc.headerBorderColor} \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),
    //

    // Border Radius And Split Border Radius
    ...(abc.headerBorderRadius !== 0 || abc.splitHeaderRadius
      ? {
          ...(!abc.splitHeaderRadius
            ? { "border-radius": `${abc.headerBorderRadius}px; \n` }
            : {
                ...(abc.headerBTLR !== 0 ||
                abc.headerBBLR !== 0 ||
                abc.headerBBRR !== 0 ||
                abc.headerBTRR !== 0
                  ? {
                      ...(abc.headerBTLR === abc.headerBBRR &&
                      abc.headerBTRR === abc.headerBBLR
                        ? {
                            "border-radius": `${abc.headerBTLR}px ${abc.headerBTRR}px; \n`,
                          }
                        : {
                            "border-radius": `${abc.headerBTLR}px ${abc.headerBTRR}px ${abc.headerBBRR}px ${abc.headerBBLR}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),

    // Padding And  Split Padding
    ...(abc.headerPaddingAcco !== 0 || abc.splitHeaderPadding
      ? {
          ...(!abc.splitHeaderPadding
            ? { padding: `${abc.headerPaddingAcco}px; \n` }
            : {
                ...(abc.headerPaddingRight !== 0 ||
                abc.headerPaddingBottom !== 0 ||
                abc.headerPaddingLeft !== 0 ||
                abc.headerPaddingTop !== 0
                  ? {
                      ...(abc.headerPaddingTop === abc.headerPaddingBottom &&
                      abc.headerPaddingRight === abc.headerPaddingLeft
                        ? {
                            padding: `${abc.headerPaddingTop}px ${abc.headerPaddingRight}px; \n`,
                          }
                        : {
                            padding: `${abc.headerPaddingTop}px ${abc.headerPaddingRight}px ${abc.headerPaddingBottom}px ${abc.headerPaddingLeft}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),

    // Margin And  Split Margin
    ...(abc.headerMarginAcco !== 0 || abc.splitHeaderMargin
      ? {
          ...(!abc.splitHeaderMargin
            ? { margin: `${abc.headerMarginAcco}px; \n` }
            : {
                ...(abc.headerMarginTop !== 0 ||
                abc.headerMarginBottom !== 0 ||
                abc.headerMarginLeft !== 0 ||
                abc.headerMarginRight !== 0
                  ? {
                      ...(abc.headerMarginTop === abc.headerMarginBottom &&
                      abc.headerMarginRight === abc.headerMarginLeft
                        ? {
                            margin: `${abc.headerMarginTop}px ${abc.headerMarginRight}px; \n`,
                          }
                        : {
                            margin: `${abc.headerMarginTop}px ${abc.headerMarginRight}px ${abc.headerMarginBottom}px ${abc.headerMarginLeft}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),

    //
  };
  let HeadStyling = [];
  for (var key1 in AccordionHead) {
    let dd = `${key1} : ${AccordionHead[key1]} `;
    HeadStyling.push(dd);
  }

  // Header Content

  const headerIcon = {
    ...(abc.headerIconShow
      ? {
          width: `${abc.headerIconSize}px; \n`,
          "aspect-ratio": `1 / 1; \n`,
          stroke: `${abc.headerIconColor}; \n`,
        }
      : {}),
  };
  let headerIconStyle = [];
  for (var key2 in headerIcon) {
    let dd = `${key2} : ${headerIcon[key2]} `;
    headerIconStyle.push(dd);
  }
  //

  // Accordion Body

  const accordionBody = {
    ...(abc.bodyBgCheck
      ? {
          background: abc.bodyGraCheck
            ? `linear-gradient(${abc.bodyGradDeg}deg,${abc.bodyBg},${abc.bodyGradColor}); \n`
            : `${abc.bodyBg}; \n`,
        }
      : { background: "none; \n" }),

    // Border Width And  Split Border Width
    ...(abc.bodyBorderAcco !== 0 || abc.splitBodyBorder
      ? {
          ...(!abc.splitBodyBorder
            ? {
                "border-width": `${abc.bodyBorderAcco}px; \n`,
                "border-style": "solid; \n",
                "border-color": `${abc.bodyBorderColor}; \n`,
              }
            : {
                ...(abc.bodyBorderTop !== 0 ||
                abc.bodyBorderBottom !== 0 ||
                abc.bodyBorderLeft !== 0 ||
                abc.bodyBorderRight !== 0
                  ? {
                      ...(abc.bodyBorderTop === abc.bodyBorderBottom &&
                      abc.bodyBorderRight === abc.bodyBorderLeft
                        ? {
                            "border-width": `${abc.bodyBorderTop}px ${abc.bodyBorderRight}px; \n`,
                            "border-style": "solid; \n",
                            "border-color": `${abc.bodyBorderColor}; \n`,
                          }
                        : {
                            "border-width": `${abc.bodyBorderTop}px ${abc.bodyBorderRight}px ${abc.bodyBorderBottom}px ${abc.bodyBorderLeft}px; \n`,
                            "border-style": "solid; \n",
                            "border-color": `${abc.bodyBorderColor}; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),
    //

    // Border Radius And Split Border Radius
    ...(abc.bodyBorderRadius !== 0 || abc.splitBodyRadius
      ? {
          ...(!abc.splitBodyRadius
            ? { "border-radius": `${abc.bodyBorderRadius}px; \n` }
            : {
                ...(abc.bodyBTLR !== 0 ||
                abc.bodyBTRR !== 0 ||
                abc.bodyBBRR !== 0 ||
                abc.bodyBBLR !== 0
                  ? {
                      ...(abc.bodyBTLR === abc.bodyBBRR &&
                      abc.bodyBTRR === abc.bodyBBLR
                        ? {
                            "border-radius": `${abc.bodyBTLR}px ${abc.bodyBTRR}px; \n`,
                          }
                        : {
                            "border-radius": `${abc.bodyBTLR}px ${abc.bodyBTRR}px ${abc.bodyBBRR}px ${abc.bodyBBLR}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),

    // Padding And  Split Padding
    ...(abc.bodyPaddingAcco !== 0 || abc.splitBodyPadding
      ? {
          ...(!abc.splitBodyPadding
            ? { padding: `${abc.bodyPaddingAcco}px; \n` }
            : {
                ...(abc.bodyPaddingTop !== 0 ||
                abc.bodyPaddingBottom !== 0 ||
                abc.bodyPaddingLeft !== 0 ||
                abc.bodyPaddingRight !== 0
                  ? {
                      ...(abc.bodyPaddingTop === abc.bodyPaddingBottom &&
                      abc.bodyPaddingRight === abc.bodyPaddingLeft
                        ? {
                            padding: `${abc.bodyPaddingTop}px ${abc.bodyPaddingRight}px; \n`,
                          }
                        : {
                            padding: `${abc.bodyPaddingTop}px ${abc.bodyPaddingRight}px ${abc.bodyPaddingBottom}px ${abc.bodyPaddingLeft}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),

    // Margin And  Split Margin

    ...(abc.bodyMarginAcco !== 0 || abc.splitBodyMargin
      ? {
          ...(!abc.splitBodyMargin
            ? { margin: `${abc.bodyMarginAcco}px; \n` }
            : {
                ...(abc.bodyMarginTop !== 0 ||
                abc.bodyMarginBottom !== 0 ||
                abc.bodyMarginLeft !== 0 ||
                abc.bodyMarginRight !== 0
                  ? {
                      ...(abc.bodyMarginTop === abc.bodyMarginBottom &&
                      abc.bodyMarginRight === abc.bodyMarginLeft
                        ? {
                            margin: `${abc.bodyMarginTop}px ${abc.bodyMarginRight}px; \n`,
                          }
                        : {
                            margin: `${abc.bodyMarginTop}px ${abc.bodyMarginRight}px ${abc.bodyMarginBottom}px ${abc.bodyMarginLeft}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),
    //
  };
  let accordionBodyStyle = [];
  for (var key3 in accordionBody) {
    let dd = `${key3} : ${accordionBody[key3]} `;
    accordionBodyStyle.push(dd);
  }
  //

  // Accordion Body Paragraph Style

  const accordionBodyPara = {
    "font-size": `${abc.textSize}px; \n`,
    color: `${abc.textColor}; \n`,

    ...(abc.bodyPaddingAcco !== 0 || abc.splitTextPadding
      ? {
          ...(!abc.splitTextPadding
            ? { padding: `${abc.textPadding}px; \n` }
            : {
                ...(abc.textPaddingTop !== 0 ||
                abc.textPaddingBottom !== 0 ||
                abc.textPaddingLeft !== 0 ||
                abc.textPaddingRight !== 0
                  ? {
                      ...(abc.textPaddingTop === abc.textPaddingBottom &&
                      abc.textPaddingRight === abc.textPaddingLeft
                        ? {
                            padding: `${abc.textPaddingTop}px ${abc.textPaddingRight}px; \n`,
                          }
                        : {
                            padding: `${abc.textPaddingTop}px ${abc.textPaddingRight}px ${abc.textPaddingBottom}px ${abc.textPaddingLeft}px; \n`,
                          }),
                    }
                  : ""),
              }),
        }
      : ""),
  };
  let accordionBodyParaStyle = [];
  for (var key4 in accordionBodyPara) {
    let dd = `${key4} : ${accordionBodyPara[key4]} `;
    accordionBodyParaStyle.push(dd);
  }
  //
  return (
    <>
      body {`{`} {'\n'} position: relative;{'\n'} width: 100%; {'\n'} box-sizing: border-box; {'\n'} {`} \n`}
      {/* Parent / Main */}
      {`\n.accordion{\n`}
      {ParentStyling}
      {` \n width : 100% ;\n overflow : hidden ; \n box-sizing : border-box ; \n`}
      {"} \n"}
      {/* Accordion Header */}
      {`\n.accordion-head{ \n`}
      {HeadStyling}
      {`display : flex ; \n justify-content : space-between ; \n align-items : center ; \n`}
      {"}\n"}
      {/* Header Content */}
      {/* header Icon */}
      {abc.headerIconShow ? `\n .head-icon { \n` : ""}
      {headerIconStyle}
      {abc.headerIconShow ? "margin-right : 12px; \n" : ""}
      {abc.headerIconShow ? "\n } \n" : ""}
      {/* heading */}
      {`\n.heading{`}
      {'\n'}display : flex ;{'\n'} justify-content : center ; {'\n'}align-items : center ;
      {"\n } \n"}
      {/* heading */}
      {`\n .heading h4{ \n`}
      font-size : {abc.headingSize}px;{'\n'} color : {abc.headingColor};
      {"\n } \n "}
      
      {/* Close btn / Collapse btn */}
      {`\n.close-icon svg { \n`}
      width : {`${abc.collapseBtnSize}px`};{'\n'} aspect-ratio: 1/1;{'\n'} transition : all 0.3s;{'\n'} transform : rotate(180deg);{'\n'} cursor : pointer; {'\n'} stroke : {abc.collapseBtnColor} ;
      {"\n } \n"}
      {/* Accordion Body */}
      {`\n.accordion-body-main { \n`}
      {accordionBodyStyle}
      {'\n'} overflow : hidden;{'\n'} transition : all 0.3s;{'\n'} height: 0px;
      {"\n } \n "}
      {/* Accordion Body Content */}
      {`\n.accordion-items p { \n`}
      {accordionBodyParaStyle}
      {" } \n"}
    </>
  );
}
