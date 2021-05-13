import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {java} from "@codemirror/lang-java"

let state = EditorState.create({doc: `public class App {

  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
`, extensions: [
  basicSetup,
  java(),
]})

;(window as any).view = new EditorView({state, parent: document.querySelector("#editor")!})
