'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';

// メインのtypeDataをインポート（実際のプロジェクトでは共通ファイルから）
const typeData: { [key: string]: { 
  title: string; 
  subtitle: string; 
  description: string;
  detailedAnalysis: {
    strengths: string[];
    challenges: string[];
    loveStyle: string;
    compatibility: string[];
    growth: string[];
  };
  actionPlan: {
    immediate: string[];
    shortTerm: string[];
    longTerm: string[];
  };
  advice: {
    dating: string[];
    relationship: string[];
    communication: string[];
  };
}} = {
  "I-L-E-T": {
    title: "熱烈リード型ロマンチスト",
    subtitle: "ロマンを求めつつ自分で引っ張る情熱家",
    description: "夢見がちな一面と強いリーダーシップが同居したタイプ。理想を相手に押し付けがちにならないよう注意。",
    detailedAnalysis: {
      strengths: [
        "ドラマチックで情熱的な恋愛を演出する天才",
        "パートナーを理想的な方向へ導くリーダーシップ",
        "愛情表現が豊かで、相手に特別感を与える",
        "深いつながりを求め、表面的な関係を嫌う",
        "困難な状況でも愛を貫く強い意志力"
      ],
      challenges: [
        "理想と現実のギャップに苦しみやすい",
        "相手に完璧さを求めすぎる傾向",
        "自分の価値観を押し付けてしまう可能性",
        "感情の起伏が激しく、相手を振り回すことも",
        "現実的な問題を軽視しがち"
      ],
      loveStyle: "映画のような劇的な愛を理想とし、パートナーとともに成長し続ける関係を重視。深い精神的なつながりと情熱的な愛情表現を両立させたい。",
      compatibility: [
        "I-H-V-T（内向的で協調型）：お互いの理想を尊重し合える",
        "R-L-V-D（現実的でバランス型）：足りない部分を補い合える",
        "I-L-V-D（同じ理想主義）：価値観を共有できる"
      ],
      growth: [
        "相手の価値観を尊重する寛容さを身につける",
        "現実的な問題にも目を向ける習慣をつける",
        "感情のコントロール方法を学ぶ",
        "相手のペースに合わせる柔軟性を養う",
        "完璧主義を手放し、不完全さも愛する"
      ]
    },
    actionPlan: {
      immediate: [
        "今日から相手の意見を最後まで聞く習慣をつける",
        "理想と現実のバランスチェックリストを作成",
        "感情的になった時の3秒ルールを実践"
      ],
      shortTerm: [
        "月1回、現実的なデートプランを企画する",
        "相手の価値観について深く話し合う時間を設ける",
        "恋愛以外の趣味や目標も共有する",
        "感情日記をつけて自分のパターンを把握"
      ],
      longTerm: [
        "理想の関係性について相手と共通のビジョンを作る",
        "お互いの成長を支え合えるパートナーシップを構築",
        "現実的な将来設計を一緒に立てる",
        "感情的知性を高めるトレーニングを継続"
      ]
    },
    advice: {
      dating: [
        "初デートでは理想を語りすぎず、相手の話に耳を傾ける",
        "ロマンチックな演出は相手の好みをリサーチしてから",
        "自分の価値観を押し付けずに、共通点を見つける",
        "完璧を求めず、自然な流れを大切にする"
      ],
      relationship: [
        "日常の小さな幸せも大切にする意識を持つ",
        "相手の成長を待つ忍耐力を身につける",
        "理想だけでなく現実的な目標も一緒に設定",
        "感情的になった時は一度冷静になる時間を作る"
      ],
      communication: [
        "自分の理想を説明する時は、相手の立場も考慮する",
        "批判ではなく建設的な提案の形で伝える",
        "相手の良いところを積極的に言葉にする",
        "深刻な話題も相手がリラックスできる環境で"
      ]
    }
  },
  "I-H-E-T": {
    title: "溺愛型ロマンチスト", 
    subtitle: "理想を語り合いながら相手との一体感を大事にする",
    description: "愛情表現豊かで絆を深めたいタイプ。相手に寄り添いすぎて自分を見失わないように気をつけよう。",
    detailedAnalysis: {
      strengths: [
        "深い愛情と献身的な姿勢で相手を包み込む",
        "豊かな感情表現で相手に愛を伝える天才",
        "相手の気持ちに敏感で、細やかな配慮ができる",
        "理想的な恋愛関係への憧れが強く、ロマンチック",
        "パートナーとの一体感を重視し、深い絆を築く"
      ],
      challenges: [
        "相手に依存しすぎて自分を見失いがち",
        "愛情の押し付けで相手を重荷に感じさせる可能性",
        "理想と現実のギャップに苦しみやすい",
        "自己犠牲的になりすぎて疲れてしまう",
        "相手の自由度を制限してしまうことがある"
      ],
      loveStyle: "深い精神的なつながりと一体感を求め、相手と心も体も完全に結ばれた関係を理想とする。愛情表現は豊かで、相手に自分のすべてを捧げたい気持ちが強い。",
      compatibility: [
        "R-L-V-D（現実的でクール）：バランスを保てる相手",
        "I-L-V-T（同じ理想主義だが自立的）：価値観を共有しつつ適度な距離",
        "R-H-V-T（安定志向）：安心できる関係性を築ける"
      ],
      growth: [
        "自分自身の時間と空間を確保する重要性を学ぶ",
        "相手の自立性を尊重し、適度な距離感を保つ",
        "理想と現実のバランスを取る現実的な視点を養う",
        "自己犠牲ではない健全な愛情表現を身につける",
        "相手に依存せずとも幸せでいられる自立心を育てる"
      ]
    },
    actionPlan: {
      immediate: [
        "今日から一人の時間を意識的に作る習慣をつける",
        "相手への連絡頻度を見直し、適度な間隔を空ける",
        "自分の感情を客観視する時間を設ける"
      ],
      shortTerm: [
        "月1回は友人や家族との時間を優先する",
        "恋愛以外の趣味や目標を見つけて取り組む",
        "相手のプライベート空間を尊重する練習をする",
        "感情日記をつけて自分の愛情パターンを把握"
      ],
      longTerm: [
        "互いに自立した健全なパートナーシップを築く",
        "依存ではなく相互支援の関係性を確立する",
        "自分らしさを保ちながらも愛情深い関係を維持",
        "理想的な愛情表現のバランスポイントを見つける"
      ]
    },
    advice: {
      dating: [
        "初デートでは相手のペースを尊重し、距離感を大切に",
        "愛情表現は段階的に、相手の反応を見ながら調整",
        "自分の趣味や価値観も積極的にシェアする",
        "相手の話を聞く時間を愛情表現と同じくらい大切に"
      ],
      relationship: [
        "日常的に一人の時間を意識的に作る",
        "相手の友人関係や趣味を積極的に応援する",
        "愛情表現は質を重視し、量で圧倒しない",
        "互いの成長を支え合える関係性を目指す"
      ],
      communication: [
        "感情を伝える時は相手の状況も考慮する",
        "要求ではなく希望として気持ちを表現する",
        "相手の意見や感情も積極的に聞く姿勢を大切に",
        "重要な話は相手がリラックスしている時を選ぶ"
      ]
    }
  },
  // 他のタイプも同様に定義...
  // 簡略化のため、主要なタイプのみ記載
};

