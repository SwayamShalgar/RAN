import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, Sparkles, Compass, Gift } from 'lucide-react';
import {
  TimeMachineSvg,
  IfPhoneBoothSvg,
  FourDPocketSvg,
  BigLightSvg,
  DressUpCameraSvg,
  BambooCopterSvg,
  DorayakiSvg,
} from './GadgetIcons';
import {
  playTimeMachineSound,
  playPhoneBoothRing,
  playGadgetFanfare,
} from '../utils/soundEffects';

interface TimeEra {
  id: string;
  year: string;
  label: string;
  title: string;
  description: string;
  coordinates: string;
  badgeColor: string;
}

const TIME_ERAS: TimeEra[] = [
  {
    id: '2007',
    year: '2007年',
    label: '0歳 · 誕生の奇跡',
    title: '可愛い女の子「蘭（RAN）」がこの世界に誕生！',
    description:
      '周囲をパッと明るくする笑顔の種を持って生まれた奇跡の瞬間。この日から、ドラえもんやたくさんの夢と出会う物語が始まりました。',
    coordinates: 'TIME TUNNEL · PAST 2007 · ORIGIN OF SMILE',
    badgeColor: '#FF5C8D',
  },
  {
    id: '2025',
    year: '2025年',
    label: '18歳 · 深夜のアニメ時間',
    title: '夜通しドラえもんを観て、笑って癒やされた18歳の夜',
    description:
      '静かな真夜中の部屋で、青い画面から届くドラえもんの優しい声とひみつ道具の大冒険。18歳のらんちゃんを支えたかけがえのない時間です。',
    coordinates: 'TIME TUNNEL · AGE 18 · MIDNIGHT DORAEMON MARATHON',
    badgeColor: '#0096E6',
  },
  {
    id: '2026',
    year: '2026年',
    label: '19歳 · 現在のラストティーン',
    title: '19歳のお誕生日！10代最後のとびきり自由で眩しい1年',
    description:
      '少女の純粋さと大人の魅力が重なる特別な19歳。タケコプターで空を飛ぶように、好きなことへまっすぐ飛び込める最高のステージです！',
    coordinates: 'TIME TUNNEL · PRESENT 2026 · HAPPY 19TH BIRTHDAY',
    badgeColor: '#F4B400',
  },
  {
    id: '202X',
    year: '202X年',
    label: '近未来 · USJドリーム実現',
    title: '大阪・ユニバーサル・スタジオ・ジャパンで輝くスタークルー！',
    description:
      '憧れのUSJのネームタグを胸につけて、世界中のゲストに最高の笑顔と手を振る未来のらんちゃん。夢が現実になる日はすぐそこです！',
    coordinates: 'TIME TUNNEL · NEAR FUTURE · UNIVERSAL STUDIOS JAPAN',
    badgeColor: '#E60012',
  },
  {
    id: '2112',
    year: '2112年',
    label: '22世紀 · ドラえもん誕生年',
    title: '2112年9月3日・未来都市トーキョーからのバースデー祝電！',
    description:
      '「夜通しぼくのアニメを観てくれてありがとう！19歳のらんちゃんの夢は、22世紀のぼくが四次元ポケットで全部応援してるよ！」— ドラえもんより',
    coordinates: 'TIME TUNNEL · 22ND CENTURY · TOKYO MATSUSHIBA FACTORY',
    badgeColor: '#0072B5',
  },
];

interface WhatIfScenario {
  id: string;
  prompt: string;
  resultTitle: string;
  resultStory: string;
}

const WHAT_IF_SCENARIOS: WhatIfScenario[] = [
  {
    id: 'usj-vip',
    prompt: '「もしも、ドラえもんがUSJの1日VIPゲストとしてらんちゃんに案内されたら？」',
    resultTitle: 'もしもボックスの世界①：青空のUSJ貸切ツアー！',
    resultStory:
      'タケコプターをつけたドラえもんが地球儀の前で大はしゃぎ！クルー姿のらんちゃんが笑顔で案内すると、ドラえもんはお礼に「どら焼き味の特製チュロス」を出して2人で乾杯しました♪',
  },
  {
    id: 'dorayaki-night',
    prompt: '「もしも、真夜中のドラえもん鑑賞中に画面から本物のひみつ道具が出てきたら？」',
    resultTitle: 'もしもボックスの世界②：午前2時の四次元パーティー！',
    resultStory:
      '深夜2時、テレビ画面がキラッと光って「キャンピングカプセル」と「グルメテーブルかけ」が登場！何時間アニメを観ても翌朝スッキリ元気100倍になる魔法の夜更かし空間が完成！',
  },
  {
    id: 'miracle-19',
    prompt: '「もしも、らんちゃんの19歳の1年間が映画ドラえもんみたいな大冒険だったら？」',
    resultTitle: 'もしもボックスの世界③：『映画 らんの19歳と輝く地球儀の奇跡』大ヒット公開！',
    resultStory:
      '主題歌が流れる中、19歳のらんちゃんが仲間と一緒に夢のステージ・大阪USJへと駆け抜ける感動作！観客全員がスタンディングオベーションで19歳をお祝いしています！',
  },
];

