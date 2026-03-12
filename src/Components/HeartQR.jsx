import { QRCodeCanvas } from "qrcode.react"
import React from "react"

export default function HeartQR({ name, link }) {
  return (
    <div className="relative flex items-center justify-center  min-h-screen bg-black overflow-hidden">

      {/* Matrix hearts rain */}
      <div className="absolute inset-0 matrix-bg"></div>

      {/* Glass card */}
      <div className="relative z-10 p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-pink-500/30 shadow-[0_0_40px_rgba(255,45,111,0.6)]">

        <div className="flex flex-col items-center gap-4">

          {/* Heart container */}
          <div className="relative heart-glow flex items-center cursor-pointer justify-center">

            <QRCodeCanvas
              value={link}
              size={220}
              bgColor="#000000"
              fgColor="#ff2d6f"
              level="H"
              includeMargin={true}
            />

          </div>

          {/* Name */}
          <h2 className="text-pink-400 font-bold text-xl tracking-widest">
            {name}
          </h2>

        </div>
      </div>

      <style>{`

      /* glowing heart container */

      .heart-glow{
        padding:20px;
        border-radius:25px;
        background:rgba(0,0,0,0.7);
        box-shadow:
        0 0 20px #ff2d6f,
        0 0 40px #ff2d6f,
        inset 0 0 10px #ff2d6f;
        transition:0.4s;
      }

      .heart-glow:hover{
        transform:scale(1.05);
        box-shadow:
        0 0 30px #ff2d6f,
        0 0 60px #ff2d6f,
        inset 0 0 15px #ff2d6f;
      }

      /* matrix background animation */

      .matrix-bg{
        background: radial-gradient(circle at center, #000 0%, #050505 100%);
        animation: pulseBg 4s infinite alternate;
      }

      @keyframes pulseBg{
        0%{opacity:0.8}
        100%{opacity:1}
      }

      `}</style>

    </div>
  )
}