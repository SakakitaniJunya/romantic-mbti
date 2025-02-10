
// app/types/page.tsx
import Link from 'next/link';

const typeData: { [key: string]: { title: string; subtitle: string; description: string; } } = {
  "I-L-E-T": {
    title: "熱烈リード型ロマンチスト",
    subtitle: "ロマンを求めつつ自分で引っ張る情熱家",
    description: `夢見がちな面とリーダーシップが同居し、常にドラマチックな展開を望むタイプ。
相手との未来を熱く語り、サプライズや特別なシーンを演出するのが得意。
一方で、自身の理想を押し付けすぎると相手が息苦しく感じることもあるので注意。`
  },
  "I-L-E-D": {
    title: "自由奔放なロマン派リーダー",
    subtitle: "理想主導＋リーダー気質＋自分の時間を確保",
    description: `ロマンチックな演出を好み、恋愛を自分からリードする行動派。
自由を愛し、相手を束縛しない代わりに、自分も干渉されるのを嫌がる傾向が強い。
刺激や新鮮さを求めるあまり、恋愛関係で落ち着きにくい面も。`
  },
  "I-L-V-T": {
    title: "秘めた情熱のロマン派リーダー",
    subtitle: "内向的に見えて実は理想主導で熱い心を秘めている",
    description: `外向的に見えないこともあるが、内面は理想主導で妥協を許さない性格。
相手を喜ばせるためのプランをじっくり考え、いざとなると大胆に行動に移す。
ただし、自分のペースを乱されると一気に意欲をなくすこともあるのでバランスが重要。`
  },
  "I-L-V-D": {
    title: "自分ワールド主導のロマン派",
    subtitle: "理想は譲れないが、一人の世界も大事にしたい",
    description: `妄想力豊かで、恋愛における「特別な瞬間」を大切にする一方、自分の時間も死守したいタイプ。
デートの提案やアイデアは独創的なものが多いが、相手とのペースが合わないとやや孤立しがち。
共通の趣味や価値観を持つ相手と出会うと、どこまでも盛り上がれる。`
  },
  "I-H-E-T": {
    title: "溺愛型ロマンチスト",
    subtitle: "理想を語り合いながら相手との一体感を大事にする",
    description: `お互いの世界観を共有し、愛情表現を惜しまない甘えん坊タイプ。
常に「運命」を感じたいので、サプライズやイベントを一緒に楽しむのが好き。
相手に合わせすぎて自分の意見を言えなくなるとストレスをためやすいので要注意。`
  },
  "I-H-E-D": {
    title: "夢見がちだけどマイペース",
    subtitle: "ロマンを求めつつも無理はしないスタンス",
    description: `愛情表現は好きだが、べったりとした依存関係は苦手で適度な距離感を好む。
空想を楽しむ反面、自分が心地よいペースを乱されると急に引いてしまうことも。
お互いの趣味や時間を尊重し合える相手であれば、持続的に恋愛を楽しみやすい。`
  },
  "I-H-V-T": {
    title: "慎ましやかな理想追求型",
    subtitle: "派手ではないが深いところでロマンを追い求める",
    description: `恋愛においては「運命の絆」を静かに確信し、じっくり育んでいくタイプ。
過剰なアピールはしないが、内心では「特別感」を強く重視する。
打ち解けるまで時間がかかるが、一度心を開いた相手にはとことん尽くす一面を持つ。`
  },
  "I-H-V-D": {
    title: "ソフトでゆるいつながりを好むロマン派",
    subtitle: "理想はあるが、ゆったりとした距離感を望む",
    description: `ロマンチックな想像力を大事にしながら、恋愛でも束縛し合わない関係を理想とする。
連絡頻度も無理なく維持できる程度を好み、重くなりすぎると逃げたくなることも。
ただし、長い時間をかけて少しずつ親密さを深めていくと、意外と深い絆を築きやすい。`
  },
  "R-L-E-T": {
    title: "現実を見据えつつ熱意をぶつける主導者",
    subtitle: "地に足をつけてしっかりアプローチ",
    description: `恋愛にも計画性を持ち、相手をリードする積極派。デートや結婚観、将来設計なども具体的に考える。
一方で、相手を説得する形になりがちで、自分のペースについていけない人を置いてきぼりにする可能性も。
柔軟に相手の考えを取り入れられれば、頼れるパートナーとして輝ける。`
  },
  "R-L-E-D": {
    title: "自由も欲しいパワフル現実派",
    subtitle: "リーダーシップ＆行動力あり、でも束縛はNo",
    description: `思い立ったらすぐ行動に移し、バリバリとリードしていく反面、自分への干渉は苦手。
経済観念や実現可能性を常に意識するため、恋愛も一定の基盤を築くスピードが早い。
相手にも同じような独立心や行動力を求めがちなので、相性の合う人を選ぶと安定しやすい。`
  },
  "R-L-V-T": {
    title: "クールな現実主導型",
    subtitle: "積極的に進めたいが、派手な感情表現は苦手",
    description: `恋愛の進め方は計画的で、具体的な目標を立てて実行していく理論派リーダー。
ただし、感情表現が控えめなため、相手に「冷たい」と誤解されることもある。
適度に言葉や態度で愛情を伝える意識を持つと、お互いの理解が深まりやすい。`
  },
  "R-L-V-D": {
    title: "サバサバ×自立志向リーダー",
    subtitle: "お互いの自由を尊重したクールなリーダータイプ",
    description: `デートや関係を主導したいが、干渉は好まないスマートな行動派。
自分の時間を大切にするあまり、相手にも距離感を求めがちで、放任主義と思われることも。
時には歩み寄る姿勢を見せることで、冷たい印象を和らげることができる。`
  },
  "R-H-E-T": {
    title: "生活感重視だけど情熱的協調型",
    subtitle: "安定重視＋豊かな感情表現で二人の絆を深める",
    description: `堅実な将来設計を考えながらも、愛情表現はしっかり行うため、安心感と刺激のバランスが良いタイプ。
結婚や同棲など具体的なプランを一緒に作り上げようとし、パートナーの意見を大切にする。
ただし、現実的な問題に意識が行き過ぎると、ロマンチックさが薄れがちになる点には注意。`
  },
  "R-H-E-D": {
    title: "程よい情熱と現実感を両立するタイプ",
    subtitle: "深追いはしないが愛情は大事にするバランスタイプ",
    description: `恋愛に大きなドラマや理想は求めないが、一定の情熱表現は欠かさない協調型。
束縛もされたくないが、自分も過度に相手を縛ることはしない穏やかなスタンス。
ただし、曖昧な態度をとりがちなため、相手に物足りなさや不安を与えないように気遣いが必要。`
  },
  "R-H-V-T": {
    title: "安定と協調を大事にする堅実派",
    subtitle: "大騒ぎはしないが、しっかりとした絆を築きたい",
    description: `華やかな演出よりも、日常を着実に積み上げることで関係を深めるタイプ。
静かな愛情表現を好み、相手の生活リズムや価値観を重んじるため、一度結束すると長続きしやすい。
時には自分の思いをもう少し声に出してみると、相手との信頼感がより強まる。`
  },
  "R-H-V-D": {
    title: "ほどよい距離感を好む堅実派",
    subtitle: "恋人とも一定の距離を保ちつつ、安定を求める",
    description: `自分のペースや生活スタイルを乱したくないため、干渉しすぎない関係を望むタイプ。
相手にも同様の独立性や尊重の姿勢を求めるため、共感し合えると心地良い関係を築ける。
恋愛の進み具合はゆっくりだが、その分確かな基盤を作るのが得意。`
  }
};

