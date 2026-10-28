/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Volume2, ArrowDownRight, RefreshCw, Heart } from 'lucide-react';
import {
  DoraemonCharacterSvg,
  GoldenBellSvg,
  BambooCopterSvg,
  AnywhereDoorSvg,
  TimeKerchiefSvg,
  DorayakiSvg,
} from './components/GadgetIcons';
import GadgetPocketSection from './components/GadgetPocketSection';
import TimeMachineDrawerSection from './components/TimeMachineDrawerSection';
import BirthdayPoetrySection from './components/BirthdayPoetrySection';
import UsjDreamSection from './components/UsjDreamSection';
import MagicalSurpriseSection from './components/MagicalSurpriseSection';
import {
  playBellChime,
  playTimeMachineSound,
  playGadgetFanfare,
  playNoseBoop,
  playDorayakiMunch,
} from './utils/soundEffects';

const DORAEMON_QUOTES = [
  '「らんちゃん、19歳のお誕生日おめでとう！夜通しぼくを観てくれていつもありがとう！」',
  '「ぼくの四次元ポケットには、らんちゃんのUSJの夢を応援する道具がいっぱい入ってるよ！」',
  '「モグモグ…！らんちゃんと一緒に真夜中に食べるどら焼きは世界一おいしいなぁ♪」',
  '「18歳よりもっともっと楽しい19歳になるよ！どこでもドアで未来へ出発進行〜！」',
];

