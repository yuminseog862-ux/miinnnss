import { PortfolioDeck } from "@/components/portfolio-deck/portfolio-deck";
import { aheyaAdsbDeck } from "@/lib/portfolio-deck/aheya-adsb";

export default function HomePage() {
  return <PortfolioDeck deck={aheyaAdsbDeck} theme="reference" />;
}
