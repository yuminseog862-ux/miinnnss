import { PortfolioDeck } from "@/components/portfolio-deck/portfolio-deck";
import { adsbDeck } from "@/lib/portfolio-deck/adsb-deck";

export default function AdsbDeckRoute() {
  return <PortfolioDeck deck={adsbDeck} />;
}
