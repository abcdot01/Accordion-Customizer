import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const [state, setState] = useState({
        
        BorderWidthLimit : 20,
        RadiusLimit : 60,

        borderColor: '#E5E7EB',
        bgColor : '#8C00FB',
        gradSecondaryColor: '#FF5C00',
        gradDeg: 90,
        // Border
        borderAcco: 2,
        parentBorderTop: 0,
        parentBorderBottom: 2,
        parentBorderLeft: 0,
        parentBorderRight: 0,
        // Border Radius
        borderRadius: 0,
        parentBTLR: 2,
        parentBTRR: 2,
        parentBBLR: 2,
        parentBBRR: 2,
        // Padding
        paddingAcco : 0,
        parentPaddingLeft: 0,
        parentPaddingTop: 0,
        parentPaddingRight: 0,
        parentPaddingBottom: 0,
        // Margin
        marginAcco: 0,
        parentMarginLeft: 2,
        parentMarginTop: 2,
        parentMarginRight: 2,
        parentMarginBottom: 2,
        // Toogle
        parentGraCheck: false,
        splitBorder: true,
        splitMargin: false,
        splitRadius: false,
        splitPadding: false,
        BgCheck : false,

        // Header
        
        headerBg : '#F9FAFB',
        headerGradDeg : 90,
        headerGradColor : '#fcffff',
        headerBorderColor: '#FF5C00',
        headerMarginAcco: 0,
        headerPaddingAcco: 2,
        // 
        headerPaddingTop: 16,
        headerPaddingLeft: 20,
        headerPaddingBottom: 16,
        headerPaddingRight: 20,
        // 
        headerMarginTop: 0,
        headerMarginLeft: 0,
        headerMarginBottom: 4,
        headerMarginRight: 0,
        // 
        splitHeaderBorder: false,
        splitHeaderMargin: true,
        splitHeaderRadius: false,
        splitHeaderPadding: true,
        headerGraCheck: false,
        headerBgCheck: true,
        // 
        headerBorderAcco: 0,
        headerBorderTop : 2,
        headerBorderLeft : 2,
        headerBorderBottom : 2,
        headerBorderRight : 2,
        // 
        headerBorderRadius: 2,
        headerBTRR: 2,
        headerBTLR: 2,
        headerBBRR: 2,
        headerBBLR: 2,

        // Body
        bodyBg : '#ff0000',
        bodyGradDeg: 90,
        bodyGradColor: '#fcffff',
        bodyBorderColor: '#FF5C00',
        bodyMarginAcco: 0,
        bodyPaddingAcco: 2,
        // 
        bodyPaddingTop: 0,
        bodyPaddingLeft: 10,
        bodyPaddingBottom: 0,
        bodyPaddingRight: 10,

        // 

        bodyMarginTop: 0,
        bodyMarginLeft: 0,
        bodyMarginBottom: 0,
        bodyMarginRight: 0,

        // 

        splitBodyBorder: false,
        splitBodyMargin: false,
        splitBodyRadius: false,
        splitBodyPadding: true,
        bodyGraCheck: false,
        bodyBgCheck: false,

        // 

        bodyBorderAcco: 0,
        bodyBorderTop: 0,
        bodyBorderLeft: 0,
        bodyBorderBottom: 0,
        bodyBorderRight: 0,

        // 

        bodyBorderRadius: 0,
        bodyBTRR: 0,
        bodyBTLR: 0,
        bodyBBRR: 0,
        bodyBBLR: 0,

        // Header Content 
        
        headingSize: 16,
        headingColor: '#111827',
        collapseBtnSize: 20,
        collapseBtnColor:'#6B7280',
        headerIconColor:'#6B7280',
        headerIconShow : true,
        headerIconSize : 16,

        // Body Content

        splitTextPadding : false,
        textColor : '#6B7280',
        textSize : 16,
        textPadding: 2,
        textPaddingRight: 2,
        textPaddingLeft: 2,
        textPaddingTop: 2,
        textPaddingBottom: 2,
        // /Accordion Height
        accordionHeight: 0,
    })
    return (
        <NoteContext.Provider value={[state,setState]}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;