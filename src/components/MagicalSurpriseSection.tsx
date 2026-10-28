import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Flame, Gift, RotateCcw, Volume2 } from 'lucide-react';
import {
  AnywhereDoorSvg,
  GoldenBellSvg,
  BambooCopterSvg,
  DorayakiSvg,
  FourDPocketSvg,
} from './GadgetIcons';
import {
  playDoorPortalSound,
  playGadgetFanfare,
  playBirthdayMusicBoxChime,
} from '../utils/soundEffects';

export default function MagicalSurpriseSection() {
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [burstCounter, setBurstCounter] = useState<number>(0);

  const triggerDoraemonConfetti = () => {
    const colors = ['#0096E6', '#E60012', '#FFD700', '#FF5C8D', '#FFFFFF'];
    confetti({
      particleCount: 85,
      spread: 80,
      origin: { y: 0.6 },
      colors,
    });
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 65,
        origin: { x: 0.15, y: 0.65 },
        colors,
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 65,
        origin: { x: 0.85, y: 0.65 },
        colors,
      });
    }, 240);
  };

  const handleOpenSurpriseDoor = () => {
    playDoorPortalSound();
    setTimeout(() => {
      playGadgetFanfare();
    }, 450);
    setIsDoorOpen(true);
    setBurstCounter((prev) => prev + 1);
    triggerDoraemonConfetti();
  };

  const handleBlowOutCandles = () => {
    playBirthdayMusicBoxChime();
    setCandlesLit(false);
    triggerDoraemonConfetti();
  };

  return (
    <section
      id="surprise"
      className="py-20 md:py-28 px-6 bg-gradient-to-b from-[#EBF6FF] via-[#F4FAFF] to-[#DFF0FF] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#0072B5] mb-3">
            <span>04. スペシャル・サプライズ</span>
            <span aria-hidden="true">·</span>
            <span>どこでもドアの向こう側</span>
            <span aria-hidden="true">·</span>
            <span>19歳の誕生日メッセージ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0B2239] text-balance mb-4">
            らんちゃんへ贈る、19歳のひみつサプライズ
          </h2>
          <p className="text-sm md:text-base text-[#36536E] leading-relaxed">
            下の「どこでもドア」をクリックして開けてみてください。ドラえもんのひみつ道具アニメーションとともに、19歳になったらんちゃんへの特別なメッセージが届きます！
          </p>
        </div>

        {/* Interactive Surprise Stage */}
        <AnimatePresence mode="wait">
          {!isDoorOpen ? (
            <motion.div
              key="closed-door-stage"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl mx-auto"
            >
              <div
                onClick={handleOpenSurpriseDoor}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenSurpriseDoor();
                  }
                }}
                className="group relative rounded-3xl border-2 border-[#FF5C8D] bg-white p-8 md:p-12 text-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden"
              >
                {/* Glowing 4D Blue Ring Backdrop */}
                <div className="pointer-events-none absolute -inset-12 bg-radial from-[#0096E6]/15 via-transparent to-transparent opacity-80 group-hover:scale-110 transition-transform duration-300" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity }}
                    >
                      <BambooCopterSvg className="w-10 h-10" />
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
                      className="w-28 h-28 rounded-3xl bg-[#FFF0F5] border-2 border-[#FF5C8D] flex items-center justify-center shadow-md"
                    >
                      <AnywhereDoorSvg className="w-20 h-20" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.6, delay: 0.6, repeat: Infinity }}
                    >
                      <GoldenBellSvg className="w-10 h-10" />
                    </motion.div>
                  </div>

                  <div className="text-xs font-bold text-[#FF3D77] mb-2">
                    CLICK TO OPEN THE ANYWHERE DOOR
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0B2239] mb-3">
                    どこでもドアをノックして開ける
                  </h3>
                  <p className="text-sm text-[#36536E] max-w-md mb-8 leading-relaxed">
                    18歳から19歳へ。ドアの向こうには、らんちゃんへの心からのバースデーレターと、19本のキャンドルが灯る特製どら焼きケーキが待っています。
                  </p>

                  <span className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#FF5C8D] group-hover:bg-[#FF3D77] text-white font-bold text-base shadow-md transition-colors whitespace-nowrap">
                    <Gift className="w-5 h-5 text-[#FFD700]" />
                    <span>サプライズの扉を開く</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`opened-surprise-${burstCounter}`}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border-2 border-[#0096E6] bg-white p-6 md:p-12 shadow-xl relative overflow-hidden"
            >
              {/* Magical Floating Doraemon Gadgets Animation Banner */}
              <div className="rounded-2xl bg-gradient-to-r from-[#0096E6] via-[#0072B5] to-[#0096E6] text-white p-5 md:p-6 mb-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 14, -14, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center shrink-0"
                    >
                      <FourDPocketSvg className="w-11 h-11" />
                    </motion.div>
                    <div>
                      <div className="text-xs font-mono-num text-[#FFD700] font-bold">
                        HAPPY 19TH BIRTHDAY RAN · 魔法のどこでもドア解放中！
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white mt-0.5">
                        テレテレッテレー♪「19歳のハッピー・サプライズ〜！」
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        playGadgetFanfare();
                        triggerDoraemonConfetti();
                        setBurstCounter((c) => c + 1);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFD700] hover:bg-[#F4B400] text-[#0B2239] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>もう一度ひみつ道具花火を打ち上げる</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsDoorOpen(false)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>ドアを閉じる</span>
                    </button>
                  </div>
                </div>

                {/* Animated Floating Gadgets Row */}
                <div className="grid grid-cols-4 gap-3 mt-5 pt-4 border-t border-white/20 text-center">
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <AnywhereDoorSvg className="w-8 h-8" />
                    <span className="text-[11px] font-bold text-[#EBF6FF]">夢への扉・全開</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <BambooCopterSvg className="w-8 h-8" />
                    <span className="text-[11px] font-bold text-[#EBF6FF]">19歳の自由飛行</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <GoldenBellSvg className="w-8 h-8" />
                    <span className="text-[11px] font-bold text-[#EBF6FF]">幸せを呼ぶ金の鈴</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <DorayakiSvg className="w-8 h-8" />
                    <span className="text-[11px] font-bold text-[#EBF6FF]">笑顔100倍どら焼き</span>
                  </motion.div>
                </div>
              </div>

              {/* Two-Column Surprise Content: Heartfelt Letter + 19-Candle Dorayaki Cake */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: Heartfelt Japanese Birthday Letter */}
                <div className="lg:col-span-7 rounded-2xl border border-[#CBE4F9] bg-[#F8FCFF] p-6 md:p-8">
                  <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-[#D5E9FA]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0072B5]">
                      <Heart className="w-4 h-4 text-[#E60012] fill-[#E60012]" />
                      <span>SPECIAL LETTER FOR RAN · 19歳のバースデーメッセージ</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => playBirthdayMusicBoxChime()}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0096E6] hover:text-[#0072B5] cursor-pointer whitespace-nowrap"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>メロディを鳴らす</span>
                    </button>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-[#0B2239] mb-5 font-serif-jp">
                    19歳になる、大好きならんちゃんへ
                  </h4>

                  <div className="space-y-4 text-sm md:text-[15px] text-[#16324F] leading-loose font-serif-jp">
                    <p>
                      らんちゃん、19歳のお誕生日おめでとう！
                      18歳という1年間、たくさんの笑顔や優しさを周りに届けてくれて本当にありがとう。いよいよ10代最後の特別な1年、「ラストティーン」の幕開けだね。
                    </p>
                    <p>
                      夜が明けるまで夢中でドラえもんを観て、笑ったり感動したりする純粋で温かいらんちゃんの心が大好きです。どんなに忙しい日でも、好きなものにまっすぐ夢中になれるその感性は、らんちゃんの一番の宝物だよ。
                    </p>
                    <p>
                      そして、らんちゃんが大切に抱いている「ユニバーサル・スタジオ・ジャパン（USJ）で働く」という素敵な夢。
                      ドラえもんが四次元ポケットから希望を取り出すように、らんちゃんの明るい笑顔と優しさなら、世界中から訪れるゲストに一生忘れられない魔法を届ける最高のクルーに必ずなれます！
                    </p>
                    <p>
                      もし19歳の途中で少しだけ迷う夜があったら、いつでも心の中の「どこでもドア」を開けてね。いつでも一番近くで、らんちゃんの夢と幸せを全力で応援しています。
                    </p>
                    <p className="font-bold text-[#0072B5] pt-2">
                      19歳の毎日が、星空みたいにキラキラで、焼きたてのどら焼きみたいに甘くて幸せな1年になりますように！本当におめでとう！
                    </p>
                  </div>
                </div>

                {/* Right 5 Columns: Interactive 19th Birthday Dorayaki Candle Cake */}
                <div className="lg:col-span-5 rounded-2xl border border-[#CBE4F9] bg-white p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#0072B5] mb-1">
                      19TH ANNIVERSARY DORAYAKI TOWER
                    </div>
                    <h4 className="text-xl font-bold text-[#0B2239] mb-2">
                      19本のバースデーキャンドル＆特製どら焼きケーキ
                    </h4>
                    <p className="text-xs text-[#4A6B8A] leading-relaxed mb-6">
                      USJの夢と19歳の願いごとを心に思い浮かべて、下のボタンで19本のろうそくを吹き消してみてください！
                    </p>

                    {/* Visual 19 Candles Display */}
                    <div className="rounded-2xl bg-[#0B2239] p-6 text-center mb-6 relative overflow-hidden">
                      <div className="text-[11px] font-mono-num text-[#9BCFF5] mb-4">
                        {candlesLit
                          ? '19 CANDLES LIT · 願いを込めて吹き消そう'
                          : 'WISH GRANTED! · 19歳の願いが夜空へ届きました'}
                      </div>

                      {/* 19 Mini Candles Grid */}
                      <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                        {Array.from({ length: 19 }).map((_, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <div className="h-5 flex items-center justify-center">
                              {candlesLit ? (
                                <motion.div
                                  animate={{
                                    scale: [1, 1.2, 0.95, 1.1, 1],
                                    y: [0, -2, 0],
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    delay: (idx % 5) * 0.15,
                                    repeat: Infinity,
                                  }}
                                  className="w-2.5 h-3.5 rounded-full bg-gradient-to-t from-[#E60012] via-[#FF9900] to-[#FFF59D]"
                                />
                              ) : (
                                <span className="text-[10px] text-[#7CC8F8]">✦</span>
                              )}
                            </div>
                            <div
                              className={`w-2 h-6 rounded-xs border border-white/30 ${
                                idx % 2 === 0 ? 'bg-[#0096E6]' : 'bg-[#FF5C8D]'
                              }`}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Dorayaki Cake Base */}
                      <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/15">
                        <DorayakiSvg className="w-11 h-11" />
                        <div className="text-left">
                          <div className="text-sm font-bold text-[#FFD700]">
                            RAN 19th スペシャル・どら焼きケーキ
                          </div>
                          <div className="text-xs text-[#E2F1FF]">
                            北海道あずき＆四次元ハッピー仕立て
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Candle Action & Secret Omikuji Result */}
                  {candlesLit ? (
                    <button
                      type="button"
                      onClick={handleBlowOutCandles}
                      className="w-full py-3.5 px-5 rounded-xl bg-[#E60012] hover:bg-[#C5000F] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                    >
                      <Flame className="w-4 h-4 text-[#FFD700]" />
                      <span>ふぅーっ！19本のろうそくを吹き消す</span>
                    </button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="rounded-xl bg-[#FFFBEB] border border-[#F4B400] p-4 text-xs text-[#0B2239] leading-relaxed">
                        <div className="font-bold text-[#E60012] mb-1">
                          【19歳・超大吉おみくじ解放！】
                        </div>
                        <p>
                          おめでとうございます！19歳のらんちゃんの運勢は「ドラえもん級のミラクル大吉」！夜更かしアニメの癒やし効果で毎日笑顔が続き、USJで働く夢へ向けて最高のチャンスが舞い込みます！
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCandlesLit(true)}
                        className="w-full py-2.5 px-4 rounded-xl border border-[#CBE4F9] text-xs font-bold text-[#0072B5] hover:bg-[#F4FAFF] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        もう一度キャンドルに火を灯す
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
