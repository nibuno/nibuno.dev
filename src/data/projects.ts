export type ProjectLink = {
  label: string;
  href: string;
  showOnHome?: boolean;
  /** 詳細ページを読み終えたあとに、いちばん押してほしいリンク */
  primary?: boolean;
};

export type ProjectScreenshot = {
  caption?: string;
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
  /** パンくずや行動導線で使う短い呼び名。省略時は title */
  shortTitle?: string;
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
    slug: "shisan",
    title: "Shisan — 家庭の資産を月ごとに記録するWebアプリ",
    shortTitle: "Shisan",
    period: "2026",
    featured: true,
    summary:
      "口座などの資産残高を月ごとに記録し、総資産や前月比、名義人・カテゴリ別の内訳、資産推移を確認できるWebアプリケーションです。",
    screenshot: {
      src: "/images/projects/shisan.png",
      alt: "Shisanのダッシュボード。架空のデータで、総資産560万円、前月比、カテゴリ別・名義人別の内訳を表示しています。",
      width: 1280,
      height: 720,
      caption: "画面は紹介用の架空データです。",
    },
    stack: "Python / Django / Django Ninja / React / TypeScript / PostgreSQL / Recharts",
    links: [],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "名義人・カテゴリごとに資産を登録し、毎月の残高を記録する家庭向けの資産管理アプリです。ダッシュボードで総資産とその内訳を確認し、グラフで月ごとの推移を振り返れます。",
          "月次の入力画面では、複数の資産の残高をまとめて入力できます。画面はReactとTypeScript、APIはDjango Ninjaで実装し、データをPostgreSQLに保存しています。",
        ],
      },
      {
        heading: "残高入力で工夫したこと",
        paragraphs: [
          "過去に記録した残高は参考として表示しますが、今月の入力欄には自動で入れないようにしています。古い金額をそのまま今月の残高として保存してしまうことを避けるためです。今月分をすでに記録している場合は、その値を表示して編集できます。",
        ],
      },
      {
        heading: "世帯ごとのデータ管理",
        paragraphs: [
          "同じ世帯に所属するユーザーが資産情報を共有できるように、世帯とメンバーの関係をデータモデルで管理しています。APIでは所属世帯に絞ってデータを扱い、別世帯の情報が参照・更新・集計されないことを確認するテストも用意しています。",
        ],
      },
    ],
  },
  {
    slug: "emoemo",
    screenshot: {
      src: "/images/projects/emoemo.png",
      alt: "emoemoの画面。「emo emo」と入力してピンク色を選ぶと、ゴシックや明朝体など6種類のフォントでプレビューが並ぶ。おまかせ機能が色とフォントの組み合わせを提案している。",
      width: 1360,
      height: 1097,
    },
    stack: "React / TypeScript / Vite / Tailwind CSS / Canvas API / Cloudflare Workers",
    title: "emoemo — かんたんemojiメーカー",
    shortTitle: "emoemo",
    period: "2026",
    featured: true,
    summary:
      "SlackやDiscordで使えるカスタム絵文字をテキストから作成するWebアプリケーションです。",
    why: [
      "Slackでemojiをつけてリアクションをすることが多く、emojiを作成するWebアプリケーションを自分でつくってみたくなって取り組みました。",
      "最初はDjangoでバックエンドを実装していましたが、デプロイと運用の気軽さを考えてフロントエンド中心の構成に切り替え、Reactベースでつくることにしました。",
    ],
    links: [
      {
        label: "使ってみる",
        href: "https://nibuno.github.io/emoemo/",
        showOnHome: true,
        primary: true,
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

export const featuredProjects = projects.filter((project) => project.featured);

/**
 * 一覧に載る数がトップと同じあいだは、遷移しても増えるものがない。
 * その間は一覧ページへの導線を出さず、パンくずも中間階層を挟まない。
 */
export const hasProjectsIndex = featuredProjects.length < projects.length;

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
