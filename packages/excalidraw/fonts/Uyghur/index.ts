import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

// UKIJ Tor font for Uyghur Arabic script
// License: LGPL / Open Font License (OFL)
// Source: Uyghur Kompyutér Ilimi Jem'iyiti (UKIJ)
// Website: https://ukij.org/

// Use direct path to font in public directory
const UKIJTorWoff2 = "/UKIJTor-Byz7ORc7.woff2";

export const UyghurFontFaces: ExcalidrawFontFaceDescriptor[] = [
  {
    uri: UKIJTorWoff2,
    descriptors: {
      // Unicode ranges for Arabic script (includes Uyghur)
      // U+0600-U+06FF: Arabic
      // U+0750-U+077F: Arabic Supplement
      // U+08A0-U+08FF: Arabic Extended-A
      // U+FB50-U+FDFF: Arabic Presentation Forms-A
      // U+FE70-U+FEFF: Arabic Presentation Forms-B
      // U+10F70-U+10FFF: Old Uyghur / Arabic Extended-C (for historical Uyghur)
      // Note: Using full format U+XXXX for clarity
      unicodeRange:
        "U+0600-06FF,U+0750-077F,U+08A0-08FF,U+FB50-FDFF,U+FE70-FEFF,U+10F70-10FFF",
    },
  },
];
