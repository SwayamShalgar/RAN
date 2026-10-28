import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Tv, Moon, Volume2, RotateCcw } from 'lucide-react';
import {
  AnywhereDoorSvg,
  BambooCopterSvg,
  TimeKerchiefSvg,
  MemoryBreadSvg,
  DorayakiSvg,
  FourDPocketSvg,
} from './GadgetIcons';
import {
  playGadgetFanfare,
  playTimeMachineSound,
  playDorayakiMunch,
  playDoorPortalSound,
} from '../utils/soundEffects';

interface GadgetItem {
  id: 'door' | 'kerchief' | 'copter' | 'bread';
  number: string;
  name: string;
  furigana: string;
  chant: string;
  accentColor: string;
  bgTint: string;
  summary: string;
  ranStory: string;
  effectBadge: string;
  destinationOrState: string;
}

const GADGETS: GadgetItem[] = [
  {
    id: 'door',
    number: '01',
    name: 'どこでもドア',
    furigana: 'DOKODEMO DOOR',
    chant: 'テレテレッテレー♪「どこでもドア〜！」',
    accentColor: '#FF5C8D',
    bgTint: 'from-[#FFF0F5] via-[#F4FAFF] to-[#E6F4FF]',
    summary: 'らんちゃんの部屋から、夢のステージである大阪・ユニバーサル・スタジオ・ジャパンの地球儀前へ一瞬でワープする特別なピンクの扉。',
    ranStory:
      '夜通しドラえもんを観て笑っていたその部屋から、ドアノブをひねるだけで憧れのUSJハリウッド・エリアへ。19歳の1年間は、夢の場所がぐっと近づく魔法の距離になります。',
    effectBadge: '瞬間ワープ完了：らんちゃんの部屋 ➔ 大阪・USJメインゲート前',
    destinationOrState: '座標：UNIVERSAL STUDIOS JAPAN · 夢のクルー・ステージ',
  },
  {
    id: 'kerchief',
    number: '02',
    name: 'タイムふろしき',
    furigana: 'TIME FUROSHIKI',
    chant: 'テレテレッテレー♪「タイムふろしき〜！」',
    accentColor: '#E60012',
    bgTint: 'from-[#FFF2F2] via-[#F4FAFF] to-[#E8F6FF]',
    summary: '18歳までのたくさんの思い出を大切に包み込みながら、くるりと裏返して「19歳」の新しい輝きへと時間を進めるひみつ道具。',
    ranStory:
      '赤い面で包めば、18歳で頑張った日々や深夜のアニメ時間が宝物に。青い面で包めば、10代最後の19歳という最高に自由で眩しい未来が今ここから始まります！',
    effectBadge: '時間変換モード発動：18歳の思い出 ➔ 19歳の輝くラストティーンへ',
    destinationOrState: '時間軸：18歳（完了） ➔ 19歳（新章スタート！）',
  },
  {
    id: 'copter',
    number: '03',
    name: 'タケコプター',
    furigana: 'TAKE-COPTER',
    chant: 'テレテレッテレー♪「タケコプター〜！」',
    accentColor: '#F4B400',
    bgTint: 'from-[#FFFBEB] via-[#F0F9FF] to-[#E0F2FE]',
    summary: 'どんなに高い壁や忙しい日々も、ふわりと笑顔で飛び越えて、夜空の星や朝の青空を自由に散歩できる黄金のプロペラ。',
    ranStory:
      '眠れない夜にドラえもんがくれた優しい勇気のように、19歳のらんちゃんの背中にも見えないタケコプターがついています。どこまでだって高く、自分らしく飛んでいけますように。',
    effectBadge: '空中散歩モード：星空高度 1,900m · 自由飛行中',
    destinationOrState: 'フライト状況：追い風100% · 笑顔の高度上昇中',
  },
  {
    id: 'bread',
    number: '04',
    name: 'アンキパン（19歳お祝い版）',
    furigana: 'ANKI-PAN SPECIAL',
    chant: 'テレテレッテレー♪「19歳お祝いアンキパン〜！」',
    accentColor: '#0096E6',
    bgTint: 'from-[#EFF8FF] via-[#F4FAFF] to-[#FFFDF5]',
    summary: 'テスト勉強のためではなく、「らんちゃんがどれほど愛されていて、どれほど素敵な夢を持っているか」を心に焼き付ける特別仕様。',
    ranStory:
      '「らんちゃんの笑顔は最高！」「USJの夢は必ず叶う！」「19歳はとびきり幸せになる！」——この3つの魔法の言葉をパンに写して、19歳の毎日にしっかりチャージ！',
    effectBadge: 'ハッピー記憶スタンプ完了：19歳の幸福度 100% チャージ',
    destinationOrState: '刻印メッセージ：「蘭の夢・USJクルーへの道・絶対合格」',
  },
];

