import { Fragment } from "react";
import HelpHero from "../components/help/HelpHero";
import QuestionsAndAnswers from "../components/help/QuestionsAndAnswers";

export default function HelpPage() {
  return (
    <Fragment>
      <HelpHero />
      <QuestionsAndAnswers />
    </Fragment>
  );
}
