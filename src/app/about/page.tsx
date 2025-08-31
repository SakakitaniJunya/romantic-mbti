'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      {/* ナビゲーション */}
      <div style={{ marginBottom: '30px' }}>
        <Link href="/" style={{
          color: 'var(--primary-color)',
          textDecoration: 'none',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          ← ホームに戻る
        </Link>
      </div>

      {/* ヒーローセクション */}
      <div className="glass-card" style={{
        padding: '50px 40px',
        textAlign: 'center',
        marginBottom: '40px',
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
          background: 'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '-1px'
          }}>
            🧠 分人理論について
          </h1>
          <p style={{
            fontSize: '1.4rem',
            opacity: 0.9,
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            RMPIの根幹を成す心理学的概念を<br />
            わかりやすく解説します
          </p>
        </div>
      </div>

      {/* 分人理論とは */}
      <div className="glass-card" style={{
        padding: '40px',
        marginBottom: '30px'
      }}>
        <h2 style={{
          color: 'var(--accent-color)',
          marginBottom: '25px',
          fontSize: '1.8rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          🌟 分人理論とは何か？
        </h2>
        
        <div style={{ 
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'var(--text-color)',
          marginBottom: '30px'
        }}>
          <p style={{ marginBottom: '20px' }}>
            <strong>分人理論</strong>は、日本の作家・平野啓一郎氏によって提唱された概念で、
            「人は相手や環境に応じて異なる人格（分人）を持つ」という考え方です。
          </p>
          
          <p style={{ marginBottom: '20px' }}>
            従来の「本当の自分は一つ」という固定的な人格観とは異なり、
            私たちは状況や相手に応じて複数の「分人」を使い分けながら生活しているという視点を提供します。
          </p>

          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(255, 182, 193, 0.1))',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 107, 157, 0.2)',
            marginTop: '25px'
          }}>
            <h3 style={{
              color: 'var(--primary-color)',
              marginBottom: '15px',
              fontSize: '1.2rem',
              fontWeight: 600
            }}>
              💡 具体例
            </h3>
            <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
              <li style={{ marginBottom: '10px', position: 'relative' }}>
                <span style={{ color: 'var(--primary-color)', marginRight: '8px' }}>•</span>
                職場での「仕事の分人」
              </li>
              <li style={{ marginBottom: '10px', position: 'relative' }}>
                <span style={{ color: 'var(--primary-color)', marginRight: '8px' }}>•</span>
                家族との「家庭の分人」
              </li>
              <li style={{ marginBottom: '10px', position: 'relative' }}>
                <span style={{ color: 'var(--primary-color)', marginRight: '8px' }}>•</span>
                友人との「友情の分人」
              </li>
              <li style={{ position: 'relative' }}>
                <span style={{ color: 'var(--accent-color)', marginRight: '8px' }}>♥</span>
                <strong style={{ color: 'var(--accent-color)' }}>恋人との「恋愛の分人」</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 恋愛への応用 */}
      <div className="glass-card" style={{
        padding: '40px',
        marginBottom: '30px'
      }}>
        <h2 style={{
          color: 'var(--accent-color)',
          marginBottom: '25px',
          fontSize: '1.8rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          💕 恋愛分人の特殊性
        </h2>
        
        <div style={{ 
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'var(--text-color)'
        }}>
          <p style={{ marginBottom: '20px' }}>
            恋愛における分人は、他の場面の分人とは異なる特殊な性質を持っています：
          </p>

          <div style={{
            display: 'grid',
            gap: '20px',
            marginBottom: '25px'
          }}>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 107, 157, 0.1)'
            }}>
              <h3 style={{ 
                color: 'var(--primary-color)', 
                marginBottom: '12px',
                fontSize: '1.2rem',
                fontWeight: 600
              }}>
                🎭 感情の増幅
              </h3>
              <p>
                恋愛時には、普段は見せない感情や行動が現れやすくなります。
                これは恋愛分人が他の分人よりも感情的で表現豊かな特性を持つためです。
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 107, 157, 0.1)'
            }}>
              <h3 style={{ 
                color: 'var(--secondary-color)', 
                marginBottom: '12px',
                fontSize: '1.2rem',
                fontWeight: 600
              }}>
                🌈 価値観の変化
              </h3>
              <p>
                恋愛関係では、普段重視している価値観とは異なる判断基準で行動することがあります。
                これは恋愛分人固有の価値システムが働くためです。
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 107, 157, 0.1)'
            }}>
              <h3 style={{ 
                color: 'var(--warning-color)', 
                marginBottom: '12px',
                fontSize: '1.2rem',
                fontWeight: 600
              }}>
                🎯 関係性への集中
              </h3>
              <p>
                恋愛分人は、相手との関係性に強くフォーカスし、
                二人の世界を重視する傾向があります。これが恋愛の特別感を生み出します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RMPIへの応用 */}
      <div className="glass-card" style={{
        padding: '40px',
        marginBottom: '30px'
      }}>
        <h2 style={{
          color: 'var(--accent-color)',
          marginBottom: '25px',
          fontSize: '1.8rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          🔬 RMPIでの活用方法
        </h2>
        
        <div style={{ 
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'var(--text-color)'
        }}>
          <p style={{ marginBottom: '25px' }}>
            RMPIでは、分人理論を基礎として、あなたの「恋愛分人」のパターンを4つの軸で分析します：
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(255, 182, 193, 0.05))',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(255, 107, 157, 0.2)'
            }}>
              <h3 style={{ 
                color: 'var(--primary-color)', 
                marginBottom: '10px',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>
                I-R軸
              </h3>
              <p style={{ fontSize: '0.95rem' }}>
                理想追求 vs 現実重視<br />
                恋愛に対する基本姿勢
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(186, 85, 211, 0.05))',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(138, 43, 226, 0.2)'
            }}>
              <h3 style={{ 
                color: 'var(--secondary-color)', 
                marginBottom: '10px',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>
                L-H軸
              </h3>
              <p style={{ fontSize: '0.95rem' }}>
                主導型 vs 協調型<br />
                関係での役割パターン
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.1), rgba(255, 215, 0, 0.05))',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(255, 165, 0, 0.3)'
            }}>
              <h3 style={{ 
                color: 'var(--warning-color)', 
                marginBottom: '10px',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>
                E-V軸
              </h3>
              <p style={{ fontSize: '0.95rem' }}>
                表現豊か vs 内向的<br />
                感情表現のスタイル
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(34, 139, 34, 0.1), rgba(50, 205, 50, 0.05))',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(34, 139, 34, 0.3)'
            }}>
              <h3 style={{ 
                color: 'var(--success-color)', 
                marginBottom: '10px',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>
                T-D軸
              </h3>
              <p style={{ fontSize: '0.95rem' }}>
                結びつき重視 vs 独立性重視<br />
                距離感の好み
              </p>
            </div>
          </div>

          <div style={{
            background: 'var(--love-gradient)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            marginTop: '30px'
          }}>
            <h3 style={{ 
              marginBottom: '15px',
              fontSize: '1.3rem',
              fontWeight: 600
            }}>
              ✨ なぜ分人理論が重要なのか？
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, opacity: 0.95 }}>
              「本当の自分」を探すのではなく、<br />
              「恋愛での自分」を理解することで、<br />
              より良いパートナーシップが築けるようになります。
            </p>
          </div>
        </div>
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
            🏠 診断を受ける
          </button>
        </Link>
      </div>
    </div>
  );
}