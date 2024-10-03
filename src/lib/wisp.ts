import { config } from "@/config";
import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: config.wisp.blogId || "cm1p1vbnu0000xlxs3lwe4cxi",
});

export type { GetPostsResult, GetPostResult };