const POCKET_GACHA_ITEMS = [
  {
    name: 'きせかえカメラ（USJクルー特別仕様）',
    desc: 'シャッターを切るだけで、最高に似合うユニバーサル・スタジオ・ジャパンの制服姿に大変身！19歳のおしゃれ運も急上昇！',
  },
  {
    name: 'ビッグライト（夢＆ハッピー拡大版）',
    desc: 'らんちゃんの19歳のワクワクと、大好きなどら焼きを特大サイズに拡大！小さな悩みはスモールライトで消去完了！',
  },
  {
    name: '通りぬけフープ（試験・面接パス仕様）',
    desc: 'どんな壁が現れても、壁にフープをピタッと貼れば笑顔でスイスイ通りぬけ！USJへの道もまっすぐ開통！',
  },
  {
    name: 'グルメテーブルかけ（真夜中のごちそう版）',
    desc: '深夜にドラえもんを観ながら「焼きたてどら焼きと抹茶ラテ！」と唱えるだけで、いつでも温かいごちそうが出現します！',
  },
  {
    name: 'ころばぬ先の杖（19歳絶対安心お守り）',
    desc: '19歳の新しい挑戦をいつでもそばで守ってくれる魔法の杖。安心して自分の夢へ全力ダッシュできます！',
  },
];

