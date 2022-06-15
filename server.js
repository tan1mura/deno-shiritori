import { serve } from "https://deno.land/std@0.138.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.138.0/http/file_server.ts";
console.log("created by 119311 @https://github.com/119311 ©2022");
// deno-lint-ignore require-await
serve(async (req) => {
  const pathname = new URL(req.url).pathname;
  console.log(pathname);
  return serveDir(req, {
    fsRoot: "public",
    urlRoot: "",
    showDirListing: true,
    enableCors: true,
  });
});
