'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([])

  useEffect(() => {
    setIsVisible(true)

    // Generate random stars
    const generatedStars = []
    for (let i = 0; i < 200; i++) {
      generatedStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() > 0.7 ? 2 : 1,
        opacity: Math.random() * 0.5 + 0.3
      })
    }
    setStars(generatedStars)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white relative overflow-hidden">
      {/* Starry background */}
      <div className="stars-container">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--star-opacity': star.opacity
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="grain-texture"></div>

      {/* Hero Section - Purpose */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative z-10">
        <div
          className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            人類が可能性を信じ、
            <br />
            自らの未来を歩めるよう支援する。
          </h1>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 relative z-10">
        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-8 md:space-y-12">
            {/* Value 1: わくわくする */}
            <div className="value-card value-card-orange group">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white transition-all duration-300">
                  わくわくする
                </h2>
                <p className="text-base md:text-lg font-medium leading-relaxed text-zinc-300">
                  私たちはわくわくを大切にする。
                  <br />
                  自らが心を動かし、関わる人にも創造の喜びを伝えなければならない。
                </p>
              </div>
            </div>

            {/* Value 2: 向きあう */}
            <div className="value-card value-card-blue group">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white transition-all duration-300">
                  向きあう
                </h2>
                <p className="text-base md:text-lg font-medium leading-relaxed text-zinc-300">
                  「痛み」や「不都合」を曖昧にせず、受け止めければならない。
                  <br />
                  みたくないものを見て、それでもなお真実を愛そうとしなければならない。
                </p>
              </div>
            </div>

            {/* Value 3: チームを信じる */}
            <div className="value-card value-card-emerald group">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white transition-all duration-300">
                  チームを信じる
                </h2>
                <p className="text-base md:text-lg font-medium leading-relaxed text-zinc-300">
                  私たちは仲間を信じる。
                  <br />
                  困ったときは助けを求め、仲間のピンチには全力で応えなければならない。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
