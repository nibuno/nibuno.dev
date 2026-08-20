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
      "SlackやDiscordで使うカスタム絵文字を、入力した文字から作れるWebアプリケーションです。",
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
          "テキストを入力し、フォントと文字色を選ぶだけで、SlackやDiscord向けのカスタム絵文字を作れます。プレビューを並べて比較しながら選び、完成した画像をそのままダウンロードできます。",
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
  {
    slug: "voice-input-tool",
    stack: "Python / OpenAI Whisper API / macOS",
    title: "Voice Input Tool",
    period: "2026",
    featured: true,
    summary:
      "文字起こしツールです。メニューバーアプリとCLIを用意しています。",
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
        heading: "動作環境",
        paragraphs: [
          "Python 3.13以上のmacOSで動作します。録音と自動ペーストのため、macOSのマイク、アクセシビリティ、入力監視の権限が必要です。利用時にはOpenAI APIキーを設定します。",
        ],
      },
    ],
  },
  {
    slug: "shisan",
    stack: "Django / Django Ninja / React / TypeScript / PostgreSQL / Docker",
    title: "shisan — 家庭の資産記録",
    period: "2026",
    featured: true,
    summary:
      "家庭の口座や投資資産を月ごとに記録し、名義人・カテゴリ別の内訳と推移を確認するための個人向けWebアプリです。",
    links: [],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "家庭で持っている口座や投資資産を登録し、月ごとの残高を記録するアプリです。最新月の総資産と前月比に加え、カテゴリ別・名義人別の内訳を確認できます。",
          "日々の支出を入力する家計簿ではなく、月に一度の残高記録を続けることで、家庭の資産全体を振り返れるようにしています。",
        ],
      },
      {
        heading: "記録と振り返り",
        paragraphs: [
          "資産ごとの残高は月次スナップショットとして保存します。記録した値は6か月・12か月・24か月の推移で確認でき、名義人、カテゴリ、資産ごとに絞り込めます。直近の平均増減を延長した簡単な予測も表示できます。",
          "個人利用を前提としているため、ソースコードと実際のデータは公開していません。",
        ],
      },
      {
        heading: "技術",
        paragraphs: [
          "バックエンドはDjangoとDjango Ninja、フロントエンドはReactとTypeScriptで構成しています。PostgreSQLへ記録を保存し、セッション認証とCSRF対策を含むAPIをDocker Composeで動かせるようにしています。",
        ],
      },
    ],
  },
  {
    slug: "serpentine",
    stack: "Python / AST / C",
    title: "Serpentine — 小さなPython AOTコンパイラ",
    period: "2026",
    summary:
      "型付きPythonの一部を解析・型検査し、Cコードを生成してネイティブ実行ファイルへ変換する実験的なAOTコンパイラです。",
    links: [
      { label: "GitHub", href: "https://github.com/nibuno/serpentine" },
    ],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "PythonのソースコードをASTへ変換し、対応している構文の型を検査したあと、Cコードを生成してccで実行ファイルへ変換します。整数と真偽値、条件分岐、ループ、関数、再帰などに対応しています。",
          "ベンチマークでは同じ処理をCPython、PyPy、生成した実行ファイル、手書きのCで動かし、出力を照合しながら実行時間を比較できます。",
        ],
      },
      {
        heading: "割り切ったこと",
        paragraphs: [
          "Python全体との互換性は目指さず、文字列、コレクション、クラス、例外などは対象外にしています。生成した値にはCのlongを使うため、整数の範囲や除算の挙動もPythonではなくCに従います。",
          "扱う範囲を小さくすることで、構文解析、型検査、コード生成、実行ファイル作成までの流れを一つずつ確かめられるようにしました。",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