export default function TimeMachineDrawerSection() {
  const [selectedEraId, setSelectedEraId] = useState<string>('2026');
  const [selectedWhatIfId, setSelectedWhatIfId] = useState<string>('usj-vip');
  const [gachaIndex, setGachaIndex] = useState<number>(0);
  const [gachaSpins, setGachaSpins] = useState<number>(1);

  const currentEra = TIME_ERAS.find((e) => e.id === selectedEraId) || TIME_ERAS[2];
  const currentWhatIf =
    WHAT_IF_SCENARIOS.find((w) => w.id === selectedWhatIfId) || WHAT_IF_SCENARIOS[0];
  const currentGacha = POCKET_GACHA_ITEMS[gachaIndex];

  const handleWarpEra = (id: string) => {
    playTimeMachineSound();
    setSelectedEraId(id);
  };

  const handleDialWhatIf = (id: string) => {
    playPhoneBoothRing();
    setSelectedWhatIfId(id);
  };

  const handleDrawFromPocket = () => {
    playGadgetFanfare();
    setGachaIndex((prev) => (prev + 1) % POCKET_GACHA_ITEMS.length);
    setGachaSpins((prev) => prev + 1);
  };

  return (
    <section
      id="time-machine"
      className="py-20 md:py-24 px-6 bg-gradient-to-b from-[#0B2239] via-[#0E2B48] to-[#0B2239] text-white border-b border-[#1C3B5E] relative overflow-hidden"
    >
      {/* Subtle 4D Time Tunnel Concentric Circles in Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
        <div className="w-[500px] h-[500px] rounded-full border-2 border-dashed border-[#0096E6]" />
        <div className="absolute w-[760px] h-[760px] rounded-full border border-[#FFD700]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#7CC8F8] mb-3">
              <span>机の引き出し・タイムマシン時空トンネル</span>
              <span aria-hidden="true">·</span>
              <span>2007年 ➔ 2026年（19歳） ➔ 2112年</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white text-balance">
              机の引き出しを開けて、タイムマシンで19歳の時空クルーズへ！
            </h2>
          </div>
          <p className="text-sm text-[#B8DDF8] max-w-md leading-relaxed">
            ドラえもんといえば、机の引き出しから飛び込む四次元の時空トンネル。年号ボタンをクリックして、らんちゃんの過去・現在・USJの未来・そして22世紀へワープしよう！
          </p>
        </div>

        {/* Time Machine Desk Drawer Era Selector */}
        <div className="rounded-3xl border-2 border-[#0096E6] bg-[#112E4D]/90 p-6 md:p-8 mb-10 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/15">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#0096E6]/25 border border-[#0096E6] flex items-center justify-center shrink-0">
                <TimeMachineSvg className="w-9 h-9" />
              </div>
              <div>
                <div className="text-xs font-mono-num text-[#FFD700] font-bold">
                  DESK DRAWER TIME MACHINE COCKPIT
                </div>
                <div className="text-base md:text-lg font-bold text-white">
                  ワープしたい年代ボタンを押して操縦レバーを動かそう
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {TIME_ERAS.map((era) => {
                const active = era.id === selectedEraId;
                return (
                  <button
                    key={era.id}
                    type="button"
                    onClick={() => handleWarpEra(era.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[#FFD700] text-[#0B2239] shadow-md scale-105'
                        : 'bg-white/10 text-[#E2F1FF] hover:bg-white/20'
                    }`}
                  >
                    {era.year}（{era.label.split(' · ')[0]}）
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Time Era Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEra.id}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-4 rounded-2xl bg-[#0B2239] border border-[#0096E6]/50 p-5 text-center">
                <div className="text-xs font-mono-num text-[#7CC8F8] mb-1">
                  WARP DESTINATION YEAR
                </div>
                <div
                  className="text-4xl md:text-5xl font-black font-mono-num my-2"
                  style={{ color: currentEra.badgeColor }}
                >
                  {currentEra.year}
                </div>
                <div className="text-xs font-bold text-white">
                  {currentEra.label}
                </div>
              </div>

              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-num text-[#9BCFF5]">
                  <Compass className="w-4 h-4 text-[#FFD700]" />
                  <span>{currentEra.coordinates}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {currentEra.title}
                </h3>
                <p className="text-sm md:text-base text-[#D6ECFF] leading-relaxed">
                  {currentEra.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom 2-Column Interactive Doraemon Experiences: What-If Phone Booth + 4D Pocket Gacha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: もしもボックス (What-If Phone Booth) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#28527A] bg-[#112E4D] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <IfPhoneBoothSvg className="w-10 h-10 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#FF85A9]">
                      ひみつ道具・もしもボックス実験室
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      「もしもボックス」で19歳のミラクル世界へ電話しよう
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#B8DDF8] mb-5 leading-relaxed">
                受話器を取って「もしも〜だったら」と話すだけで世界が変わる赤い電話ボックス。らんちゃんが体験したい「もしもの世界」を選んでクリックしてください！
              </p>

              {/* Scenario Buttons */}
              <div className="space-y-2.5 mb-6">
                {WHAT_IF_SCENARIOS.map((item) => {
                  const isCurrent = item.id === selectedWhatIfId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleDialWhatIf(item.id)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm font-bold flex items-center justify-between gap-3 transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-[#E60012] border-[#FF85A9] text-white shadow-sm'
                          : 'bg-[#0B2239]/80 border-[#28527A] text-[#D6ECFF] hover:bg-[#0B2239]'
                      }`}
                    >
                      <span className="leading-snug">{item.prompt}</span>
                      <PhoneCall className="w-4 h-4 shrink-0 text-[#FFD700]" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* What-If Result Box */}
            <div className="rounded-xl bg-[#0B2239] border border-[#0096E6]/40 p-5">
              <div className="text-xs font-bold text-[#FFD700] mb-1">
                プルルル♪ ガチャッ！ {currentWhatIf.resultTitle}
              </div>
              <p className="text-xs md:text-sm text-[#E2F1FF] leading-relaxed">
                {currentWhatIf.resultStory}
              </p>
            </div>
          </div>

          {/* Right 5 Columns: 四次元ポケット・ひみつ道具おみくじガチャ */}
          <div className="lg:col-span-5 rounded-2xl border border-[#28527A] bg-[#112E4D] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FourDPocketSvg className="w-10 h-10 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#7CC8F8]">
                    22世紀デパート直送・引き放題
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    四次元ポケット・お祝い道具ガチャ
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#B8DDF8] mb-5 leading-relaxed">
                ドラえもんのおなかの四次元ポケットに手を入れて、今のらんちゃんにぴったりのボーナスひみつ道具を取り出してみよう！
              </p>

              {/* Drawn Gadget Card */}
              <motion.div
                key={gachaSpins}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                className="rounded-2xl bg-white text-[#0B2239] p-5 mb-6 border-2 border-[#FFD700]"
              >
                <div className="flex items-center justify-between text-[11px] font-mono-num text-[#0072B5] font-bold mb-2">
                  <span>SECRET POCKET DRAW #{gachaSpins}</span>
                  <span>大当たり！</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  {gachaIndex % 3 === 0 ? (
                    <DressUpCameraSvg className="w-10 h-10 shrink-0" />
                  ) : gachaIndex % 3 === 1 ? (
                    <BigLightSvg className="w-10 h-10 shrink-0" />
                  ) : (
                    <BambooCopterSvg className="w-10 h-10 shrink-0" />
                  )}
                  <h4 className="text-base font-black text-[#0B2239]">
                    {currentGacha.name}
                  </h4>
                </div>
                <p className="text-xs text-[#36536E] leading-relaxed">
                  {currentGacha.desc}
                </p>
              </motion.div>
            </div>

            <button
              type="button"
              onClick={handleDrawFromPocket}
              className="w-full py-3.5 px-5 rounded-xl bg-[#FFD700] hover:bg-[#F4B400] text-[#0B2239] font-black text-sm flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer whitespace-nowrap"
            >
              <Gift className="w-4 h-4 text-[#E60012]" />
              <span>四次元ポケットから次の道具を取り出す！</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