const keysInPreferredOrder = [
  "I-L-E-T", "I-L-E-D", "I-L-V-T", "I-L-V-D",
  "I-H-E-T", "I-H-E-D", "I-H-V-T", "I-H-V-D",
  "R-L-E-T", "R-L-E-D", "R-L-V-T", "R-L-V-D",
  "R-H-E-T", "R-H-E-D", "R-H-V-T", "R-H-V-D"
];

export default function TypesPage() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontWeight: 700, marginBottom: '20px', color: 'var(--accent-color)' }}>16タイプ一覧</h1>
      <div className="card description" style={{
        background: 'rgba(255,255,255, 0.8)',
        backdropFilter: 'blur(4px)',
        margin: '10px 0',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px var(--shadow-color)',
        textAlign: 'center'
      }}>
        <p>
          恋愛特化型MBTIライク診断で判定される全16タイプを一覧にしました。<br />
          まだ診断していない方は、<Link href="/">こちら</Link>からどうぞ！
        </p>
      </div>

      <div className="card axes-info" style={{ marginBottom: '20px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '15px' }}>4つの軸（Romantic Mode Profiling）</h2>
        <div className="axis-item" style={{ marginBottom: '10px' }}>
          <h3 style={{ marginBottom: '8px', color: '#555', fontWeight: 700 }}>1. Idealistic (I) vs. Realistic (R)</h3>
          <p className="axis-description" style={{ color: '#666', lineHeight: 1.5, marginBottom: '10px' }}>
            <strong>I（理想追求型）</strong>：好きになったらロマンチックな世界を想像しがち。<br />
            <strong>R（現実重視型）</strong>：恋愛も生活の一部として地に足をつけて考える。
          </p>
        </div>
        <div className="axis-item" style={{ marginBottom: '10px' }}>
          <h3 style={{ marginBottom: '8px', color: '#555', fontWeight: 700 }}>2. Leading (L) vs. Harmonizing (H)</h3>
          <p className="axis-description" style={{ color: '#666', lineHeight: 1.5, marginBottom: '10px' }}>
            <strong>L（主導型）</strong>：自分からリードして関係を進めたい。<br />
            <strong>H（協調型）</strong>：相手の意向を尊重しながら進めたい。
          </p>
        </div>
        <div className="axis-item" style={{ marginBottom: '10px' }}>
          <h3 style={{ marginBottom: '8px', color: '#555', fontWeight: 700 }}>3. Expressive (E) vs. Reserved (V)</h3>
          <p className="axis-description" style={{ color: '#666', lineHeight: 1.5, marginBottom: '10px' }}>
            <strong>E（感情表現豊か）</strong>：気持ちをストレートに伝えるタイプ。<br />
            <strong>V（内面に秘める）</strong>：あまり派手な感情表現はしないタイプ。
          </p>
        </div>
        <div className="axis-item" style={{ marginBottom: '10px' }}>
          <h3 style={{ marginBottom: '8px', color: '#555', fontWeight: 700 }}>4. Integration (T) vs. Independence (D)</h3>
          <p className="axis-description" style={{ color: '#666', lineHeight: 1.5, marginBottom: '10px' }}>
            <strong>T（深く結びつきたい）</strong>：常にパートナーとの一体感を大事にする。<br />
            <strong>D（自分のスペースを保ちたい）</strong>：程よい距離感が欲しいタイプ。
          </p>
        </div>
      </div>

      <div id="typeList" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {keysInPreferredOrder.map(key => {
          const typeObj = typeData[key];
          if (!typeObj) return null;
          return (
            <div key={key} className="type-card" style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px var(--shadow-color)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img className="type-image" src={`/image/${key}.png`} alt={typeObj.title} style={{
                width: '100%',
                maxWidth: '200px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '15px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }} />
              <div className="type-key" style={{ fontWeight: 700, color: '#b33', fontSize: '1.2rem', marginBottom: '10px' }}>{key}</div>
              <div className="type-title" style={{ fontSize: '1.1rem', fontWeight: 700, margin: '5px 0', color: '#333' }}>{`『${typeObj.title}』`}</div>
              <div className="type-subtitle" style={{ color: '#666', marginBottom: '10px', fontWeight: 500 }}>{typeObj.subtitle}</div>
              <div className="type-description" style={{ lineHeight: 1.6, color: '#444', whiteSpace: 'pre-wrap', textAlign: 'left' }}>{typeObj.description}</div>
            </div>
          );
        })}
      </div>

      <Link href="/" className="back-link" style={{
        display: 'block',
        textAlign: 'center',
        margin: '30px auto 10px',
        padding: '12px 25px',
        maxWidth: '300px',
        background: 'var(--accent-color)',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '6px',
        fontSize: '1rem',
        fontWeight: 700,
        transition: 'background 0.3s, transform 0.3s',
        boxShadow: '0 3px 8px rgba(0,0,0,0.15)'
      }}>診断ページに戻る</Link>
    </div>
  );
}