import { WavyBlock, WavyBlockItem } from "@/components/ui/wavy-text-block"

const titles = [
  "𝓖𝕚г𝕀ꬵ𝓇𝗂𝙚ռｄ",
  "𝙱𝚘𝚢𝚏𝚛𝚒𝚎𝚗𝚍",
  "Lιϝҽ Cσαƈԋ",
  "TᕼEᖇᗩᑭIᔕT",
  "ᗩTTOᖇᑎEY",
  "ƈɛʟɛɮʀɨȶʏ",
  "𝒮𝒶𝓃𝓉𝒶 𝒞𝓁𝒶𝓊𝓈",
  "𝔸𝕟𝕪 𝕥𝕦𝕥𝕠𝕣",
  "ꪻ᥅ꪖ꠸ꪀꫀ᥅",
  "Mï§†rê§§",
  "ᗩᔕᔕIᔕTᗩᑎT",
  "ᘿ᙭-ᒪᓍᐺᘿᖇ",
  "Dɾҽαɱ Pαɾƚɳҽɾ",
  "ֆɛƈʀɛȶ ƈʀʊֆɦ",
  
]

export default function Page() {
  return (
    <main className="h-screen pt-60 m-0 p-0">
      <div className="w-full max-w-6xl mx-auto px-0">
        <WavyBlock className="flex flex-col items-center justify-start gap-6">
          {titles.map((title, index) => (
            <WavyBlockItem key={title} index={index} config={{
              baseOffsetFactor: 0.1,
              baseExtra: 0,
              baseAmplitude: 400,
              lengthEffect: 0.6,
              frequency: 35,
              progressScale: 6,
              phaseShiftDeg: -180,
              spring: { damping: 22, stiffness: 300 },
            }}>
              <h2 className="text-[4rem] leading-none font-bold tracking-tighter whitespace-nowrap uppercase">
                {title}
              </h2>
            </WavyBlockItem>
          ))}
        </WavyBlock>
      </div>
    </main>
  )
}
