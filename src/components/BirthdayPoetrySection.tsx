import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Music, BookOpen, AlignLeft, AlignRight, Sparkles } from 'lucide-react';
import { playBirthdayMusicBoxChime, playBellChime } from '../utils/soundEffects';
import { GoldenBellSvg } from './GadgetIcons';

interface PoemStanza {
  id: number;
  subtitle: string;
  lines: string[];
}

const POEM_STANZAS: PoemStanza[] = [
  {
    id: 1,
    subtitle: '第一節 · 真夜中の青い光',
    lines: [
      '時計の針が真夜中をまわり、街が静かな眠りにつくころ、',
      'らんの部屋には、いつも優しい空色の光が灯っていたね。',
      '夜通し見つめた画面の向こう、丸い背中と赤い首輪、',
      '「だいじょうぶだよ」と笑う青い親友が、',
      '十八歳の小さな不安を、いつも笑顔に変えてくれた。',
    ],
  },
  {
    id: 2,
    subtitle: '第二節 · 十八歳から十九歳への扉',
    lines: [
      '少女のあどけなさと、大人のまなざしが交差する十九歳。',
      '十代最後のページをめくるその指先に、',
      'タイムふろしきの魔法なんていらないほど、',
      'らんが積み重ねてきた毎日は、もう十分に輝いている。',
      '金の鈴がチリンと鳴って、新しい朝の風を知らせているよ。',
    ],
  },
  {
    id: 3,
    subtitle: '第三節 · 地球儀が回る夢のステージへ',
    lines: [
      'いつかきっと、あの大きな地球儀が回る大阪のステージで、',
      '世界中の人に魔法と笑顔を届けるユニバーサル・スタジオのクルーへ。',
      'どこでもドアの向こう側は、遠い空想なんかじゃない、',
      'らんが自分の足で歩いていく、すぐそこにある未来。',
      '十九歳の空へ、タケコプターよりも高く——お誕生日おめでとう、蘭。',
    ],
  },
];