const MIDNIGHT_EPISODES = [
  {
    time: '01:15 AM',
    title: '第1話：夜更かしらんちゃんと青い親友',
    desc: 'みんなが眠りについた静かな深夜。画面からあふれるドラえもんの優しい声と青い光が、らんちゃんの1日をふんわり癒やしてくれる大切な時間。',
  },
  {
    time: '02:30 AM',
    title: '第2話：四次元ポケットから飛び出す「大丈夫」',
    desc: 'どんなに大変なことがあっても、夜通しドラえもんを観れば不思議と笑顔になれる。「なんとかなるさ」の魔法は、らんちゃんの最大の強みです。',
  },
  {
    time: '03:45 AM',
    title: '第3話：夜明け前のUSJドリーム・マップ',
    desc: 'アニメを観ながら思い描く、ユニバーサル・スタジオ・ジャパンで働く未来の自分。ゲストに最高の笑顔を届ける姿が、もうすぐそこに待っています。',
  },
  {
    time: '05:00 AM',
    title: '最終話：18歳の夜が明けて、19歳の朝へ',
    desc: '窓の外が美しいドラえもんブルーに染まる頃、19歳という新しい扉が開きます。今日も、これからも、ワクワクが止まらない毎日へ！',
  },
];

export default function GadgetPocketSection({
  onTriggerGlobalGadgetEffect,
}: {
  onTriggerGlobalGadgetEffect: (gadgetName: string, accent: string) => void;
}) {
  const [activeGadgetId, setActiveGadgetId] = useState<GadgetItem['id']>('door');
  const [transitionCount, setTransitionCount] = useState<number>(1);
  const [dorayakiCount, setDorayakiCount] = useState<number>(19);
  const [episodeIndex, setEpisodeIndex] = useState<number>(0);
  const [dorayakiToast, setDorayakiToast] = useState<string>('19歳のお祝いに、焼きたてのどら焼きをどうぞ！');

  const activeGadget = GADGETS.find((g) => g.id === activeGadgetId) || GADGETS[0];

  const handleSelectGadget = (gadget: GadgetItem) => {
    setActiveGadgetId(gadget.id);
    setTransitionCount((prev) => prev + 1);
    if (gadget.id === 'door') {
      playDoorPortalSound();
    } else if (gadget.id === 'kerchief') {
      playTimeMachineSound();
    } else {
      playGadgetFanfare();
    }
    onTriggerGlobalGadgetEffect(gadget.name, gadget.accentColor);
  };

  const handleEatDorayaki = () => {
    playDorayakiMunch();
    const nextCount = dorayakiCount + 1;
    setDorayakiCount(nextCount);
    const messages = [
      'ぱくっ！甘いあんこで19歳のハッピーエネルギーが満タンに！',
      'ドラえもんも大喜び！「らんちゃん、もう1個一緒に食べよう！」',
      '深夜のアニメ鑑賞のお供に最高！笑顔パワーがアップしました！',
      'USJのクルーになる夢へ向けて、元気100倍チャージ完了！',
    ];
    setDorayakiToast(messages[nextCount % messages.length]);
  };

  const renderGadgetIcon = (id: GadgetItem['id'], sizeClass = 'w-12 h-12') => {
    switch (id) {
      case 'door':
        return <AnywhereDoorSvg className={sizeClass} />;
      case 'kerchief':
        return <TimeKerchiefSvg className={sizeClass} />;
      case 'copter':
        return <BambooCopterSvg className={sizeClass} />;
      case 'bread':
        return <MemoryBreadSvg className={sizeClass} />;
    }
  };

  return (
    <section id="gadgets" className="py-20 md:py-24 px-6 border-b border-[#D5E9FA]">
      <div className="max-w-[1200px] mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#0072B5] mb-3">
              <span>01. 四次元ポケットの贈り物</span>
              <span aria-hidden="true">·</span>
              <span>インタラクティブ・ひみつ道具体験</span>
              <span aria-hidden="true">·</span>
              <span>クリックで魔法エフェクト発動</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#0B2239] text-balance">
              19歳のらんちゃんへ贈る、4つのひみつ道具
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#36536E] max-w-md leading-relaxed">
            下のポケットから好きな道具を選んでクリックしてみてください。ドラえもんの効果音とともに、18歳から19歳への特別なトランジションが発動します。
          </p>
        </div>

        {/* Gadget Selector Tabs (Interactive Segmented Buttons) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {GADGETS.map((gadget) => {
            const isSelected = gadget.id === activeGadgetId;
            return (
              <button
                key={gadget.id}
                type="button"
                onClick={() => handleSelectGadget(gadget)}
                className={`group relative flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#0096E6] shadow-md -translate-y-0.5'
                    : 'bg-[#EBF6FF]/70 border-[#CBE4F9] hover:bg-white hover:border-[#0096E6]/60'
                }`}
              >
                <div className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                  {renderGadgetIcon(gadget.id, 'w-11 h-11')}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono-num text-[#0072B5]">
                    道具 {gadget.number}
                  </div>
                  <div className="text-base font-bold text-[#0B2239] truncate">
                    {gadget.name}
                  </div>
                  <div className="text-xs text-[#4A6B8A] truncate">
                    タップして使う
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Gadget Transition Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 cols: Active Gadget Portal Stage */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeGadget.id}-${transitionCount}`}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full rounded-2xl border border-[#BFE0FA] bg-gradient-to-br ${activeGadget.bgTint} p-6 md:p-8 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Decorative 4D Dimensional Rings (Pure SVG / CSS) */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 w-56 h-56 rounded-full border-2 border-dashed opacity-25 animate-portal-pulse"
                  style={{ borderColor: activeGadget.accentColor }}
                />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#0072B5]">
                      <span>四次元ポケット起動中</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono-num">{activeGadget.furigana}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectGadget(activeGadget)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-[#CBE4F9] text-xs font-bold text-[#0072B5] hover:bg-[#0096E6] hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>もう一度効果音を鳴らす</span>
                    </button>
                  </div>

                  {/* Iconic Gadget Callout */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6 pb-6 border-b border-[#0096E6]/15">
                    <motion.div
                      initial={{ rotate: -12, scale: 0.8 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                      className="w-20 h-20 rounded-2xl bg-white border border-[#CBE4F9] flex items-center justify-center shrink-0 shadow-sm"
                    >
                      {renderGadgetIcon(activeGadget.id, 'w-14 h-14')}
                    </motion.div>
                    <div>
                      <p
                        className="text-sm font-bold mb-1"
                        style={{ color: activeGadget.accentColor }}
                      >
                        {activeGadget.chant}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0B2239]">
                        {activeGadget.name}
                      </h3>
                      <p className="text-xs text-[#4A6B8A] mt-1">
                        {activeGadget.destinationOrState}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-[#16324F] leading-relaxed mb-4 font-medium">
                    {activeGadget.summary}
                  </p>
                  <p className="text-sm text-[#36536E] leading-relaxed mb-6">
                    {activeGadget.ranStory}
                  </p>
                </div>

                {/* Interactive Result Bar */}
                <div className="pt-4 border-t border-[#0096E6]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#0072B5] font-medium">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 shrink-0 text-[#0096E6]" />
                    <span>{activeGadget.effectBadge}</span>
                  </div>
                  <span className="font-mono-num text-[#36536E]">
                    発動回数: {transitionCount}回
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right 5 cols: All-Night Doraemon Marathon & Dorayaki Treat Station */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#CBE4F9] bg-white p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between gap-2 text-xs text-[#0072B5] font-medium mb-3">
                <div className="flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-[#0096E6]" />
                  <span>らんちゃんの深夜アニメ特等席</span>
                </div>
                <span className="font-mono-num">{MIDNIGHT_EPISODES[episodeIndex].time}</span>
              </div>

              <h3 className="text-xl font-bold text-[#0B2239] mb-2">
                夜通しドラえもんシアター ＆ どら焼きタイム
              </h3>
              <p className="text-xs text-[#4A6B8A] leading-relaxed mb-5">
                夜が明けるまでドラえもんを観るのが大好きならんちゃんへ。深夜のエピソードを切り替えたり、焼きたてのどら焼きをシェアできます。
              </p>

              {/* Episode Screen Box */}
              <div className="rounded-xl bg-[#0B2239] text-white p-5 mb-5 relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] text-[#7CC8F8] mb-2 font-mono-num">
                  <span>CH-2112 · ALL NIGHT DORAEMON</span>
                  <span>EPISODE 0{episodeIndex + 1} / 04</span>
                </div>
                <h4 className="text-base font-bold text-[#FFD700] mb-2">
                  {MIDNIGHT_EPISODES[episodeIndex].title}
                </h4>
                <p className="text-xs text-[#E2F1FF] leading-relaxed mb-4">
                  {MIDNIGHT_EPISODES[episodeIndex].desc}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  <button
                    type="button"
                    onClick={() => {
                      playTimeMachineSound();
                      setEpisodeIndex((prev) => (prev + 1) % MIDNIGHT_EPISODES.length);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0096E6] hover:bg-[#0072B5] text-xs font-bold text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Tv className="w-3.5 h-3.5" />
                    <span>次の深夜エピソードへ切替</span>
                  </button>
                  <span className="text-[11px] text-[#9BCFF5] font-mono-num">
                    19th Night Special
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Dorayaki Counter */}
            <div className="pt-4 border-t border-[#E2EFFA]">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <DorayakiSvg className="w-10 h-10 shrink-0" />
                  <div>
                    <div className="text-xs text-[#4A6B8A]">お祝いどら焼きストック</div>
                    <div className="text-lg font-bold text-[#0B2239] font-mono-num">
                      {dorayakiCount} 個 <span className="text-xs font-normal text-[#0072B5]">（甘い幸福チャージ）</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleEatDorayaki}
                    className="px-3.5 py-2 rounded-xl bg-[#FFD700] hover:bg-[#F4B400] text-[#0B2239] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    どら焼きを贈る＋1
                  </button>
                  {dorayakiCount > 19 && (
                    <button
                      type="button"
                      onClick={() => setDorayakiCount(19)}
                      title="19個にリセット"
                      className="p-2 rounded-xl border border-[#CBE4F9] text-[#4A6B8A] hover:text-[#0B2239] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-xs text-[#0072B5] bg-[#F4FAFF] rounded-lg px-3 py-2">
                {dorayakiToast}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
