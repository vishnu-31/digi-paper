import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { createEditor } from "slate";
import { useState, useRef } from "react";

// TypeScript users only add this code
import { BaseEditor, Descendant } from 'slate'
import { Slate, Editable, ReactEditor, withReact } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const Paper =() =>{
    const [docTitle, setDocTitle] = useState("Paper Name");
    const [docDesc, setDocDesc] = useState("A Brainstorming Page");
    const [editor] = useState(()=>withReact(createEditor()));

    const editableElement = useRef(null);

    const initialValue:Descendant[] = [{
        type:"paragraph",
        children: [{ text: 'A line of text in a paragraph.' }],
    },]

    return(
        <Card className="w-[90svw] h-[90svh]">
        <CardHeader>
            <CardTitle className="w-full"><input className="w-full" type="text" value={docTitle} onChange={(e)=>setDocTitle(e.target.value)}/></CardTitle>
            <CardDescription><input type="text" value={docDesc} className="w-full" onChange={(e)=>setDocDesc(e.target.value)}/></CardDescription>
        </CardHeader>
        <CardContent>
            <Slate editor={editor} initialValue={initialValue}>
                <article className="m-2 group h-full focus:" onFocus={() => editableElement.current?.focus() }>
                    <Editable ref={editableElement} className="h-full my-0" onKeyDown={(e)=>{
                        if ("vishnu".indexOf(e.key) != -1){
                            console.log("you have entered a magic Letter:",e.key)
                        }
                    }}/>
                </article>
            </Slate>
        </CardContent>
        </Card>
    );
}

export default Paper;