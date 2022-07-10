import { defineConfig } from "windicss/helpers";
import filters from "windicss/plugin/filters";
import forms from "windicss/plugin/forms";
import aspectRatio from "windicss/plugin/aspect-ratio";
import lineClamp from "windicss/plugin/line-clamp";
import typography from "windicss/plugin/typography";
import animate from "@windicss/plugin-animations";

const colors = {};

export default defineConfig({
  darkMode: "class", // or 'media'
  plugins: [filters, forms, aspectRatio, lineClamp, typography, animate],
});
