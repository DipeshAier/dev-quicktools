// Quote + Comma Adder
function addQuotes() {
  const input = document.getElementById("quote-input").value.trim();
  const quoteStyle = document.getElementById("quote-style").value;
  if (!input) {
    alert("Please paste some values.");
    return;
  }
  const lines = input.split(/\r?\n/);
  const output = lines.map(line => `${quoteStyle}${line}${quoteStyle},`).join("\n");
  document.getElementById("quote-output").value = output;
}

function copyOutput(id) {
  const text = document.getElementById(id);
  text.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}

// SQL Formatter (basic)
function formatSQL() {
  const sql = document.getElementById("sql-input").value;
  if (!sql.trim()) {
    alert("Please paste SQL.");
    return;
  }
  const keywords = ["select","from","where","insert","into","values","update","set","delete","join","inner","left","right","on","create","table","drop","alter","and","or","not","in","as","order","by","group","having","limit"];
  let formatted = sql;

  keywords.forEach(kw => {
    const regex = new RegExp("\\b" + kw + "\\b", "gi");
    formatted = formatted.replace(regex, kw.toUpperCase());
  });

  formatted = formatted.replace(/,/g, ",\n  ");
  formatted = formatted.replace(/\b(SELECT|FROM|WHERE|ORDER BY|GROUP BY|HAVING|LIMIT)\b/g, "\n$1");

  document.getElementById("sql-output").value = formatted.trim();
}

// Diff Checker
function checkDiff() {
  const text1 = document.getElementById("text1").value.split(/\r?\n/);
  const text2 = document.getElementById("text2").value.split(/\r?\n/);
  let output = "";

  const maxLines = Math.max(text1.length, text2.length);
  for (let i = 0; i < maxLines; i++) {
    const a = text1[i] || "";
    const b = text2[i] || "";
    if (a !== b) {
      output += `- ${a}\n+ ${b}\n`;
    } else {
      output += `  ${a}\n`;
    }
  }

  document.getElementById("diff-output").textContent = output;
}
