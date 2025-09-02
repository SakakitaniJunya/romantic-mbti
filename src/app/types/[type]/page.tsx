'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';

// Import the shared typeData
import { typeData } from '../../../lib/typeData';

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