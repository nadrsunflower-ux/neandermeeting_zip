"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

const IMG = "/meetings/2026-09-15";
const GOLD = "#F2C14E";

type OpenImage = (src: string) => void;

function Frame({
  section,
  index,
  title,
  children,
}: {
  section: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col px-[120px] pb-[90px] pt-[80px]">
      <p className="text-[24px] font-medium tracking-[0.08em] text-white/45">{section}</p>
      <div className="mt-[14px] flex items-baseline gap-[28px] border-b border-white/10 pb-[32px]">
        <span className="text-[52px] font-bold tabular-nums" style={{ color: GOLD }}>
          {index}
        </span>
        <h2 className="text-[60px] font-bold tracking-[-0.02em]">{title}</h2>
      </div>
      <div className="mt-[48px] min-h-0 flex-1">{children}</div>
    </div>
  );
}

function Shot({ src, alt, className, open }: { src: string; alt: string; className?: string; open: OpenImage }) {
  return (
    <button
      type="button"
      onClick={() => open(src)}
      className={`overflow-hidden rounded-[20px] border border-white/10 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.015] ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </button>
  );
}

function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[24px] border border-white/10 bg-[#131B30] p-[44px] ${className ?? ""}`}>
      {children}
    </div>
  );
}

const body = "text-[32px] leading-[1.6] text-white/85";

