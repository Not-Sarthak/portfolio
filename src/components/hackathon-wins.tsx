const wins = [
  "colosseum breakout hackathon - 1x bounty (light protocol)",
  "superteam security dashboard - 1st place",
  "ethindia '24 - 1x bounty (base)",
  "onchain ai fellowship - by @callusfbi",
  "ethbangkok '24 - 1x bounty (flow)",
  "encode club btc hackathon - 2nd place (goat network)",
  "funding the commons '24 bangkok - 1x bounty (talent protocol)",
  "based india '24 - winner",
  "colosseum radar hackathon - 2x bounty (ore and mercyuro)",
  "100xdevs hackathon - bounty",
  "stellar builders' residency - 1st place",
  "stellar indiathon '24 - infra track",
  "nuvyuva tinkerthon '24 - 2nd place",
  "itmbu hackathon '24 - 2nd place",
  "hacktheleague '24 - 2x bounties",
  "arweave hackerhouse '1 - runner up",
];

export function HackathonWins() {
  return (
    <div>
      {wins.map((win) => (
        <div key={win} className="py-0.5 text-sm text-gray-400">
          {win}
        </div>
      ))}
    </div>
  );
}
