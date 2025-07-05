import type { APIRoute } from "astro";
import fs from "node:fs/promises";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";
import { getStaticPaths as getStaticPathsIndex } from "./index.astro";

export const getStaticPaths = getStaticPathsIndex;

export const GET: APIRoute = async ({ props, site }) => {
  const { post } = props;
  const satoshiFont = await fs.readFile(path.resolve("./src/assets/fonts/Satoshi-Bold.woff"));

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${site}og-template.jpg)`,
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                marginTop: -60,
                marginLeft: 115,
                display: "flex",
                fontSize: 120,
                fontFamily: "Satoshi",
                color: "white",
                lineHeight: "140px",
              },
              children: post.data.title,
            },
          },
        ],
      },
    },
    {
      width: 1920,
      height: 1080,
      debug: false,
      fonts: [
        {
          name: "Satoshi",
          data: satoshiFont,
          weight: 700,
        },
      ],
    },
  );
  const jpg = await sharp(Buffer.from(svg)).jpeg({ quality: 100 }).toBuffer();

  return new Response(jpg, {
    headers: { "Content-Type": "image/jpg" },
  });
};
