import { useContext } from "react";
import { LanguageContext } from "./langContext";
import { translation } from "../lang";

export default function MultiLingualContext({contentId}) {
    const { language } = useContext(LanguageContext);

    return translation[language][contentId];
}