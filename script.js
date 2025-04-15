function generateCode() {
    const input = document.getElementById("inputText").value.trim();
    const output = document.getElementById("outputCode");
  
    if (!input) {
      output.textContent = "#----";
      return;
    }
  
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0;
    }
  
    // Generar solo 4 dígitos
    const code = Math.abs(hash % 10000).toString().padStart(4, '0');
    output.textContent = `#${code} ${input}`;
  }
  
  function copyToClipboard() {
    const text = document.getElementById("outputCode").textContent;
    const copyBtn = document.getElementById("copyBtn");
  
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = "✅";
      setTimeout(() => {
        copyBtn.textContent = "📋";
      }, 1500);
    });
  }
  