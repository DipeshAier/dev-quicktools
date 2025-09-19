// --- SQL Formatter ---
function formatSQL() {
  let sql = document.getElementById("sql-input").value;

  if (!sql.trim()) {
    alert("Please paste some SQL!");
    return;
  }

  // Uppercase common SQL keywords
  const keywords = [
    "select", "from", "where", "and", "or", "join", "inner join", "left join",
    "right join", "on", "group by", "order by", "limit", "insert", "into",
    "values", "update", "set", "delete", "create", "table", "drop", "alter"
  ];

  keywords.forEach(kw => {
    const regex = new RegExp("\\b" + kw + "\\b", "gi");
    sql = sql.replace(regex, kw.toUpperCase());
  });

  // Add line breaks after commas
  sql = sql.replace(/,/g, ",\n  ");

  // Line breaks before major clauses
  sql = sql.replace(/\b(FROM|WHERE|AND|OR|GROUP BY|ORDER BY|LIMIT|SET|VALUES)\b/g, "\n$1");

  document.getElementById("sql-output").value = sql.trim();
}

// --- Diff Checker ---
function checkDiff() {
  const text1 = document.getElementById("text1").value.split("\n");
  const text2 = document.getElementById("text2").value.split("\n");

  let output = "";

  const maxLen = Math.max(text1.length, text2.length);
  for (let i = 0; i < maxLen; i++) {
    if (text1[i] !== text2[i]) {
      output += `- ${text1[i] || ""}\n+ ${text2[i] || ""}\n`;
    }
  }

  if (!output) {
    output = "✅ No differences found!";
  }

  document.getElementById("diff-output").textContent = output;
}
