import { PortfolioDeck } from "@/components/portfolio-deck/portfolio-deck";
import { aheyaAdsbDeck } from "@/lib/portfolio-deck/aheya-adsb";

export default function AheyaAdsbDeckRoute() {
  return <PortfolioDeck deck={aheyaAdsbDeck} />;
}
