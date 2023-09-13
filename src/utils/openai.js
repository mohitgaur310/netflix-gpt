import OpenAI from "openai";
import { OPANAI_KEY } from "./Constants";

const openai = new OpenAI({
  apiKey: OPANAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
