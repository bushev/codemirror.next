import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {python} from "@codemirror/lang-python"
import {setDiagnostics} from "@codemirror/lint";

let state = EditorState.create({doc: `# This is a basic program on Python
print('Hello, World!')`, extensions: [
    basicSetup,
    python()
  ]})

;(window as any).view = new EditorView({state, parent: document.querySelector("#editor")!})

setTimeout(() => {
  (window as any).view.dispatch(setDiagnostics((window as any).view.state, [{
    from: 58,
    message: "W292 no newline at end of file",
    severity: "warning",
    to: 58
  }]));
}, 500);
