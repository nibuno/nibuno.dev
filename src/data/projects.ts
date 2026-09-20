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
  screenshot?: ProjectScreenshot;
  paragraphs?: (string | (string | { label: string; href: string })[])[];
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
  gallery?: (ProjectScreenshot & { label: string })[];
  stack?: string;
  why?: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "shisan",
    title: "Shisan — ゆるい資産管理アプリ",
    shortTitle: "Shisan",
    period: "2026",
    featured: true,
    summary:
      "月末に銀行口座やNISAの残高を記録して、月ごとの資産を確認するアプリケーション。",
    gallery: [
      { label: "TOP", src: "/images/projects/shisan.png", alt: "総資産633万円と、銀行・NISAや名義人ごとの内訳を表示したTOPページ。", width: 1664, height: 1066 },
      { label: "資産管理", src: "/images/projects/shisan-assets.png", alt: "銀行口座や証券口座を、名義人・カテゴリ・用途とともに管理するページ。", width: 1664, height: 1066 },
      { label: "残高入力", src: "/images/projects/shisan-snapshots.png", alt: "nibuとtatsuyaの口座残高を、2026年8月分としてまとめて入力するページ。", width: 1664, height: 1066 },
      { label: "資産推移", src: "/images/projects/shisan-charts.png", alt: "名義人や期間で絞り込み、月ごとの資産の増減を折れ線グラフで確認するページ。", width: 1664, height: 1066 },
    ],
    stack: "Python / Django / Django Ninja / React / TypeScript",
    why: [
      "住宅購入をきっかけに、家庭の資産状況を把握したくなりました。ただ、日々の支出を家計簿につけるのは手間に感じていたため、月末の残高を記録する方向で開発しました。",
    ],
    links: [
      {
        label: "GitHubで見る",
        href: "https://github.com/nibuno/shisan",
        showOnHome: true,
        primary: true,
      },
    ],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "TOPページには資産の全体像と内訳を表示しています。資産管理、残高入力、資産推移の各ページを設けて、詳細や推移がわかるようにしています。",
        ],
      },
      {
        heading: "実装で取り組んだこと",
        paragraphs: [
          [
            "バックエンドAPIはDjango（Django Ninja）を利用しています。実際の案件で活かせないかと思い、",
            { label: "Django Styleguide", href: "https://github.com/HackSoftware/Django-Styleguide" },
            "に沿った構成を試しています。具体的には、取得系の処理をselectors、登録・更新系の処理をservicesに分けています。この規模で分けるメリットはあまりないですが、分割方法の1つとして参考になりました。",
          ],
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
