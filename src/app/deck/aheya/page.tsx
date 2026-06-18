import { PortfolioDeck } from "@/components/portfolio-deck/portfolio-deck";
import { aheyaDeck } from "@/lib/portfolio-deck/aheya-deck";

export default function AheyaDeckRoute() {
  return <PortfolioDeck deck={aheyaDeck} />;
}
