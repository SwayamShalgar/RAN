import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Sparkles, CheckCircle2, Star, Award } from 'lucide-react';
import { playGadgetFanfare, playBellChime } from '../utils/soundEffects';
import { AnywhereDoorSvg, GoldenBellSvg } from './GadgetIcons';

interface ParkAreaOption {
  id: string;
  name: string;
  english: string;
  roleTitle: string;
  greeting: string;
  themeColor: string;
}

const USJ_AREAS: ParkAreaOption[] = [
  {
    id: 'hollywood',
    name: 'ハリウッド・エリア',
    english: 'HOLLYWOOD BOULEVARD',
    roleTitle: 'ウェルカム・スマイル・キャスト',
    greeting: '「ユニバーサル・スタジオ・ジャパンへようこそ！最高の1日になりますように！」',
    themeColor: '#0096E6',
  },
  {
    id: 'nintendo',
    name: 'スーパー・ニンテンドー・ワールド',
    english: 'SUPER NINTENDO WORLD',
    roleTitle: 'パワーアップ・ナビゲーター',
    greeting: '「HERE WE GO! らんちゃんの笑顔でゲスト全員のコインと元気をフルチャージ！」',
    themeColor: '#E60012',
  },
  {
    id: 'wizarding',
    name: '魔法界エリア',
    english: 'THE WIZARDING WORLD',
    roleTitle: 'マジカル・ワンダー・ガイド',
    greeting: '「四次元ポケットにも負けない本物の魔法を、今日ここでお届けします！」',
    themeColor: '#0072B5',
  },
  {
    id: 'minion',
    name: 'ミニオン・パーク',
    english: 'MINION PARK',
    roleTitle: 'ハチャメチャ・ハッピー・クルー',
    greeting: '「朝から夜まで笑顔120%！みんなが笑顔になれる最高の空間をつくります！」',
    themeColor: '#F4B400',
  },
];

