function convert() {
  const input = document.getElementById("input").value.trim();
  const quote = document.getElementById("quote").value;
  if (!input) {
    document.getElementById("output").value = "";
    return;
  }
  const lines = input.split(/\r?\n/);
  const result = lines.map(item => `${quote}${item}${quote}`).join(", ");
  document.getElementById("output").value = result;
}

function copyOutput() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}