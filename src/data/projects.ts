export type ProjectLink = {
  label: string;
  href: string;
  showOnHome?: boolean;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  status?: string;
  featured?: boolean;
  summary: string;
  screenshot?: ProjectScreenshot;
  stack?: string;
  why?: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "emoemo",
    screenshot: {
      src: "/images/projects/emoemo.png",
      alt: "emoemoの画面。テキストを入力すると、ゴシックや明朝体など6種類のフォントで絵文字のプレビューが並ぶ。",
      width: 1360,
      height: 1149,
    },
    stack: "React / TypeScript / Vite / Tailwind CSS / Canvas API / Cloudflare Workers",
    title: "emoemo — かんたんemojiメーカー",
    period: "2026",
    featured: true,
    summary:
      "SlackやDiscordで使えるカスタム絵文字をテキストから作成するWebアプリケーションです。",
    links: [
      {
        label: "使ってみる",
        href: "https://nibuno.github.io/emoemo/",
        showOnHome: true,
      },
      { label: "GitHub", href: "https://github.com/nibuno/emoemo" },
    ],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "テキストを入力し、フォントと文字色を選ぶだけで、SlackやDiscord向けのカスタム絵文字をつくれます。プレビューを並べて比較しながら選び、完成した画像をそのままダウンロードできます。",
          "画像の生成はブラウザ内で完結します。「おまかせ」を使ったときだけ、入力したテキストを外部エンドポイントへ送り、合いそうなフォントと色の提案を受け取ります。",
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
