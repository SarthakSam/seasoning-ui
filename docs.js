window.onload = () => {
    const allCodes = document.getElementsByClassName('code');
    Array.from( allCodes ).forEach( elem => {
        CodeMirror.fromTextArea(elem, {
            mode: 'xml',
            theme: 'material-darker',
            lineNumbers: true,
            readOnly: true
        });   
    })
}