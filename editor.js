document.addEventListener('DOMContentLoaded', function () {
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");
    editor.setOptions({
        minLines: 10,
        maxLines: 30,
    });
    window.editor = editor; // Expose the editor object globally
});

document.addEventListener('DOMContentLoaded', function () {
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");
    window.editor = editor; // Expose the editor object globally
});

function compileAndRunJava() {
    const code = window.editor.getValue();
    document.getElementById('output').innerText = 'Compiling...';

    // Create a new JShell instance
    const jshell = new JShell();

    // Evaluate the Java code
    jshell.eval(code);

    // Capture the output
    const output = jshell.getOutput();

    if (output) {
        document.getElementById('output').innerText = output;
    } else {
        document.getElementById('output').innerText = 'No output received.';
    }
}
