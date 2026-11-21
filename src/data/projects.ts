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
  {
    slug: "simple-er",
    title: "SimpleER — ER図エディタ",
    shortTitle: "SimpleER",
    period: "2026",
    featured: true,
    summary:
      "テーブルを置いて、カラムをつないでER図を書くツール。線の配線とテーブルの整頓を自動で行います。",
    screenshot: {
      src: "/images/projects/simple-er.jpg",
      alt: "SimpleERでusers、orders、order_itemsの3つのテーブルを外部キーでつないだER図。",
      width: 1280,
      height: 720,
    },
    stack: "React / TypeScript / Vite",
    links: [
      {
        label: "使ってみる",
        href: "https://nibuno.github.io/simple-er/",
        showOnHome: true,
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/nibuno/simple-er" },
    ],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "ブラウザでテーブルとカラムを編集し、外部キーでつなげられます。カラムから参照先へドラッグして接続するほか、user_idのような名前から外部キーの候補を探すこともできます。",
          "物理名と日本語の論理名を切り替えて表示できます。複合キー、一意制約、インデックス、自己参照にも対応し、テーブル編集画面ではPostgreSQL形式のDDLを確認できます。",
        ],
      },
      {
        heading: "線と配置の調整",
        paragraphs: [
          "接続線はテーブルを避けて自動で引きます。「整頓」では参照関係に沿ってテーブルの配置を揃え、図の内容を考えながら編集できるようにしています。",
        ],
      },
      {
        heading: "保存と持ち出し",
        paragraphs: [
          "図はブラウザ内に保存し、外部へ送信しません。JSONファイルへの保存と読み込みに対応しているので、別の端末へ移すときや、図を複数残したいときに使えます。",
        ],
      },
    ],
  },
  {
    slug: "voice-input-tool",
    title: "Voice Input Tool — Mac用の音声入力ツール",
    shortTitle: "Voice Input Tool",
    period: "2026",
    featured: true,
    summary:
      "キーを押して話すと、文字起こししたテキストを入力中のアプリへ貼り付けるMac用ツール。",
    stack: "Python / Whisper / MLX / PyInstaller",
    links: [
      {
        label: "ダウンロードする",
        href: "https://github.com/nibuno/voice-input-tool/releases",
        showOnHome: true,
        primary: true,
      },
      {
        label: "使い方",
        href: "https://github.com/nibuno/voice-input-tool/blob/main/docs/local-whisper.md",
      },
      { label: "GitHub", href: "https://github.com/nibuno/voice-input-tool" },
    ],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "メニューバーに常駐する音声入力アプリです。入力先にカーソルを置き、左Controlキーを押している間に話すと、キーを離した後に文字起こしして貼り付けます。録音に使うキーや、押すたびに録音を開始・停止する方式も選べます。",
          "Mac内で文字起こしするローカル認識と、OpenAI APIを使う認識に対応しています。ローカル認識は初回にモデルをダウンロードすると、その後はオフラインで利用できます。",
        ],
      },
      {
        heading: "音声入力の状態表示",
        paragraphs: [
          "録音中、文字起こし中、貼り付け完了などの状態に合わせて、画面上のネコチャンの表情が変わります。表示のオン・オフと位置を変更できます。",
          [
            "ネコチャン絵文字は、しかまつさんの作品を使用しています。画像の配布元とクレジットは",
            { label: "README", href: "https://github.com/nibuno/voice-input-tool#ネコチャン" },
            "に記載しています。",
          ],
        ],
      },
      {
        heading: "利用環境と初回設定",
        paragraphs: [
          "ローカル版の配布対象はApple Silicon搭載Mac、macOS 15以降です。Pythonのインストールは不要ですが、初回に音声認識モデルの取得と、マイク・アクセシビリティ・入力監視の許可が必要です。",
          "v0.1.0の配布版はAppleの公証を行っていないため、初回起動時にmacOSの警告が表示される場合があります。配布ページと使い方を確認してから利用してください。API認識を使う場合は、別途OpenAI APIキーと利用料金が必要です。",
        ],
      },
    ],
  },
  {
    slug: "django-ninja-ulid",
    title: "django-ninja-ulid — Django NinjaのULID対応ライブラリ",
    shortTitle: "django-ninja-ulid",
    period: "2026",
    status: "アルファ版",
    summary:
      "Django NinjaのAPIで、ULIDの入力検証と文字列への変換、モデルからのレスポンススキーマ生成を扱うPythonライブラリ。",
    stack: "Python / Django / Django Ninja / Pydantic",
    links: [
      {
        label: "PyPIで見る",
        href: "https://pypi.org/project/django-ninja-ulid/",
        primary: true,
      },
      {
        label: "日本語ドキュメント",
        href: "https://github.com/nibuno/django-ninja-ulid/blob/main/README.ja.md",
      },
      { label: "GitHub", href: "https://github.com/nibuno/django-ninja-ulid" },
    ],
    sections: [
      {
        heading: "対応した課題",
        paragraphs: [
          "Django Ninjaでは、python-ulid-djangoのULIDFieldがUUID型として推論されます。このライブラリではULIDの検証と変換を明示し、APIで26文字のULID文字列を受け取り、返せるようにしています。",
        ],
      },
      {
        heading: "つくったもの",
        paragraphs: [
          "ApiULIDをスキーマの型として指定すると、入力を検証してPython内ではULIDオブジェクトとして扱い、レスポンスでは大文字の文字列へ変換します。",
          "Djangoモデルからレスポンススキーマを生成する機能も用意しています。外部キーや多対多の関連はIDで返し、通常のUUIDフィールドはそのまま扱います。IDの生成や保存は、既存のpython-ulidとpython-ulid-djangoに任せています。",
        ],
      },
      {
        heading: "導入",
        paragraphs: [
          "PyPIからpip install django-ninja-ulidでインストールできます。モデルとの連携にはormオプションを使用します。",
          "現在はアルファ版です。対応するPythonと依存ライブラリのバージョンに制約があるため、導入前にドキュメントで利用中の環境との組み合わせを確認してください。",
        ],
      },
    ],
  },
  {
    slug: "simple-canvas",
    title: "SimpleCanvas — 構成図とメモのキャンバス",
    shortTitle: "SimpleCanvas",
    period: "2026",
    summary:
      "構成図と、その設計理由を一緒に残すためのツール。図形をつなぎ、説明やメモを添えられます。",
    screenshot: {
      src: "/images/projects/simple-canvas.jpg",
      alt: "SimpleCanvasでブラウザ、API、DB、Queue、Workerをつなぎ、通知処理の方針と再試行のメモを添えた構成図。",
      width: 1280,
      height: 720,
    },
    stack: "React / TypeScript / Vite / SVG",
    links: [
      {
        label: "使ってみる",
        href: "https://nibuno.github.io/simple-er/canvas/",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/nibuno/simple-er/tree/main/canvas",
      },
    ],
    sections: [
      {
        heading: "つくったもの",
        paragraphs: [
          "箱、人、円柱、クラウドなどの図形を置いて、線でつなげるキャンバスです。図形ごとにメモを付けたり、余白に説明を書いたりして、構成とその理由を同じ図に残せます。",
          "複数の要素を囲んでまとめる操作や、線と配置の整頓にも対応しています。初回は「通知処理の設計」のサンプルを表示するので、編集しながら操作を試せます。",
        ],
      },
      {
        heading: "保存と画像出力",
        paragraphs: [
          "編集内容はブラウザ内に自動保存し、図やメモを外部へ送信しません。JSONファイルで保存・復元できるほか、SVG・PNGで図全体を画像として書き出せます。",
          "ブラウザに自動保存するのは現在の1枚です。複数の図を残す場合はファイルに保存します。共同編集や画像の貼り付けには対応していません。",
        ],
      },
      {
        heading: "SimpleERとの関係",
        paragraphs: [
          [
            { label: "SimpleER", href: "/projects/simple-er/" },
            "と同じリポジトリで開発している姉妹ツールです。ER図と構成図で用途を分け、画面と保存領域はそれぞれ独立させています。",
          ],
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
