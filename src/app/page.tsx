
// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

//
// 【スコア計算用設定】
// ※各質問の「軸」と「極性」は HTML 内の設定と同じ順序で定義します
//
const questionSettings = [
  // I vs R（質問1～7）
  { q: 1, dimension: "IR", polarity: +1 },
  { q: 2, dimension: "IR", polarity: +1 },
  { q: 3, dimension: "IR", polarity: +1 },
  { q: 4, dimension: "IR", polarity: +1 },
  { q: 5, dimension: "IR", polarity: +1 },
  { q: 6, dimension: "IR", polarity: -1 },
  { q: 7, dimension: "IR", polarity: -1 },
  // L vs H（質問8～14）
  { q: 8,  dimension: "LH", polarity: +1 },
  { q: 9,  dimension: "LH", polarity: +1 },
  { q: 10, dimension: "LH", polarity: +1 },
  { q: 11, dimension: "LH", polarity: -1 },
  { q: 12, dimension: "LH", polarity: -1 },
  { q: 13, dimension: "LH", polarity: -1 },
  { q: 14, dimension: "LH", polarity: -1 },
  // E vs V（質問15～21）
  { q: 15, dimension: "EV", polarity: +1 },
  { q: 16, dimension: "EV", polarity: +1 },
  { q: 17, dimension: "EV", polarity: +1 },
  { q: 18, dimension: "EV", polarity: -1 },
  { q: 19, dimension: "EV", polarity: -1 },
  { q: 20, dimension: "EV", polarity: -1 },
  { q: 21, dimension: "EV", polarity: -1 },
  // T vs D（質問22～28）
  { q: 22, dimension: "TD", polarity: +1 },
  { q: 23, dimension: "TD", polarity: +1 },
  { q: 24, dimension: "TD", polarity: +1 },
  { q: 25, dimension: "TD", polarity: -1 },
  { q: 26, dimension: "TD", polarity: -1 },
  { q: 27, dimension: "TD", polarity: -1 },
  { q: 28, dimension: "TD", polarity: -1 },
];

//
// 【タイプデータ】
// ※各タイプの結果情報（16タイプ分）
const typeData: { [key: string]: { title: string; subtitle: string; description: string } } = {
  "I-L-E-T": {
    title: "熱烈リード型ロマンチスト",
    subtitle: "ロマンを求めつつ自分で引っ張る情熱家",
    description: "夢見がちな一面と強いリーダーシップが同居したタイプ。理想を相手に押し付けがちにならないよう注意。"
  },
  "I-L-E-D": {
    title: "自由奔放なロマン派リーダー",
    subtitle: "理想主導＋リーダー気質＋自分の時間を確保",
    description: "ドラマチックな展開を好みつつ、束縛は苦手。自分らしさを尊重してくれる相手と相性◎。"
  },
  "I-L-V-T": {
    title: "秘めた情熱のロマン派リーダー",
    subtitle: "内向的に見えて実は理想主導で熱い心を秘めている",
    description: "普段は控えめだが、好きな相手には強いこだわりを持つ。一人の時間も大切にする繊細な一面がある。"
  },
  "I-L-V-D": {
    title: "自分ワールド主導のロマン派",
    subtitle: "理想は譲れないが、一人の世界も大事にしたい",
    description: "妄想力豊かで自己主張もあるが、干渉されるのは苦手。趣味や世界観を共有できる相手だと長続きしやすい。"
  },
  "I-H-E-T": {
    title: "溺愛型ロマンチスト",
    subtitle: "理想を語り合いながら相手との一体感を大事にする",
    description: "愛情表現豊かで絆を深めたいタイプ。相手に寄り添いすぎて自分を見失わないように気をつけよう。"
  },
  "I-H-E-D": {
    title: "夢見がちだけどマイペース",
    subtitle: "ロマンを求めつつも無理はしないスタンス",
    description: "愛情表現は好きだが、あまり束縛し合わない関係を好む。自分の世界と相手の世界を程よく両立させるのがポイント。"
  },
  "I-H-V-T": {
    title: "慎ましやかな理想追求型",
    subtitle: "派手ではないが深いところでロマンを追い求める",
    description: "じっくりと理想を描き、共感し合えるパートナーとは深く結びつく。"
  },
  "I-H-V-D": {
    title: "ソフトでゆるいつながりを好むロマン派",
    subtitle: "理想はあるが、ゆったりとした距離感を望む",
    description: "べったりしすぎず、マイペースにロマンを楽しむ。お互いの個性を認め合える関係が理想的。"
  },
  "R-L-E-T": {
    title: "現実を見据えつつ熱意をぶつける主導者",
    subtitle: "地に足をつけてしっかりアプローチ",
    description: "恋愛にも計画性を持ち、積極的にアクション。思い込みで突っ走らないようにバランスを取ることが大切。"
  },
  "R-L-E-D": {
    title: "自由も欲しいパワフル現実派",
    subtitle: "リーダーシップ＆行動力あり、でも束縛はNo",
    description: "相手を引っ張る頼もしさがあるが、同時に独立心も強い。適度な距離感を尊重すると◎。"
  },
  "R-L-V-T": {
    title: "クールな現実主導型",
    subtitle: "積極的に進めたいが、派手な感情表現は苦手",
    description: "感情をあまり見せないため、相手に分かりやすいコミュニケーションを意識したい。"
  },
  "R-L-V-D": {
    title: "サバサバ×自立志向リーダー",
    subtitle: "お互いの自由を尊重したクールなリーダータイプ",
    description: "干渉されるのは好まない。あっさりしすぎて冷たい印象を与えないよう注意。"
  },
  "R-H-E-T": {
    title: "生活感重視だけど情熱的協調型",
    subtitle: "安定重視＋豊かな感情表現で二人の絆を深める",
    description: "堅実さとロマンのバランス感が強み。安定を求めつつ、感情表現も大切にする。"
  },
  "R-H-E-D": {
    title: "程よい情熱と現実感を両立するタイプ",
    subtitle: "深追いはしないが愛情は大事にするバランスタイプ",
    description: "自然体の恋愛を好み、束縛やドラマティックすぎるのは苦手。バランスの取れた関係を築く。"
  },
  "R-H-V-T": {
    title: "安定と協調を大事にする堅実派",
    subtitle: "大騒ぎはしないが、しっかりとした絆を築きたい",
    description: "派手さはないが、心強いパートナーになりやすい。安定を重視し、長続きしやすい。"
  },
  "R-H-V-D": {
    title: "ほどよい距離感を好む堅実派",
    subtitle: "恋人とも一定の距離を保ちつつ、安定を求める",
    description: "生活ペースや自由を大事にするタイプ。近づきすぎず離れすぎずが理想。"
  }
};

