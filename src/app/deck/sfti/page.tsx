import { PortfolioDeck } from "@/components/portfolio-deck/portfolio-deck";
import { sftiDeck } from "@/lib/portfolio-deck/sfti-deck";

export default function SftiDeckPage() {
  return <PortfolioDeck deck={sftiDeck} />;
}
