import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Node, createEditor } from "slate";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";

import {CodeElement, DefaultElement, Leaf} from "./ui/textelements";

// TypeScript users only add this code
import { BaseEditor, Descendant, Transforms, Element, Editor } from 'slate'
import { Slate, Editable, ReactEditor, withReact, RenderLeafProps, RenderElementProps } from 'slate-react'
import { EditorControl } from "@/lib/editorControls";
import { Menubar } from "./ui/menubar";
import { Button } from "./ui/button";

type CustomElement = { type: 'paragraph' | 'code'; 
                        children: CustomText[] }

type CustomText = { text: string; 
                    bold:boolean; 
                    italic:boolean; 
                    underline:boolean; 
                    strikethrough:boolean; }

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
    const localtext = useRef<string|null>(null);

    // Define a rendering function based on the element passed to `props`. We use
    // `useCallback` here to memoize the function for subsequent renders.
    const renderElement = useCallback((props:RenderElementProps) => {
        switch (props.element.type) {
        case 'code':
            return <CodeElement {...props} />
        default:
            return <DefaultElement {...props} />
        }
    }, [])


    const renderLeaf = useCallback((props:RenderLeafProps) =>{
        return <Leaf {...props}/>
    },[])

    useEffect(()=>{
       const localval= localStorage.getItem("content");
       localtext.current = localval;
    },[])

    const initialValue:Descendant[] = useMemo(
        ()=> localtext.current != null ? 
                JSON.parse(localtext.current) :
                [{
                    type:"paragraph",
                    children: [{ text: ` Hellooo  this is a line of text` }],
                },]
        ,[])

    return(
        <Card className="w-[90svw] h-[90svh]">
        <CardHeader>
            <CardTitle className="w-full"><input className="w-full" type="text" value={docTitle} onChange={(e)=>setDocTitle(e.target.value)}/></CardTitle>
            <CardDescription><input type="text" value={docDesc} className="w-full" onChange={(e)=>setDocDesc(e.target.value)}/></CardDescription>
        </CardHeader>
        <CardContent>
            <Slate editor={editor} 
                    initialValue={initialValue}
                    onChange={value => {
                        const isAstChange = editor.operations.some(
                          op => 'set_selection' !== op.type
                        )
                        if (isAstChange) {
                          // Save the value to Local Storage.
                          const content = JSON.stringify(value)
                          localStorage.setItem('content', content)
                        }
                      }}>
                <article className="m-2 h-full">
                <div className="flex border-2 rounded-lg justify-start gap-3 p-1 w-full">
                    <Button
                    onMouseDown={event => {
                        event.preventDefault()
                        EditorControl.toggleBoldMark(editor)
                    }}
                    >
                    Bold
                    </Button>
                    <Button
                    onMouseDown={event => {
                        event.preventDefault()
                        EditorControl.toggleCodeBlock(editor)
                    }}
                    >
                    Code Block
                    </Button>
                </div>
                    <Editable  className="h-full my-0" 
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        onKeyDown={(e)=>{
                        
                            if(!e.ctrlKey) {
                                return
                            }

                            switch(e.key){
                                case "`":{
                                    e.preventDefault()
                                    EditorControl.toggleCodeBlock(editor)
                                    break
                                }
                                case "b":{
                                    e.preventDefault();
                                    EditorControl.toggleBoldMark(editor)
                                    break
                                }
                            }
                    }}/>
                </article>
            </Slate>
        </CardContent>
        </Card>
    );
}

export default Paper;