//
// 【質問テキスト】
// ※グループごとに見出しを出しつつ、全28問を定義
//
const questions = [
  // 軸1: I vs R
  { id: 1, text: "初デートはロマンチックな場所やシチュエーションを優先したい。" },
  { id: 2, text: "「運命」や「特別な奇跡」を感じるようなドラマチックさに惹かれる。" },
  { id: 3, text: "デートプランを考えるとき、華やかさやムードを重視する。" },
  { id: 4, text: "ロマンチックな妄想や空想をするのが好きだ。" },
  { id: 5, text: "相手とは、ドラマのような特別な展開を期待してしまう。" },
  { id: 6, text: "夢や理想を優先しすぎるより、現実を冷静に見たいほうだ。（逆説的にI寄りを下げる）" },
  { id: 7, text: "恋愛も生活の一部なので、非現実的な期待はしたくない。（逆説的にI寄りを下げる）" },
  // 軸2: L vs H
  { id: 8, text: "相手をリードするのが好きで、自分から積極的に誘う方だ。" },
  { id: 9, text: "デートプランや関係の進め方は、自分主導で決めたい。" },
  { id: 10, text: "自分の判断や提案に相手がついてきてくれると嬉しい。" },
  { id: 11, text: "恋愛においては主導権を握るより、相手と対等に決めるほうが心地よい。（逆説的にL寄りを下げる）" },
  { id: 12, text: "相手の意向を尊重しすぎて、自分の意見が後回しになることがある。（逆説的にL寄りを下げる）" },
  { id: 13, text: "自分がリードしなくても、相手が楽しそうならOKだ。" },
  { id: 14, text: "相手にリードされると嬉しい場合も多い。" },
  // 軸3: E vs V
  { id: 15, text: "好きな相手には気持ちを言葉でしっかり伝えたい。" },
  { id: 16, text: "スキンシップや愛情表現は多いほうだと思う。" },
  { id: 17, text: "感情的になったとき、そのまま素直に出してしまうことが多い。" },
  { id: 18, text: "自分の本音を相手に伝えるのはちょっと苦手だ。（逆説的にE寄りを下げる）" },
  { id: 19, text: "相手から「何を考えているか分からない」と言われることがある。（逆説的にE寄りを下げる）" },
  { id: 20, text: "感情表現やスキンシップは少なめのほうが自分には合う。" },
  { id: 21, text: "大好きな相手にもあまりはしゃぎすぎないようにしてしまう。" },
  // 軸4: T vs D
  { id: 22, text: "恋愛中は、できるだけ一緒の時間を増やしたい。" },
  { id: 23, text: "好きな人とは常に連絡を取り合っていたい。" },
  { id: 24, text: "パートナーと「二人の世界」を作り込むことに喜びを感じる。" },
  { id: 25, text: "恋人といえど、ひとりの時間は必ず確保したい。（逆説的にT寄りを下げる）" },
  { id: 26, text: "一緒にいても自分のやりたいことはやりたい。（逆説的にT寄りを下げる）" },
  { id: 27, text: "自分だけの自由なスペースが制限されるとストレスを感じる。（逆説的にT寄りを下げる）" },
  { id: 28, text: "友人・趣味なども含めて、自分の生活ペースを大事にしたい。（逆説的にT寄りを下げる）" }
];

