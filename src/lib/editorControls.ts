import { Editor, Node, Transforms } from 'slate';


export const EditorControl = {
    isBoldMarkActive(editor:Editor) {
      const marks = Editor.marks(editor)
      return marks ? marks.bold === true : false
    },
  
    isCodeBlockActive(editor:Editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type == 'code',
      })
  
      return !!match
    },
  
    toggleBoldMark(editor:Editor) {
      const isActive = EditorControl.isBoldMarkActive(editor)
      if (isActive) {
        Editor.removeMark(editor, 'bold')
      } else {
        Editor.addMark(editor, 'bold', true)
      }
    },
  
    toggleCodeBlock(editor:Editor) {
      const isActive = EditorControl.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? 'paragraph' : 'code' },
        { match: (n) => Editor.isBlock(editor, n) }
      )
    },
  }