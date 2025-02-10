
// app/compatibility/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const allTypes = [
  "I-L-E-T","I-L-E-D","I-L-V-T","I-L-V-D",
  "I-H-E-T","I-H-E-D","I-H-V-T","I-H-V-D",
  "R-L-E-T","R-L-E-D","R-L-V-T","R-L-V-D",
  "R-H-E-T","R-H-E-D","R-H-V-T","R-H-V-D"
];

function splitType(typeStr: string) {
  return typeStr.split("-");
}

function calcCompatibilityScore(typeA: string, typeB: string): number {
  const arrA = splitType(typeA);
  const arrB = splitType(typeB);
  let score = 0;
  for (let i = 0; i < 4; i++) {
    if (arrA[i] === arrB[i]) {
      score += 2;
    } else {
      score -= 1;
    }
  }
  return score;
}

function getCompatibilityComment(score: number): string {
  if (score >= 7) {
    return "ほぼ完璧！理想的な組み合わせかもしれません。";
  } else if (score >= 4) {
    return "かなり相性が良い可能性大。スムーズな関係を築けそう。";
  } else if (score >= 1) {
    return "そこそこ合いそう。少し工夫すればさらに良い関係になれます。";
  } else if (score >= -1) {
    return "一長一短かも。違いを尊重し合えば補い合える可能性も。";
  } else if (score >= -3) {
    return "衝突もあるかもしれませんが、お互いを理解することで成長の機会に。";
  } else {
    return "価値観が真逆！？しかし意外な化学反応が起きるかも…。";
  }
}

function getScoreClass(score: number): string {
  if (score >= 4) {
    return "score-high";
  } else if (score >= 0) {
    return "score-mid";
  } else {
    return "score-low";
  }
}

export default function CompatibilityPage() {
  const [myType, setMyType] = useState("");
  const [partnerType, setPartnerType] = useState("");
  const [resultScore, setResultScore] = useState<number | null>(null);
  const [resultComment, setResultComment] = useState("");
  
  const handleCheckCompatibility = () => {
    if (!myType || !partnerType) {
      alert("タイプを両方とも選択してください。");
      return;
    }
    const score = calcCompatibilityScore(myType, partnerType);
    const comment = getCompatibilityComment(score);
    setResultScore(score);
    setResultComment(comment);
  };

  const matrixRows = allTypes.map((myT) => {
    const rowCells = allTypes.map((partnerT) => {
      const score = calcCompatibilityScore(myT, partnerT);
      const scoreClass = getScoreClass(score);
      return (
        <td
          key={partnerT}
          className={scoreClass}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            alert(`自分: ${myT}\n相手: ${partnerT}\n相性スコア: ${score}\n\n${getCompatibilityComment(score)}`);
          }}
        >
          {score}
        </td>
      );
    });
    return (
      <tr key={myT}>
        <th>{myT}</th>
        {rowCells}
      </tr>
    );
  });

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', color: 'var(--accent-color)' }}>相性診断ページ</h1>
      <p style={{ textAlign: 'center' }}>
        恋愛特化型MBTIライク診断で出たあなたのタイプと、お相手のタイプを選択すると、<br />
        簡易的な相性判定スコアとコメントを表示します。
      </p>

      <div className="form-section" style={{
        background: 'rgba(255,255,255, 0.8)',
        backdropFilter: 'blur(4px)',
        borderRadius: '12px',
        boxShadow: '0 4px 10px var(--shadow-color)',
        margin: '15px 0',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: 'var(--accent-color)' }}>あなたとお相手のタイプを選択</h2>
        <label htmlFor="myType">あなたのタイプ: </label>
        <select id="myType" value={myType} onChange={(e) => setMyType(e.target.value)} style={{
          fontSize: '1rem',
          padding: '6px',
          margin: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none'
        }}>
          <option value="">選択してください</option>
          {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <label htmlFor="partnerType">お相手のタイプ: </label>
        <select id="partnerType" value={partnerType} onChange={(e) => setPartnerType(e.target.value)} style={{
          fontSize: '1rem',
          padding: '6px',
          margin: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none'
        }}>
          <option value="">選択してください</option>
          {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <br />
        <button onClick={handleCheckCompatibility} style={{
          cursor: 'pointer',
          padding: '10px 20px',
          fontSize: '1rem',
          background: 'var(--primary-color)',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: '700',
          transition: 'background 0.3s, transform 0.3s',
          marginTop: '10px',
          boxShadow: '0 3px 8px rgba(0,0,0,0.15)'
        }}>相性をチェック</button>
      </div>

      {resultScore !== null && (
        <div id="resultBox" style={{
          background: '#fff',
          margin: '20px 0',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
          textAlign: 'center'
        }}>
          <h2>相性診断結果</h2>
          <div id="resultScore" style={{ fontWeight: '700', color: '#c33', marginTop: '8px', fontSize: '1.1rem' }}>
            相性スコア: {resultScore}
          </div>
          <div id="resultComment" style={{ marginTop: '8px', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
            {resultComment}
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Link href="/" className="nav-link" style={{
          display: 'inline-block',
          margin: '10px 5px',
          padding: '10px 20px',
          background: 'var(--accent-color)',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '700',
          transition: 'background 0.3s, transform 0.3s',
          boxShadow: '0 3px 8px rgba(0,0,0,0.15)'
        }}>診断ページへ</Link>
        <Link href="/types" className="nav-link" style={{
          display: 'inline-block',
          margin: '10px 5px',
          padding: '10px 20px',
          background: 'var(--accent-color)',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '700',
          transition: 'background 0.3s, transform 0.3s',
          boxShadow: '0 3px 8px rgba(0,0,0,0.15)'
        }}>16タイプ一覧へ</Link>
      </div>
    </div>
  );
}