export default function BirthdayPoetrySection() {
  const [isVertical, setIsVertical] = useState<boolean>(false);
  const [highlightedStanza, setHighlightedStanza] = useState<number>(1);
  const [musicPlayingNotice, setMusicPlayingNotice] = useState<boolean>(false);

  const handlePlayMusicBox = () => {
    playBirthdayMusicBoxChime();
    setMusicPlayingNotice(true);
    setTimeout(() => setMusicPlayingNotice(false), 3200);
  };

  return (
    <section id="poetry" className="py-20 md:py-24 px-6 bg-white border-b border-[#D5E9FA]">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Metadata & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#0072B5] mb-3">
              <span>02. 十九歳のバースデー・ポエム</span>
              <span aria-hidden="true">·</span>
              <span>蘭（RAN）へ捧げる詩</span>
              <span aria-hidden="true">·</span>
              <span>18歳 ➔ 19歳 特別編</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#0B2239] text-balance">
              『十九歳の夜空と、青いポケットの詩』
            </h2>
          </div>

          {/* Interactive Reading Controls: Music Box Chime & Vertical/Horizontal Layout Switch */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePlayMusicBox}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EBF6FF] hover:bg-[#0096E6] text-[#0072B5] hover:text-white text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Music className="w-3.5 h-3.5" />
              <span>{musicPlayingNotice ? 'オルゴール演奏中♪' : 'オルゴールの音色を聴く'}</span>
            </button>

            <div className="flex items-center gap-1 p-1 bg-[#F4FAFF] border border-[#CBE4F9] rounded-xl">
              <button
                type="button"
                onClick={() => {
                  playBellChime();
                  setIsVertical(false);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  !isVertical
                    ? 'bg-[#0096E6] text-white shadow-xs'
                    : 'text-[#36536E] hover:text-[#0B2239]'
                }`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
                <span>横書きで読む</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  playBellChime();
                  setIsVertical(true);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isVertical
                    ? 'bg-[#0096E6] text-white shadow-xs'
                    : 'text-[#36536E] hover:text-[#0B2239]'
                }`}
              >
                <AlignRight className="w-3.5 h-3.5" />
                <span>縦書き文庫風</span>
              </button>
            </div>
          </div>
        </div>

        {/* Poetry Canvas */}
        <div className="rounded-2xl border border-[#CBE4F9] bg-gradient-to-b from-[#F8FCFF] to-[#EBF6FF]/60 p-8 md:p-12 relative overflow-hidden">
          {/* Stanza Selector Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#CBE4F9]">
            <div className="flex items-center gap-3">
              <GoldenBellSvg className="w-8 h-8 shrink-0" />
              <div>
                <div className="text-xs font-medium text-[#0072B5]">
                  深夜のドラえもんから、未来のUSJクルーへ
                </div>
                <div className="text-sm font-bold text-[#0B2239]">
                  各節をクリックすると、詩の情景がハイライトされます
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {POEM_STANZAS.map((stanza) => (
                <button
                  key={stanza.id}
                  type="button"
                  onClick={() => {
                    playBellChime();
                    setHighlightedStanza(stanza.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    highlightedStanza === stanza.id
                      ? 'bg-[#0B2239] text-[#FFD700]'
                      : 'bg-white border border-[#CBE4F9] text-[#36536E] hover:text-[#0B2239]'
                  }`}
                >
                  第{stanza.id}節
                </button>
              ))}
            </div>
          </div>

          {/* Poem Content: Horizontal or Traditional Japanese Vertical Mode */}
          {!isVertical ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {POEM_STANZAS.map((stanza) => {
                const isFocused = highlightedStanza === stanza.id;
                return (
                  <motion.div
                    key={stanza.id}
                    onClick={() => {
                      playBellChime();
                      setHighlightedStanza(stanza.id);
                    }}
                    whileHover={{ y: -3 }}
                    className={`rounded-2xl p-6 md:p-7 transition-all duration-200 cursor-pointer border ${
                      isFocused
                        ? 'bg-white border-[#0096E6] shadow-md'
                        : 'bg-white/70 border-[#D5E9FA] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-[#0072B5] font-medium mb-4">
                      <span>{stanza.subtitle}</span>
                      {isFocused && <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />}
                    </div>
                    <div className="space-y-3.5 font-serif-jp text-[15px] md:text-base text-[#0B2239] leading-loose">
                      {stanza.lines.map((line, idx) => (
                        <p key={idx} className="tracking-wide">
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="overflow-x-auto py-4 flex justify-center">
              <div className="writing-vertical-jp font-serif-jp min-h-[380px] max-h-[460px] gap-12 px-6 py-6 bg-white rounded-2xl border border-[#CBE4F9] shadow-xs text-[#0B2239]">
                <div className="ml-6 pl-4 border-l border-[#D5E9FA]">
                  <h3 className="text-xl font-bold tracking-widest text-[#0072B5]">
                    十九歳の夜空と、青いポケットの詩
                  </h3>
                  <p className="text-xs text-[#4A6B8A] mt-4 tracking-widest">
                    親愛なる 蘭（らん）へ
                  </p>
                </div>
                {POEM_STANZAS.map((stanza) => (
                  <div key={stanza.id} className="space-x-3 leading-loose">
                    <p className="text-xs font-bold text-[#0096E6] mb-2 tracking-widest">
                      {stanza.subtitle}
                    </p>
                    {stanza.lines.map((line, i) => (
                      <p key={i} className="text-base tracking-widest text-[#0B2239]">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Editorial Footer Caption inside Poetry Box */}
          <div className="mt-8 pt-6 border-t border-[#CBE4F9] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#36536E]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0096E6]" />
              <span>
                夜通し観たドラえもんの優しさと、USJで輝く未来のらんちゃんをイメージして綴ったオリジナル詩篇
              </span>
            </div>
            <span className="font-serif-jp font-bold text-[#0B2239]">
              — 19歳の誕生日に心をこめて
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
