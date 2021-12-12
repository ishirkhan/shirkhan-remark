import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkStringify from "remark-stringify";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";

function khanPlugin() {
  return (tree) => {
    const converter = this.data("khanConverter") || undefined;
    if (!converter) return;
    visit(tree, "text", (node, index, parent) => {
      if (parent.type === "link") return;
      node.value = converter(node, index, parent);
    });
  };
}

export const remarkKhan = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkGfm)
  .use(khanPlugin)
  .use(remarkStringify)
  .freeze();
