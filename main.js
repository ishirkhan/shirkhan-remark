import { table, HEMZE } from "shirkhan-alphabet-table";
import { KhanConverter } from "shirkhan-alphabet-converter";

import { remarkKhan } from "./lib/index";

const khan = new KhanConverter(table, HEMZE);

const result = remarkKhan()
  .data("khanConverter", (node) => khan.toUgText(node.value))
  .processSync(document.getElementById("text").value)
  .toString();

console.log(result);

document.getElementById("result").value = result;
