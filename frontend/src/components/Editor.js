import React from "react";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/python/python'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { on } from "codemirror";


function Editor(props) {

    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor,data,value){
        onChange(value)
    }


    return (
        <div className="editor_container">
            <div className="editor_title">
                {displayName}
            </div>
        
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code_mirror_wrapper"
        options={{
            lineWrapping:true,
            lint: true,
            mode: language,
            theme:'material',
            lineNumbers:true
        }}
        />
        </div>  
    )
}

export default Editor;