export default function UsjDreamSection() {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('hollywood');
  const [isStamped, setIsStamped] = useState<boolean>(false);
  const [usjImgError, setUsjImgError] = useState<boolean>(false);
  const [nightImgError, setNightImgError] = useState<boolean>(false);

  const currentArea = USJ_AREAS.find((a) => a.id === selectedAreaId) || USJ_AREAS[0];

  const handleStampPass = () => {
    playGadgetFanfare();
    setIsStamped(true);
  };

  return (
    <section id="usj-dream" className="py-20 md:py-24 px-6 border-b border-[#D5E9FA]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#0072B5] mb-3">
              <span>03. 未来のステージ・USJへの道</span>
              <span aria-hidden="true">·</span>
              <span>UNIVERSAL STUDIOS JAPAN DREAM</span>
              <span aria-hidden="true">·</span>
              <span>19歳のドリーム・パスポート</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#0B2239] text-balance">
              ユニバーサル・スタジオ・ジャパンで輝く、未来のクルー・らんちゃんへ
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#36536E] max-w-md leading-relaxed">
            「いつかUSJで働きたい！」というらんちゃんの素敵な夢。どこでもドアを開けた先にある未来のクルー認定証を、19歳の記念にカスタマイズしてみましょう。
          </p>
        </div>

        {/* Bento Showcase Grid: Visual Story + Interactive Future Cast Member Pass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 columns: Visual Bento of USJ Globe Plaza & Midnight Doraemon Inspiration */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Primary USJ Dream Card */}
            <div className="rounded-2xl border border-[#CBE4F9] bg-white overflow-hidden shadow-xs">
              <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-[#0B2239] via-[#0072B5] to-[#0096E6] overflow-hidden">
                {!usjImgError ? (
                  <img
                    src="/src/assets/images/usj_dream_pass_1793168372132.jpg"
                    alt="ユニバーサル・スタジオ・ジャパンの地球儀と輝く夜空のイメージイラスト"
                    referrerPolicy="no-referrer"
                    onError={() => setUsjImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white text-center">
                    <Globe className="w-12 h-12 text-[#FFD700] mb-3" />
                    <p className="text-lg font-bold">UNIVERSAL STUDIOS JAPAN · DREAM STAGE</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2239]/85 via-[#0B2239]/25 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-xs text-[#9BCFF5] mb-1">
                    <span>OSAKA · DREAM DESTINATION</span>
                    <span aria-hidden="true">·</span>
                    <span>FUTURE CREW STAGE</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    世界中のゲストを笑顔にする、憧れの地球儀プラザへ
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#36536E] leading-relaxed">
                  ドラえもんがひみつ道具でみんなを笑顔にするように、らんちゃんがUSJのクルーとしてゲストに最高の魔法と感動を届ける日が必ずやってきます。19歳の1年間は、その夢へ一歩ずつ近づく大切な助走期間です。
                </p>
              </div>
            </div>

            {/* Secondary Card: Midnight Doraemon Marathon Connection */}
            <div className="rounded-2xl border border-[#CBE4F9] bg-white p-5 md:p-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-[#0B2239] relative">
                {!nightImgError ? (
                  <img
                    src="/src/assets/images/midnight_dorayaki_study_1793168372850.jpg"
                    alt="深夜にドラえもんとどら焼きを楽しむらんちゃんの部屋のイラスト"
                    referrerPolicy="no-referrer"
                    onError={() => setNightImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-xs p-4 text-center">
                    真夜中のドラえもんタイム
                  </div>
                )}
              </div>
              <div className="sm:col-span-7">
                <div className="text-xs font-medium text-[#0072B5] mb-1">
                  真夜中のインスピレーション · 18歳から19歳へ
                </div>
                <h4 className="text-lg font-bold text-[#0B2239] mb-2">
                  夜通しドラえもんを観た夜が、人を喜ばせる原動力に
                </h4>
                <p className="text-xs md:text-sm text-[#36536E] leading-relaxed">
                  物語の温かさやワクワクを誰よりも知っているらんちゃんだからこそ、テーマパークで働く夢はぴったり。深夜の青い画面から受け取った感動を、今度はらんちゃんがUSJでたくさんの人に手渡す番です！
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 columns: Interactive Future USJ Crew Badge & Pass Customizer */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#0096E6] bg-white p-6 md:p-8 shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-[#E2EFFA]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0072B5]">
                  <AnywhereDoorSvg className="w-6 h-6" />
                  <span>未来のUSJクルー認定パス・シミュレーター</span>
                </div>
                <span className="text-xs font-mono-num text-[#4A6B8A]">ID: RAN-19-USJ</span>
              </div>

              <h3 className="text-xl font-bold text-[#0B2239] mb-2">
                担当したい憧れのエリアを選んでください
              </h3>
              <p className="text-xs text-[#4A6B8A] mb-4">
                エリアを切り替えると、らんちゃん専用の未来のネームタグとクルー挨拶が変化します。
              </p>

              {/* Area Selector Buttons */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {USJ_AREAS.map((area) => {
                  const active = area.id === selectedAreaId;
                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => {
                        playBellChime();
                        setSelectedAreaId(area.id);
                      }}
                      className={`px-3 py-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        active
                          ? 'bg-[#0B2239] text-white border-[#0B2239] shadow-xs'
                          : 'bg-[#F4FAFF] text-[#36536E] border-[#CBE4F9] hover:bg-white hover:text-[#0B2239]'
                      }`}
                    >
                      <div className="truncate">{area.name}</div>
                    </button>
                  );
                })}
              </div>

              {/* Official Crew Badge Preview Card */}
              <motion.div
                key={currentArea.id}
                initial={{ opacity: 0.7, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border-2 border-[#0096E6] bg-gradient-to-br from-[#F4FAFF] via-white to-[#EBF6FF] p-5 mb-6 relative"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-[11px] font-mono-num font-bold text-[#0072B5]">
                      UNIVERSAL STUDIOS JAPAN · FUTURE CAST PASS
                    </div>
                    <div className="text-2xl font-black tracking-tight text-[#0B2239] mt-0.5">
                      RAN <span className="text-base font-bold text-[#0096E6]">（蘭 / 19th Anniversary）</span>
                    </div>
                  </div>
                  <GoldenBellSvg className="w-9 h-9 shrink-0" />
                </div>

                <div className="space-y-2.5 text-xs border-t border-[#CBE4F9] pt-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[#4A6B8A]">配属ドリームエリア</span>
                    <span className="font-bold text-[#0B2239]">{currentArea.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#4A6B8A]">未来の称号</span>
                    <span
                      className="font-bold"
                      style={{ color: currentArea.themeColor }}
                    >
                      {currentArea.roleTitle}
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#4A6B8A] block mb-1">らんちゃんのクルー挨拶：</span>
                    <p className="text-xs font-medium text-[#0B2239] bg-white rounded-xl p-3 border border-[#D5E9FA] leading-relaxed">
                      {currentArea.greeting}
                    </p>
                  </div>
                </div>

                {/* Stamped Overlay Badge */}
                {isStamped && (
                  <motion.div
                    initial={{ scale: 1.8, opacity: 0, rotate: -18 }}
                    animate={{ scale: 1, opacity: 1, rotate: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="mt-4 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#FFD700]/25 border-2 border-[#F4B400] text-[#0B2239] font-bold text-xs"
                  >
                    <Award className="w-4 h-4 text-[#E60012]" />
                    <span>2112年＆現在から公認！夢のUSJクルー内定スタンプ刻印済</span>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Stamp Action CTA */}
            <div>
              <button
                type="button"
                onClick={handleStampPass}
                className="w-full py-3.5 px-5 rounded-xl bg-[#0096E6] hover:bg-[#0072B5] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                {isStamped ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#FFD700]" />
                    <span>夢の承認スタンプ刻印完了！（もう一度鳴らす）</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#FFD700]" />
                    <span>19歳・夢のUSJクルー承認スタンプを押す</span>
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#4A6B8A] mt-3">
                <Star className="w-3.5 h-3.5 text-[#F4B400]" />
                <span>ボタンを押すとドラえもんのひみつ道具ファンファーレが鳴ります</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
