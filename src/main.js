import { table, HEMZE } from "shirkhan-alphabet-table";
import { KhanConverter } from "shirkhan-alphabet-converter";

import { remarkKhan } from "./lib/index";

const khan = new KhanConverter(table, HEMZE);

function convert(text) {
  return remarkKhan()
    .data("khanConverter", (node) => khan.toUgText(node.value))
    .processSync(text)
    .toString();
}

const inputTextArea = document.getElementById("text");
const resultTextArea = document.getElementById("result");

inputTextArea.addEventListener("input", (e) => {
  resultTextArea.value = convert(e.target.value);
});

resultTextArea.value = convert(inputTextArea.value);
