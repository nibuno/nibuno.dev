export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  facts: ProjectFact[];
  links: ProjectLink[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "emoemo",
    title: "emoemo — かんたんemojiメーカー",
    kind: "Webアプリケーション",
    summary:
      "SlackやDiscordで使うカスタム絵文字を、入力した文字から作れるWebアプリです。複数のフォントと色を比較し、128×128pxのPNGとしてダウンロードできます。",
    facts: [
      { label: "技術", value: "React / TypeScript / Vite / Tailwind CSS" },
      { label: "描画", value: "Canvas API" },
      { label: "AI", value: "Cloudflare Workers / Workers AI" },
    ],
    links: [
      { label: "使ってみる", href: "https://nibuno.github.io/emoemo/" },
      { label: "GitHub", href: "https://github.com/nibuno/emoemo" },
    ],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "テキストを入力し、フォントと文字色を選ぶだけで、SlackやDiscord向けのカスタム絵文字を作れます。プレビューを並べて比較しながら選び、完成した画像をそのままダウンロードできます。",
          "画像の生成はブラウザ内で完結します。「おまかせ」を使ったときだけ、入力したテキストを外部エンドポイントへ送り、合いそうなフォントと色の提案を受け取ります。",
        ],
      },
      {
        heading: "できること",
        items: [
          "入力したテキストから128×128pxのPNGを生成する",
          "複数のフォントと色を一覧で比較する",
          "選んだ組み合わせを画像としてダウンロードする",
          "「おまかせ」でテキストに合うフォントと色の提案を受ける",
        ],
      },
      {
        heading: "技術",
        paragraphs: [
          "画面はReact、TypeScript、Vite、Tailwind CSSで構成し、画像はCanvas APIで描画しています。「おまかせ」のバックエンドはCloudflare WorkersとWorkers AIで動かしています。TypeScriptの学習も兼ねて開発している個人プロジェクトです。",
        ],
      },
    ],
  },
  {
    slug: "voice-input-tool",
    title: "Voice Input Tool",
    kind: "macOS向けツール",
    summary:
      "ホットキーを押している間だけ録音し、文字起こしした結果をクリップボードへコピーして自動ペーストするツールです。メニューバーアプリとCLIを用意しています。",
    facts: [
      { label: "技術", value: "Python / OpenAI Whisper API" },
      { label: "環境", value: "macOS / Python 3.13以上" },
      { label: "入力", value: "Hotkey / Microphone" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/nibuno/voice-input-tool" },
    ],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "ホットキーを押している間だけ音声を録音し、OpenAI Whisper APIでテキストへ変換します。変換結果はクリップボードへコピーされ、いま開いている入力欄へ自動でペーストされます。",
          "普段はメニューバーアプリとして起動しておき、必要なときだけ呼び出せます。指定した秒数を録音するCLIとしても利用できます。",
        ],
      },
      {
        heading: "できること",
        items: [
          "設定したホットキーを押している間だけ録音する",
          "Whisper APIで音声をテキストへ変換する",
          "変換結果をクリップボードへコピーして自動ペーストする",
          "入力デバイス、ホットキー、録音上限をメニューから変更する",
          "CLIから録音時間や自動ペーストの有無を指定する",
        ],
      },
      {
        heading: "動作環境",
        paragraphs: [
          "Python 3.13以上のmacOSで動作します。録音と自動ペーストのため、macOSのマイク、アクセシビリティ、入力監視の権限が必要です。利用時にはOpenAI APIキーを設定します。",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
