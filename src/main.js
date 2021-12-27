import { unified } from "unified";
import {
  shirkhanParser,
  shirkhanCompiler,
  toKhanPlugin,
  khanToUgPlugin,
  ugToKhanPlugin,
} from "shirkhan-retext";

import { remarkKhan } from "./lib/index";

// khan to ug
let processor = unified()
  .use(shirkhanParser)
  .use(toKhanPlugin)
  .use(khanToUgPlugin)
  .use(shirkhanCompiler);

function convert(text) {
  return remarkKhan()
    .data("khanConverter", (node) =>
      processor.processSync(node.value).toString()
    )
    .processSync(text)
    .toString();
}

const inputTextArea = document.getElementById("text");
const resultTextArea = document.getElementById("result");

inputTextArea.addEventListener("input", (e) => {
  resultTextArea.value = convert(e.target.value);
});

resultTextArea.value = convert(inputTextArea.value);