//
// 【ラジオボタン共通スタイル】
const radioLabelStyle: React.CSSProperties = {
  cursor: 'pointer',
  padding: '12px 20px',
  borderRadius: '50%',
  background: '#e0f7fa',
  border: '2px solid var(--primary-color)',
  color: 'var(--primary-color)',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function TestPage() {
  const [result, setResult] = useState<{
    typeKey: string;
    title: string;
    subtitle: string;
    description: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let scoreIR = 0, scoreLH = 0, scoreEV = 0, scoreTD = 0;
    const formData = new FormData(e.currentTarget);

    questionSettings.forEach(qs => {
      const answerStr = formData.get("q" + qs.q);
      if (!answerStr) return;
      const selectedValue = parseInt(answerStr as string);
      const subScore = (selectedValue - 3) * qs.polarity;
      switch (qs.dimension) {
        case "IR": scoreIR += subScore; break;
        case "LH": scoreLH += subScore; break;
        case "EV": scoreEV += subScore; break;
        case "TD": scoreTD += subScore; break;
      }
    });

    const typeIorR = scoreIR >= 0 ? "I" : "R";
    const typeLorH = scoreLH >= 0 ? "L" : "H";
    const typeEorV = scoreEV >= 0 ? "E" : "V";
    const typeTorD = scoreTD >= 0 ? "T" : "D";
    const finalTypeKey = `${typeIorR}-${typeLorH}-${typeEorV}-${typeTorD}`;

    if (typeData[finalTypeKey]) {
      setResult({
        typeKey: finalTypeKey,
        title: typeData[finalTypeKey].title,
        subtitle: typeData[finalTypeKey].subtitle,
        description: typeData[finalTypeKey].description
      });
    } else {
      setResult(null);
    }
  };

  return (
    <div className="container">
      {/* ヒーローヘッダー */}
      <header style={{
        width: '100%',
        padding: '60px 20px',
        textAlign: 'center',
        color: 'var(--accent-color)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)',
          pointerEvents: 'none',
          transform: 'translate(-10%, -10%)'
        }}></div>
        <h1 style={{ fontSize: '2.5rem', margin: 0, marginBottom: '10px', fontWeight: 700 }}>恋愛特化型MBTIライク診断</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: 0, lineHeight: 1.6 }}>
          28問に答えて、あなたの恋愛時のタイプを診断しましょう。<br />
          I/R・L/H・E/V・T/D の4軸から導き出される全16タイプです。
        </p>
      </header>

      {/* グラスカード＋ナビゲーション */}
      <div style={{
        background: 'rgba(255,255,255, 0.6)',
        boxShadow: '0 10px 25px var(--shadow-color)',
        borderRadius: '16px',
        padding: '30px',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.6 }}>
          恋愛時のあなたの傾向をサクッとチェック！<br />
          選択肢をクリックして回答するだけで診断できます。
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link href="/types" target="_blank" style={{
            display: 'inline-block',
            margin: '5px 8px',
            padding: '12px 20px',
            background: 'var(--primary-color)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 700,
            transition: 'background 0.3s, transform 0.3s',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
          }}>16タイプ一覧を見る</Link>
          <Link href="/compatibility" target="_blank" style={{
            display: 'inline-block',
            margin: '5px 8px',
            padding: '12px 20px',
            background: 'var(--primary-color)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 700,
            transition: 'background 0.3s, transform 0.3s',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
          }}>相性診断ページ</Link>
        </div>
      </div>

      {/* 診断フォーム */}
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '40px'
      }}>
        {/* 各軸の見出しと質問 */}
        <h2 style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-color)', fontSize: '1.5rem' }}>I vs R</h2>
        {questions.filter(q => q.id >= 1 && q.id <= 7).map(q => (
          <div key={q.id} className="question" style={{
            margin: '15px auto',
            padding: '20px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px var(--shadow-color)',
            maxWidth: '600px'
          }}>
            <p style={{
              marginBottom: '15px',
              fontWeight: 500,
              color: '#555',
              fontSize: '1.1rem',
              textAlign: 'center'
            }}>
              {q.id}. {q.text}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#666',
              fontSize: '0.9rem',
              padding: '0 10px'
            }}>
              <span>当てはまらない</span>
              <span>やや当てはまらない</span>
              <span>どちらでもない</span>
              <span>やや当てはまる</span>
              <span>当てはまる</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap',
              padding: '0 10px'
            }}>
              {[1,2,3,4,5].map(option => (
                <div key={option}>
                  <input type="radio" name={`q${q.id}`} id={`q${q.id}_${option}`} value={option} required={option === 1} style={{ display: 'none' }} />
                  <label htmlFor={`q${q.id}_${option}`} style={radioLabelStyle}></label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-color)', fontSize: '1.5rem' }}>L vs H</h2>
        {questions.filter(q => q.id >= 8 && q.id <= 14).map(q => (
          <div key={q.id} className="question" style={{
            margin: '15px auto',
            padding: '20px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px var(--shadow-color)',
            maxWidth: '600px'
          }}>
            <p style={{
              marginBottom: '15px',
              fontWeight: 500,
              color: '#555',
              fontSize: '1.1rem',
              textAlign: 'center'
            }}>
              {q.id}. {q.text}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#666',
              fontSize: '0.9rem',
              padding: '0 10px'
            }}>
              <span>当てはまらない</span>
              <span>やや当てはまらない</span>
              <span>どちらでもない</span>
              <span>やや当てはまる</span>
              <span>当てはまる</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap',
              padding: '0 10px'
            }}>
              {[1,2,3,4,5].map(option => (
                <div key={option}>
                  <input type="radio" name={`q${q.id}`} id={`q${q.id}_${option}`} value={option} required={option === 1} style={{ display: 'none' }} />
                  <label htmlFor={`q${q.id}_${option}`} style={radioLabelStyle}></label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-color)', fontSize: '1.5rem' }}>E vs V</h2>
        {questions.filter(q => q.id >= 15 && q.id <= 21).map(q => (
          <div key={q.id} className="question" style={{
            margin: '15px auto',
            padding: '20px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px var(--shadow-color)',
            maxWidth: '600px'
          }}>
            <p style={{
              marginBottom: '15px',
              fontWeight: 500,
              color: '#555',
              fontSize: '1.1rem',
              textAlign: 'center'
            }}>
              {q.id}. {q.text}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#666',
              fontSize: '0.9rem',
              padding: '0 10px'
            }}>
              <span>当てはまらない</span>
              <span>やや当てはまらない</span>
              <span>どちらでもない</span>
              <span>やや当てはまる</span>
              <span>当てはまる</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap',
              padding: '0 10px'
            }}>
              {[1,2,3,4,5].map(option => (
                <div key={option}>
                  <input type="radio" name={`q${q.id}`} id={`q${q.id}_${option}`} value={option} required={option === 1} style={{ display: 'none' }} />
                  <label htmlFor={`q${q.id}_${option}`} style={radioLabelStyle}></label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-color)', fontSize: '1.5rem' }}>T vs D</h2>
        {questions.filter(q => q.id >= 22 && q.id <= 28).map(q => (
          <div key={q.id} className="question" style={{
            margin: '15px auto',
            padding: '20px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px var(--shadow-color)',
            maxWidth: '600px'
          }}>
            <p style={{
              marginBottom: '15px',
              fontWeight: 500,
              color: '#555',
              fontSize: '1.1rem',
              textAlign: 'center'
            }}>
              {q.id}. {q.text}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#666',
              fontSize: '0.9rem',
              padding: '0 10px'
            }}>
              <span>当てはまらない</span>
              <span>やや当てはまらない</span>
              <span>どちらでもない</span>
              <span>やや当てはまる</span>
              <span>当てはまる</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap',
              padding: '0 10px'
            }}>
              {[1,2,3,4,5].map(option => (
                <div key={option}>
                  <input type="radio" name={`q${q.id}`} id={`q${q.id}_${option}`} value={option} required={option === 1} style={{ display: 'none' }} />
                  <label htmlFor={`q${q.id}_${option}`} style={radioLabelStyle}></label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" style={{
          display: 'block',
          margin: '30px auto 15px',
          padding: '14px 28px',
          fontSize: '1rem',
          fontWeight: 700,
          background: 'var(--primary-color)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          transition: 'background 0.3s, transform 0.3s'
        }}>
          診断結果を見る
        </button>
      </form>

      {/* 診断結果表示 */}
      {result && (
        <div style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '20px',
          maxWidth: '600px',
          width: '100%',
          background: '#fff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px var(--shadow-color)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--accent-color)' }}>
            あなたのタイプは <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#42b883' }}>{result.typeKey}</span>
          </h2>
          <img src={`/image/${result.typeKey}.png`} alt={`${result.title} の画像`} style={{
            maxWidth: '200px',
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            margin: '0 auto 10px',
            display: 'block',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }} />
          <p>{`『${result.title}』 - ${result.subtitle}`}</p>
          <p style={{ marginTop: '10px', whiteSpace: 'pre-wrap', textAlign: 'left', color: '#555' }}>{result.description}</p>
        </div>
      )}
    </div>
  );
}
