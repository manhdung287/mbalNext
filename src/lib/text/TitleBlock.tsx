import React from 'react'

interface IProps{
    indexing:string
    text:string
}

function TitleBlock({indexing,text}:IProps) {
    return (
        <div className="mcp_eform_header">
            <span className="mcp_eform_header_number">{indexing}</span>
            <span className="mcp_eform_header_content">{text}</span>
        </div>
    )
}

export default TitleBlock