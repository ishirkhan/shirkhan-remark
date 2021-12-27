### use

```javascript
import { unified } from "unified";
import {
  shirkhanParser,
  shirkhanCompiler,
  toKhanPlugin,
  khanToUgPlugin,
  ugToKhanPlugin,
} from "shirkhan-retext";

import { remarkKhan } from "shirkhan-remark";

const targetMarkdownText = "# shirkhan /hello/ deydu";
// khan to ug
let processor = unified()
  .use(shirkhanParser)
  .use(toKhanPlugin)
  .use(khanToUgPlugin)
  .use(shirkhanCompiler);

const result = remarkKhan()
  .data("khanConverter", (node) => processor.processSync(node.value).toString())
  .processSync()
  .toString();

console.log(result);
```
