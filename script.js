
    var textarea = document.getElementById("codeTextarea");
    textarea.addEventListener("mouseover", copyToClipboard);

    function copyToClipboard() {
      textarea.select();
      document.execCommand("copy");
    }