function slides(open: OpenImage): { title: string; node: ReactNode }[] {
  return [
    {
      title: "표지",
      node: (
        <div className="flex h-full flex-col justify-between px-[120px] py-[110px]">
          <p className="text-[28px] tracking-[0.25em]" style={{ color: GOLD }}>
            EXECUTIVE MEETING
          </p>
          <div>
            <h1 className="text-[120px] font-bold leading-[1.1] tracking-[-0.03em]">2026 임원진 회의</h1>
            <p className="mt-[24px] text-[64px] font-semibold text-white/70 tabular-nums">9/15(화) 회의록</p>
          </div>
          <div className="grid grid-cols-3 gap-[32px] border-t border-white/10 pt-[48px]">
            {["진행된 업무", "진행할 업무 & 진행되어야 하는데 미이행한 업무", "확인 및 요청사항"].map((t, i) => (
              <div key={t} className="flex gap-[20px]">
                <span className="text-[40px] font-bold tabular-nums" style={{ color: GOLD }}>
                  {i + 1}.
                </span>
                <span className="text-[32px] font-medium leading-[1.4] text-white/85">{t}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "1-1) B2B 프로젝트 정리",
      node: (
        <Frame section="1. 진행된 업무" index="1-1)" title="B2B 프로젝트 정리">
          <div className="grid h-full grid-cols-[1fr_600px] gap-[64px]">
            <div className="flex flex-col gap-[40px]">
              <p className={body}>- 노션 2026 B2B PROJECT 에 각각의 프로젝트들 자료, 견적 등 수집되는대로 정리</p>
              <Card className="border-[#F2C14E]/40 bg-[#F2C14E]/[0.07]">
                <p className="text-[30px] font-bold" style={{ color: GOLD }}>
                  &lt;주의사항
                </p>
                <ol className="mt-[20px] flex flex-col gap-[20px] text-[28px] leading-[1.6] text-white/85">
                  <li>
                    1) 변경사항이나 추가사항이 있다면 해당 노션 페이지에 정리 부탁드립니다. 차후 다음 프로젝트를 하거나
                    아카이빙을 할 때 잘못된 정보가 기재되거나 제대로 된 정보를 수집하지 못 할 수도 있습니다
                  </li>
                  <li>2) 추가로 수주된 B2B 프로젝트가 있다면 꼭 추가해주세요 &gt;</li>
                </ol>
              </Card>
            </div>
            <Shot open={open} src={`${IMG}/1-1.png`} alt="노션 2026 B2B PROJECT 페이지" className="h-full" />
          </div>
        </Frame>
      ),
    },
    {
      title: "1-2) B2B 프로젝트 콘텐츠 아카이빙",
      node: (
        <Frame section="1. 진행된 업무" index="1-2)" title="B2B 프로젝트 콘텐츠 아카이빙">
          <div className="grid h-full grid-cols-[1fr_auto_auto] gap-[48px]">
            <div className="flex flex-col justify-center gap-[36px]">
              <p className={body}>
                제천국제음악영화제, 2026 AI FESTA 에 해당하는 레퍼런스 및 행사 소개를 카드뉴스 형태로 콘텐츠 제작하여
                악센트 아이디와 네안데르랩 계정에 각각 게시
              </p>
              <div className="flex gap-[16px] text-[24px] text-white/55">
                <span className="rounded-full border border-white/15 px-[20px] py-[8px]">@acscent_id</span>
                <span className="rounded-full border border-white/15 px-[20px] py-[8px]">@neander_lab</span>
              </div>
            </div>
            <Shot open={open} src={`${IMG}/1-2.1.jpg`} alt="악센트 아이디 인스타그램" className="h-full w-[420px]" />
            <Shot open={open} src={`${IMG}/1-2.2.jpg`} alt="네안데르랩 인스타그램" className="h-full w-[450px]" />
          </div>
        </Frame>
      ),
    },
    {
      title: "1-3) 유료 인플루언서 협업 진행 — 배경",
      node: (
        <Frame section="1. 진행된 업무" index="1-3)" title="유료 인플루언서 협업 진행">
          <div className="flex h-full flex-col justify-center gap-[48px]">
            <p className="text-[30px] font-bold" style={{ color: GOLD }}>
              배경
            </p>
            <p className="max-w-[1500px] text-[44px] font-medium leading-[1.6] tracking-[-0.01em]">
              무료 인플루언서들만 부르다 보니 가성비가 좋지만, 대박 하나를 노리기 위해 하나하나 인플루언서 리스트업을 하고
              터지기를 기대하는데에서 효율이 낮다고 느껴,{" "}
              <span style={{ color: GOLD }}>9월 추석(9.24~9.27)</span>을 앞두고 더 많은 바이럴을 하기 위해 다음과 같이
              인플루언서와의 협업을 체결하였습니다.
            </p>
          </div>
        </Frame>
      ),
    },
    {
      title: "1-3) 유료 인플루언서 협업 진행 — 협업 인플루언서",
      node: (
        <Frame section="1. 진행된 업무" index="1-3)" title="유료 인플루언서 협업 진행">
          <div className="grid h-full grid-cols-2 gap-[48px]">
            <Card className="flex flex-col gap-[28px]">
              <div>
                <p className="text-[26px] text-white/50">[1]</p>
                <p className="mt-[6px] text-[48px] font-bold">
                  중은이 <span className="text-[32px] font-medium text-white/60">( @ju.eu.ni_170 / 1.7만 )</span>
                </p>
                <p className="mt-[8px] text-[30px]" style={{ color: GOLD }}>
                  = 오타쿠 &amp; 패션 관련 인플루언서
                </p>
              </div>
              <ul className="flex flex-col gap-[10px] text-[30px] leading-[1.5] text-white/85 tabular-nums">
                <li>- 9월 21일 (월) 오후 2시 악센트 아이디 방문 촬영</li>
                <li>- 9월 27일 (일) 오후 5시 최종본 업로드</li>
              </ul>
              <p className="rounded-[14px] bg-white/[0.06] px-[24px] py-[16px] text-[30px]">
                * 후킹 문구 : <b>홍대에 새로운 덕질 잼컨 발견</b>
              </p>
              <div className="text-[28px] leading-[1.5] text-white/75">
                <p className="font-bold text-white/90">특징</p>
                <p>- 해당 최종본은 META 광고로도 집행 가능</p>
              </div>
            </Card>
            <Card className="flex flex-col gap-[28px]">
              <div>
                <p className="text-[26px] text-white/50">[2]</p>
                <p className="mt-[6px] text-[48px] font-bold">
                  제로주 <span className="text-[32px] font-medium text-white/60">( @zero__zoo / 3.5만)</span>
                </p>
                <p className="mt-[8px] text-[30px]" style={{ color: GOLD }}>
                  = 오타쿠 &amp; 코스프레 인플루언서
                </p>
              </div>
              <ul className="flex flex-col gap-[10px] text-[30px] leading-[1.5] text-white/85 tabular-nums">
                <li>- 9월 17일 (목) 오후 5시 악센트 아이디 방문 촬영</li>
                <li>- 9월 25일 (금) 영상 업로드</li>
              </ul>
              <div className="text-[28px] leading-[1.5] text-white/75">
                <p className="font-bold text-white/90">특징</p>
                <p>- 틱톡, 유튜브에도 업로드</p>
                <p>- &apos;테루하시 코코미&apos; 코스프레하고 방문 예정</p>
              </div>
            </Card>
          </div>
        </Frame>
      ),
    },
    {
      title: "1-4) 악센트 아이디 9월 할인 이벤트",
      node: (
        <Frame section="1. 진행된 업무" index="1-4)" title="악센트 아이디 9월 할인 이벤트 진행 및 상품 세팅">
          <div className="grid h-full grid-cols-[1fr_auto_auto] gap-[40px]">
            <div className="flex flex-col justify-center gap-[32px]">
              <p className="text-[28px] text-white/60">( + 할인 관련 톡톡도 전송했습니다 )</p>
              <div className="flex flex-col gap-[20px] tabular-nums">
                <div className="flex items-center justify-between rounded-[18px] bg-[#F2C14E]/15 px-[32px] py-[26px]">
                  <span className="text-[34px] font-medium">- 9월 16일 ~ 23일:</span>
                  <span className="text-[48px] font-bold" style={{ color: GOLD }}>
                    20% 할인
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-[18px] bg-[#F2C14E] px-[32px] py-[26px] text-[#0B1020]">
                  <span className="text-[34px] font-medium">- 9월 26일 ~ 27일 :</span>
                  <span className="text-[48px] font-bold">30% 할인</span>
                </div>
              </div>
            </div>
            <Shot open={open} src={`${IMG}/1-4.jpg`} alt="악센트 아이디 풍성한 한가위 이벤트" className="h-[560px] w-[560px] self-center" />
            <Shot open={open} src={`${IMG}/1-4.1.png`} alt="한가위 할인 상품 세팅" className="h-[560px] w-[482px] self-center bg-white" />
          </div>
        </Frame>
      ),
    },
    {
      title: "1-5) 포도알 이벤트 기획안",
      node: (
        <Frame section="1. 진행된 업무" index="1-5)" title="포도알 이벤트 기획안">
          <div className="grid h-full grid-cols-2 items-center gap-[48px]">
            <Card>
              <p className="text-[30px] text-white/55">10월 이벤트:</p>
              <p className="mt-[16px] text-[80px] font-bold tracking-[-0.02em]">소디엑 웨인</p>
            </Card>
            <Card>
              <p className="text-[30px] text-white/55">이벤트 일정:</p>
              <p className="mt-[16px] text-[80px] font-bold tabular-nums" style={{ color: GOLD }}>
                10/23~10/25
              </p>
            </Card>
          </div>
        </Frame>
      ),
    },
    {
      title: "2-1, 2-2 진행할 업무",
      node: (
        <Frame section="2. 진행할 업무 & 진행되어야 하는데 미이행한 업무" index="2" title="진행할 업무">
          <div className="grid h-full grid-cols-2 gap-[48px]">
            <Card className="flex flex-col gap-[28px]">
              <span className="w-fit rounded-full bg-[#F2C14E] px-[20px] py-[6px] text-[24px] font-bold text-[#0B1020]">
                금주 집중
              </span>
              <p className="text-[46px] font-bold">2-1. AI 연구소 유튜브 촬영 기획</p>
              <p className={body}>
                금주 집중해서 처리할 업무입니다.
                <br />
                영상의 방향과 편집 업무 등을 설정하여 유튜브를 진행해볼 예정입니다.
              </p>
            </Card>
            <Card className="flex flex-col gap-[28px]">
              <span className="w-fit rounded-full border border-[#F2C14E]/60 px-[20px] py-[6px] text-[24px] font-bold" style={{ color: GOLD }}>
                금주 내
              </span>
              <p className="text-[46px] font-bold">2-2. 2026 AI FESTA AI 체험 3종 소개 카드뉴스</p>
              <p className={body}>금주 내로 제작하여 업로드할 예정입니다.</p>
            </Card>
          </div>
        </Frame>
      ),
    },
    {
      title: "2-3, 2-4 미이행 업무",
      node: (
        <Frame section="2. 진행할 업무 & 진행되어야 하는데 미이행한 업무" index="2" title="진행되어야 하는데 미이행한 업무">
          <div className="grid h-full grid-cols-2 gap-[48px]">
            <Card className="flex flex-col gap-[28px]">
              <p className="text-[46px] font-bold">2-3. 악센트 아이디 릴스</p>
              <p className={body}>
                B2B 행사 카드뉴스를 아카이빙하는데 집중하다 보니
                <br />
                악센트 아이디 릴스 제작에 소홀했습니다.
                <br />
                반성하며, 빠른 시일 내에 제작해보도록 하겠습니다.
              </p>
            </Card>
            <Card className="flex flex-col gap-[28px]">
              <p className="text-[46px] font-bold">2-4. 방향성 고민</p>
              <p className={body}>
                지난 회의 때 매주 우리의 방향성에 대한 고민을 해서 회의 시간에 말하기로 하였는데 금주에는 그러한 노력이
                부족했습니다. 죄송합니다. 반성하며, 금주에는 할 수 있도록 노력하겠습니다.
              </p>
            </Card>
          </div>
        </Frame>
      ),
    },
    {
      title: "3-1. 외부 일정",
      node: (
        <Frame section="3. 확인 및 요청사항" index="3-1." title="외부 일정">
          <div className="grid h-full grid-cols-[1fr_620px] gap-[64px]">
            <div className="flex flex-col gap-[20px] tabular-nums">
              {[
                ["9/16(수)", "김기홍 교수님 미팅"],
                ["9/19(토)", "대학원 (12:00~21:00)"],
                ["9/21(월)", "대학원 (18:30~21:30)"],
              ].map(([d, t]) => (
                <div key={d} className="flex items-center gap-[40px] rounded-[20px] border border-white/10 bg-[#131B30] px-[40px] py-[34px]">
                  <span className="w-[200px] text-[44px] font-bold" style={{ color: GOLD }}>
                    {d}
                  </span>
                  <span className="text-[40px] font-medium">{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-[24px] border-l border-white/10 pl-[56px]">
              <p className={body}>다음주 저의 외부 일정은 다음과 같습니다.</p>
              <p className={body}>추가 사항이 있을 경우 구글캘린더에 업데이트해두겠습니다.</p>
            </div>
          </div>
        </Frame>
      ),
    },
    {
      title: "3-2. 딥테크 밸류업",
      node: (
        <Frame section="3. 확인 및 요청사항" index="3-2." title="딥테크 밸류업">
          <div className="flex h-full flex-col justify-center">
            <p className="max-w-[1500px] text-[46px] font-medium leading-[1.65]">
              유재영님께서 회피하고 계시다고 하는데,
              <br />
              현재 진행 상황과 연락망 그리고 해야 할 과제 등을 정리해서
              <br />
              전달해주시면 제가 어떻게든 해보겠습니다.{" "}
              <span className="font-bold" style={{ color: GOLD }}>
                저에게 주시지요.
              </span>
            </p>
          </div>
        </Frame>
      ),
    },
    {
      title: "3-3. 추석 연휴 및 개천절 근무 일정",
      node: (
        <Frame section="3. 확인 및 요청사항" index="3-3." title="추석 연휴 및 개천절 근무 일정">
          <div className="grid h-full grid-cols-2 gap-[48px]">
            <Card className="flex flex-col justify-center gap-[24px] border-[#F2C14E]/40">
              <span className="w-fit rounded-full bg-[#F2C14E] px-[20px] py-[6px] text-[24px] font-bold text-[#0B1020]">
                확인 요청
              </span>
              <p className="text-[44px] font-bold leading-[1.5] tabular-nums">
                제가 9/24(목)~9/25(금)에 본가를 다녀와도 괜찮을까요?
              </p>
            </Card>
            <Card className="flex flex-col justify-center gap-[24px]">
              <p className={body}>
                하지만 운이 좋게도 추석과 개천절이 끼어서
                <br />
                <span className="font-bold text-white tabular-nums">9/26(토), 10/3(토)</span>에는 대학원에 가지 않습니다.
              </p>
            </Card>
          </div>
        </Frame>
      ),
    },
  ];
}

export default function Meeting0915() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const deck = slides(setLightbox);
  const total = deck.length;
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [scale, setScale] = useState(1);

  const go = useCallback(
    (next: number) => {
      setState(([cur]) => {
        const clamped = Math.max(0, Math.min(total - 1, next));
        return clamped === cur ? [cur, 0] : [clamped, clamped > cur ? 1 : -1];
      });
    },
    [total],
  );

  useEffect(() => {
    const s = Number(new URLSearchParams(window.location.search).get("s"));
    if (s >= 1 && s <= total) setState([s - 1, 0]);
  }, [total]);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("s", String(index + 1));
    window.history.replaceState(null, "", url);
  }, [index]);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / 1920, (window.innerHeight - 64) / 1080));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox) {
        if (e.key === "Escape") setLightbox(null);
        return;
      }
      if (["ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        setState(([cur]) => (cur < total - 1 ? [cur + 1, 1] : [cur, 0]));
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        setState(([cur]) => (cur > 0 ? [cur - 1, -1] : [cur, 0]));
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(total - 1);
      } else if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, lightbox, total]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#070B16]">
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <div
          data-deck-root
          data-slide-count={total}
          data-current={index + 1}
          className="relative shrink-0 overflow-hidden bg-[#0B1020]"
          style={{ width: 1920 * scale, height: 1080 * scale }}
        >
          <div className="absolute left-0 top-0 h-[1080px] w-[1920px] origin-top-left" style={{ transform: `scale(${scale})` }}>
            <div
              className="pointer-events-none absolute -right-[300px] -top-[300px] h-[900px] w-[900px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(242,193,78,0.10) 0%, rgba(242,193,78,0) 65%)" }}
            />
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.div
                key={index}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 80 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -80 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {deck[index].node}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <nav className="flex h-16 shrink-0 items-center gap-4 border-t border-white/10 px-6 text-sm">
        <Link href="/" className="rounded-md px-3 py-1.5 text-white/70 hover:bg-white/10 hover:text-white">
          ← 회의록 목록
        </Link>
        <span className="hidden truncate text-white/50 sm:block">9/15(화) · {deck[index].title}</span>
        <div className="mx-4 h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full"
            style={{ background: GOLD }}
            animate={{ width: `${((index + 1) / total) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="tabular-nums text-white/70">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="이전 슬라이드"
          className="rounded-md px-3 py-1.5 hover:bg-white/10 disabled:opacity-30"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === total - 1}
          aria-label="다음 슬라이드"
          className="rounded-md px-3 py-1.5 hover:bg-white/10 disabled:opacity-30"
        >
          →
        </button>
      </nav>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={lightbox}
              alt=""
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              className="max-h-full max-w-full rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
