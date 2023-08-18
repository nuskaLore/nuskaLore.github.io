function copyToClipboard() {
  var textarea = document.getElementById("codeTextarea");
  textarea.select();
  document.execCommand("copy");
}