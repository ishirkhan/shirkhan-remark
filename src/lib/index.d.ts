// This wrapper exists because JS in TS can’t export a `@type` of a function.
import type { Root } from "mdast";
import type { ToMarkdownOptions } from "remark-stringify/lib";
import type { Plugin } from "unified";

type Options = Omit<ToMarkdownOptions, "extensions">;

declare const remarkKhan: Plugin<[Options?] | void[], Root, string>;
export default remarkKhan;
export type { Options };