export default function App() {
  const [ageMode, setAgeMode] = useState<18 | 19>(19);
  const [bellRinging, setBellRinging] = useState<boolean>(false);
  const [heroImgError, setHeroImgError] = useState<boolean>(false);
  const [doraHappy, setDoraHappy] = useState<boolean>(false);
  const [quoteIdx, setQuoteIdx] = useState<number>(0);
  const [activeGadgetBanner, setActiveGadgetBanner] = useState<{
    name: string;
    accent: string;
  } | null>(null);

  const handleRingBell = () => {
    playBellChime();
    setBellRinging(true);
    setDoraHappy(true);
    setTimeout(() => setBellRinging(false), 900);
    setTimeout(() => setDoraHappy(false), 2200);
  };

  const handleInteractDoraemon = (mode: 'nose' | 'dorayaki') => {
    if (mode === 'nose') {
      playNoseBoop();
    } else {
      playDorayakiMunch();
    }
    setDoraHappy(true);
    setQuoteIdx((prev) => (prev + 1) % DORAEMON_QUOTES.length);
    setTimeout(() => setDoraHappy(false), 2600);
  };

  const handleToggleTimeKerchief = () => {
    playTimeMachineSound();
    const nextAge = ageMode === 19 ? 18 : 19;
    setAgeMode(nextAge);
    if (nextAge === 19) {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.35 },
        colors: ['#0096E6', '#FFD700', '#E60012', '#FF5C8D'],
      });
    }
  };

  const handleGlobalGadgetEffect = (gadgetName: string, accent: string) => {
    setActiveGadgetBanner({ name: gadgetName, accent });
    setDoraHappy(true);
    setTimeout(() => {
      setActiveGadgetBanner(null);
      setDoraHappy(false);
    }, 3200);
  };

  const scrollToSurprise = () => {
    playGadgetFanfare();
    const el = document.getElementById('surprise');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4FAFF] text-[#0B2239]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-8 px-6 py-4 bg-[#0096E6] text-white border-b-4 border-[#E60012] shadow-sm">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={() => playBellChime()}
          className="text-lg font-black tracking-tight text-white whitespace-nowrap shrink-0"
        >
          RAN 19th · ドラえもん特別記念号
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-white/95">
          <a
            href="#gadgets"
            className="hover:text-[#FFD700] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            ひみつ道具
          </a>
          <a
            href="#time-machine"
            className="hover:text-[#FFD700] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            タイムマシン
          </a>
          <a
            href="#poetry"
            className="hover:text-[#FFD700] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            十九歳の詩
          </a>
          <a
            href="#usj-dream"
            className="hover:text-[#FFD700] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            USJの夢
          </a>
          <a
            href="#surprise"
            className="hover:text-[#FFD700] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            サプライズ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={scrollToSurprise}
            className="px-4 py-2 text-xs font-black text-[#0B2239] bg-[#FFD700] rounded-xl hover:bg-[#FFF59D] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            どこでもドアを開く
          </button>
        </div>
      </header>

      {/* Gadget Transition Ripple Notification */}
      <AnimatePresence>
        {activeGadgetBanner && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-5 right-5 z-50 rounded-2xl bg-[#0B2239] text-white px-5 py-3.5 shadow-xl border-2 border-[#FFD700] flex items-center gap-3"
          >
            <Sparkles
              className="w-4 h-4 shrink-0"
              style={{ color: activeGadgetBanner.accent }}
            />
            <span className="text-xs font-bold">
              テレテレッテレー♪『{activeGadgetBanner.name}』の魔法が発動しました！
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section: Split-Screen Architecture + Interactive Doraemon Mascot + Full-Width Milestone Strip */}
      <main className="flex-1">
        <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-[#E3F4FF] via-[#F4FAFF] to-white relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            {/* 2-Column Hero Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
              {/* Left Column (7 cols): Typographic Hierarchy + Interactive Doraemon Companion */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Clean Unboxed Metadata with Typographic Separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#0072B5] mb-4">
                    <span>HAPPY 19TH BIRTHDAY RAN</span>
                    <span aria-hidden="true">·</span>
                    <span>18歳から19歳への扉</span>
                    <span aria-hidden="true">·</span>
                    <span>2112年＆USJドリーム特別仕様</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black tracking-tight text-[#0B2239] leading-[1.18] text-balance mb-5">
                    らんちゃん、
                    <span className="text-[#0096E6]">19歳</span>
                    のお誕生日おめでとう！
                  </h1>

                  <p className="text-base md:text-lg text-[#244361] leading-relaxed mb-6 max-w-2xl">
                    夜が明けるまで夢中でドラえもんを観るのが大好きならんちゃんへ。
                    18歳の素敵な思い出を胸に、いよいよ10代最後の輝く1年・19歳が始まります。
                    憧れのユニバーサル・スタジオ・ジャパン（USJ）で働く夢へ続く、ドラえもんのひみつ道具がいっぱいのバースデーサイトです！
                  </p>

                  {/* Interactive Doraemon Character Greeting Box */}
                  <div className="rounded-3xl border-2 border-[#0096E6] bg-white p-5 mb-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center gap-5">
                      <motion.div
                        animate={doraHappy ? { y: [0, -8, 0], rotate: [0, -4, 4, 0] } : {}}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleInteractDoraemon('nose')}
                        className="cursor-pointer shrink-0 select-none"
                        title="ドラえもんをクリックしてみてね！"
                      >
                        <DoraemonCharacterSvg className="w-28 h-28" isHappy={doraHappy} />
                      </motion.div>

                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#0096E6] mb-1.5">
                          <span>ドラえもんからのバースデーメッセージ</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#E60012]">タッチで反応♪</span>
                        </div>
                        <p className="text-sm md:text-base font-bold text-[#0B2239] leading-relaxed mb-3.5 bg-[#F0F9FF] rounded-2xl p-3.5 border border-[#BFE0FA]">
                          {DORAEMON_QUOTES[quoteIdx]}
                        </p>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                          <button
                            type="button"
                            onClick={() => handleInteractDoraemon('dorayaki')}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFD700] hover:bg-[#F4B400] text-[#0B2239] text-xs font-black transition-colors cursor-pointer whitespace-nowrap shrink-0"
                          >
                            <DorayakiSvg className="w-4 h-4" />
                            <span>どら焼きをプレゼントする</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleInteractDoraemon('nose')}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFF0F2] hover:bg-[#FFE0E5] text-[#E60012] border border-[#FFB8C2] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                          >
                            <Heart className="w-3.5 h-3.5 fill-[#E60012]" />
                            <span>赤いお鼻をタッチする</span>
                          </button>
                          <button
                            type="button"
                            onClick={handleToggleTimeKerchief}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F4FAFF] hover:bg-[#0096E6] text-[#0072B5] hover:text-white border border-[#CBE4F9] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>{ageMode === 19 ? '18歳回想へ' : '19歳現在へ'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary & Secondary Interactive Hero Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={scrollToSurprise}
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#FF5C8D] hover:bg-[#FF3D77] text-white font-black text-base shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <AnywhereDoorSvg className="w-6 h-6" />
                    <span>どこでもドア・サプライズを開く</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleRingBell}
                    className="inline-flex items-center gap-2.5 px-5 py-4 rounded-2xl bg-white hover:bg-[#FFFDF0] text-[#0B2239] border-2 border-[#0096E6] font-bold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <div className={bellRinging ? 'animate-bell-swing' : ''}>
                      <GoldenBellSvg className="w-6 h-6" />
                    </div>
                    <Volume2 className="w-4 h-4 text-[#0096E6]" />
                    <span>金の鈴をチリンと鳴らす</span>
                  </button>
                </div>
              </div>

              {/* Right Column (5 cols): High-Resolution Hero Artwork Container */}
              <div className="lg:col-span-5 flex">
                <div className="w-full rounded-3xl border-4 border-[#0096E6] bg-[#0B2239] overflow-hidden shadow-lg relative flex flex-col justify-between min-h-[380px]">
                  {!heroImgError ? (
                    <img
                      src="/src/assets/images/hero_doraemon_night_sky_1793168370414.jpg"
                      alt="真夜中の窓辺からどこでもドアとUSJの地球儀が輝く星空を望むイラスト"
                      referrerPolicy="no-referrer"
                      onError={() => setHeroImgError(true)}
                      className="w-full h-full object-cover lg:h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white bg-gradient-to-br from-[#0B2239] via-[#0072B5] to-[#0096E6]">
                      <BambooCopterSvg className="w-16 h-16 mb-4" />
                      <p className="text-lg font-bold">RAN 19th Birthday · 星空とどこでもドア</p>
                    </div>
                  )}

                  {/* Measured Contrast Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2239]/90 via-[#0B2239]/25 to-transparent flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-num font-bold text-[#FFF9C4] bg-[#0B2239]/75 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                        {ageMode === 19 ? 'STAGE 19 · LAST TEEN MAGIC' : 'MEMORY 18 · MIDNIGHT ANIME'}
                      </span>
                      <div className="animate-float-slow">
                        <BambooCopterSvg className="w-10 h-10" />
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-[#9BCFF5] mb-1">
                        真夜中のドラえもんから、大阪・USJの輝く地球儀へ
                      </div>
                      <p className="text-base md:text-lg font-bold text-white leading-snug">
                        「大好き」を貫く力は、どんなひみつ道具よりも強い魔法になる。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Milestone Row Below Hero Split */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-[#CBE4F9]">
              <div className="rounded-2xl bg-white border border-[#CBE4F9] p-5">
                <div className="text-xs text-[#4A6B8A] mb-1">バースデー・マイルストーン</div>
                <div className="text-2xl md:text-3xl font-black text-[#0096E6] font-mono-num">
                  18歳 ➔ 19歳
                </div>
                <div className="text-xs text-[#36536E] mt-1">
                  10代最後の輝くラストティーンイヤー
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-[#CBE4F9] p-5">
                <div className="text-xs text-[#4A6B8A] mb-1">夜通しドラえもん愛</div>
                <div className="text-2xl md:text-3xl font-black text-[#0B2239] font-mono-num">
                  365 Nights
                </div>
                <div className="text-xs text-[#36536E] mt-1">
                  真夜中まで笑顔をくれる最高の相棒
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-[#CBE4F9] p-5">
                <div className="text-xs text-[#4A6B8A] mb-1">らんちゃんの将来の夢</div>
                <div className="text-2xl md:text-3xl font-black text-[#E60012] font-mono-num">
                  USJ CREW
                </div>
                <div className="text-xs text-[#36536E] mt-1">
                  ユニバーサル・スタジオ・ジャパンで働く夢
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-[#CBE4F9] p-5">
                <div className="text-xs text-[#4A6B8A] mb-1">22世紀のドラえもんナンバー</div>
                <div className="text-2xl md:text-3xl font-black text-[#F4B400] font-mono-num">
                  2112.09.03
                </div>
                <div className="text-xs text-[#36536E] mt-1">
                  四次元ポケットいっぱいの幸福を保証
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Iconic Doraemon Red Collar & Golden Bell Visual Motif Divider */}
        <div className="relative flex items-center justify-center py-3 bg-[#E60012] border-y-2 border-[#0B2239]">
          <button
            type="button"
            onClick={handleRingBell}
            title="金の鈴を鳴らす"
            className="group flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-[#FFD700] border-2 border-[#0B2239] text-[#0B2239] text-xs font-black shadow-sm hover:scale-105 transition-transform cursor-pointer"
          >
            <GoldenBellSvg className="w-6 h-6" />
            <span>四次元ポケット・バースデーワールドへようこそ！（鈴を鳴らす♪）</span>
          </button>
        </div>

        {/* Section 1: Four-Dimensional Pocket Gadget Transitions & Midnight Doraemon Theater */}
        <GadgetPocketSection onTriggerGlobalGadgetEffect={handleGlobalGadgetEffect} />

        {/* Section 2: Desk Drawer Time Machine Warp, What-If Phone Booth & 4D Pocket Gacha */}
        <TimeMachineDrawerSection />

        {/* Section 3: Original Japanese Birthday Poem for 19-Year-Old Ran */}
        <BirthdayPoetrySection />

        {/* Section 4: Universal Studios Japan Future Cast Member Pass & Dream Stage */}
        <UsjDreamSection />

        {/* Section 5: Magical Doraemon Anywhere Door Surprise & 19-Candle Dorayaki Cake */}
        <MagicalSurpriseSection />
      </main>

      {/* Celebratory Doraemon-Themed Footer */}
      <footer className="bg-[#0B2239] text-white py-12 px-6 border-t-4 border-[#0096E6]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <DoraemonCharacterSvg className="w-12 h-12 shrink-0" isHappy={true} />
            <div>
              <div className="text-sm font-bold text-white">
                RAN 19th Birthday Special · 蘭ちゃんお誕生日記念サイト
              </div>
              <div className="text-xs text-[#9BCFF5]">
                大好きなドラえもんの青空と、ユニバーサル・スタジオ・ジャパンの夢に心をこめて
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#9BCFF5]">
            <a href="#gadgets" className="hover:text-white transition-colors">
              ひみつ道具
            </a>
            <a href="#time-machine" className="hover:text-white transition-colors">
              タイムマシン
            </a>
            <a href="#poetry" className="hover:text-white transition-colors">
              十九歳の詩
            </a>
            <a href="#usj-dream" className="hover:text-white transition-colors">
              USJの夢
            </a>
            <a href="#surprise" className="hover:text-white transition-colors">
              サプライズ
            </a>
            <button
              type="button"
              onClick={handleRingBell}
              className="px-3.5 py-1.5 rounded-lg bg-[#0096E6] hover:bg-[#0072B5] text-white font-bold transition-colors cursor-pointer whitespace-nowrap"
            >
              お祝いの鈴を鳴らす♪
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