interface PageProps {
  params: { type: string };
}

export default function TypeDetailPage({ params }: PageProps) {
  const typeKey = params.type.toUpperCase();
  const typeInfo = typeData[typeKey];

  if (!typeInfo) {
    notFound();
  }

  return (
    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      {/* ナビゲーション */}
      <div style={{ marginBottom: '30px' }}>
        <Link href="/types" style={{
          color: 'var(--primary-color)',
          textDecoration: 'none',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          ← 16タイプ一覧に戻る
        </Link>
      </div>

      {/* ヒーローセクション */}
      <div className="glass-card" style={{
        padding: '40px',
        textAlign: 'center',
        marginBottom: '30px',
        background: 'var(--love-gradient)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 背景装飾 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* タイプ画像 */}
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 20px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
          }}>
            <img 
              src={`/image/${typeKey}.png`} 
              alt={typeInfo.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          
          <div style={{
            fontSize: '2rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '15px'
          }}>
            {typeKey}
          </div>
          <h1 style={{
            fontSize: '2.2rem',
            fontWeight: 700,
            marginBottom: '15px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            『{typeInfo.title}』
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.9,
            fontWeight: 500
          }}>
            {typeInfo.subtitle}
          </p>
        </div>
      </div>

      {/* 基本説明 */}
      <div className="glass-card" style={{
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2 style={{
          color: 'var(--accent-color)',
          marginBottom: '20px',
          fontSize: '1.5rem',
          fontWeight: 700
        }}>
          💡 基本的な特徴
        </h2>
        <p style={{
          lineHeight: 1.8,
          fontSize: '1.1rem',
          color: 'var(--text-color)'
        }}>
          {typeInfo.description}
        </p>
      </div>

      {/* 詳細分析 */}
      <div className="glass-card" style={{
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2 style={{
          color: 'var(--accent-color)',
          marginBottom: '25px',
          fontSize: '1.5rem',
          fontWeight: 700
        }}>
          🔍 詳細分析
        </h2>

        {/* 恋愛スタイル */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>💕 恋愛スタイル</h3>
          <p style={{ lineHeight: 1.7, color: 'var(--text-color)' }}>
            {typeInfo.detailedAnalysis.loveStyle}
          </p>
        </div>

        {/* 強み */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ color: 'var(--success-color)', marginBottom: '15px' }}>✨ 強み</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {typeInfo.detailedAnalysis.strengths.map((strength, index) => (
              <li key={index} style={{ 
                marginBottom: '8px', 
                lineHeight: 1.6,
                color: 'var(--text-color)'
              }}>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        {/* 注意点 */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ color: 'var(--warning-color)', marginBottom: '15px' }}>⚠️ 注意すべきポイント</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {typeInfo.detailedAnalysis.challenges.map((challenge, index) => (
              <li key={index} style={{ 
                marginBottom: '8px', 
                lineHeight: 1.6,
                color: 'var(--text-color)'
              }}>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* アクションプラン */}
      <div className="glass-card" style={{
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2 style={{
          color: 'var(--accent-color)',
          marginBottom: '25px',
          fontSize: '1.5rem',
          fontWeight: 700
        }}>
          🎯 実践アクションプラン
        </h2>

        <div style={{
          display: 'grid',
          gap: '25px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
        }}>
          <div>
            <h3 style={{ color: 'var(--success-color)', marginBottom: '15px' }}>🚀 今すぐできること</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {typeInfo.actionPlan.immediate.map((action, index) => (
                <li key={index} style={{ marginBottom: '8px', lineHeight: 1.6, color: 'var(--text-color)' }}>
                  {action}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>📅 短期目標</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {typeInfo.actionPlan.shortTerm.map((action, index) => (
                <li key={index} style={{ marginBottom: '8px', lineHeight: 1.6, color: 'var(--text-color)' }}>
                  {action}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '15px' }}>🌟 長期ビジョン</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {typeInfo.actionPlan.longTerm.map((action, index) => (
                <li key={index} style={{ marginBottom: '8px', lineHeight: 1.6, color: 'var(--text-color)' }}>
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* アドバイス */}
      <div className="glass-card" style={{
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2 style={{
          color: 'var(--accent-color)',
          marginBottom: '25px',
          fontSize: '1.5rem',
          fontWeight: 700
        }}>
          💡 実践アドバイス
        </h2>

        <div style={{ display: 'grid', gap: '25px' }}>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>💕 デートでの心がけ</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {typeInfo.advice.dating.map((advice, index) => (
                <li key={index} style={{ marginBottom: '8px', lineHeight: 1.6, color: 'var(--text-color)' }}>
                  {advice}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '15px' }}>💞 関係性の深め方</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {typeInfo.advice.relationship.map((advice, index) => (
                <li key={index} style={{ marginBottom: '8px', lineHeight: 1.6, color: 'var(--text-color)' }}>
                  {advice}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'var(--warning-color)', marginBottom: '15px' }}>💬 コミュニケーションのコツ</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {typeInfo.advice.communication.map((advice, index) => (
                <li key={index} style={{ marginBottom: '8px', lineHeight: 1.6, color: 'var(--text-color)' }}>
                  {advice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 相性 */}
      <div className="glass-card" style={{
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2 style={{
          color: 'var(--accent-color)',
          marginBottom: '25px',
          fontSize: '1.5rem',
          fontWeight: 700
        }}>
          💞 相性の良いタイプ
        </h2>
        <ul style={{ paddingLeft: '20px' }}>
          {typeInfo.detailedAnalysis.compatibility.map((compat, index) => (
            <li key={index} style={{ 
              marginBottom: '10px', 
              lineHeight: 1.6,
              color: 'var(--text-color)',
              fontSize: '1.05rem'
            }}>
              {compat}
            </li>
          ))}
        </ul>
      </div>

      {/* ナビゲーション */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px',
        marginTop: '40px'
      }}>
        <Link href="/types">
          <button className="btn-secondary">
            📋 16タイプ一覧
          </button>
        </Link>
        <Link href="/">
          <button className="btn-primary">
            🏠 診断ページ
          </button>
        </Link>
      </div>
    </div>
  );
}