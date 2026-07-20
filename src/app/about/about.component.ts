import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="hero-banner">
      <h1>🚀 About UVT Angular v3</h1>
      <p class="subtitle">Percy-verified visual regression testing for Angular — zero config, full coverage.</p>
      <div class="tags">
        <span class="tag">✅ Percy Integrated</span>
        <span class="tag">⚡ Angular 17</span>
        <span class="tag">🎯 DSE Engine</span>
        <span class="tag">🔍 Selective Testing</span>
      </div>
    </div>
    <div class="card-container">
      <div class="card"><h3>Our Mission</h3><p>To provide the best visual testing experience for Angular apps — automatically, with zero configuration.</p></div>
      <div class="card accent"><h3>The Team</h3><p>Built by passionate developers, for developers. Percy + UVT = effortless visual CI.</p></div>
      <div class="card"><h3>The Stack</h3><p>Angular 17 · Playwright · Percy · UVT Core · GitHub Actions · DSE Stabilizer</p></div>
    </div>
    <div class="dynamic-footer">
      <small>System ID: {{ id }} | Last Sync: {{ time }}</small>
    </div>
  `,
  styles: [`
    .hero-banner { background: linear-gradient(135deg, #0f172a 0%, #4f46e5 50%, #7c3aed 100%); border-radius: 16px; padding: 36px 28px; margin-bottom: 2rem; color: #fff; box-shadow: 0 8px 32px rgba(79,70,229,0.35); }
    h1 { font-size: 2.2rem; margin: 0 0 8px; font-weight: 900; -webkit-text-fill-color: #fff; }
    .subtitle { color: rgba(255,255,255,0.85); font-size: 1.05rem; margin: 0 0 16px; }
    .tags { display: flex; gap: 10px; flex-wrap: wrap; }
    .tag { background: rgba(255,255,255,0.15); border-radius: 20px; padding: 5px 14px; font-size: 12px; font-weight: 600; border: 1px solid rgba(255,255,255,0.3); }
    .card-container { display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); margin-bottom: 3rem; }
    .card { background: #1e293b; border-radius: 1rem; padding: 2rem; border: 1px solid #334155; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); transition: transform 0.3s; }
    .card.accent { background: linear-gradient(135deg, #1e1b4b, #312e81); border-color: #4f46e5; }
    .card:hover { transform: translateY(-5px); border-color: #7c3aed; }
    .card h3 { color: #e2e8f0; margin-top: 0; }
    .card p { color: #94a3b8; line-height: 1.6; }
    .dynamic-footer { text-align: center; color: #64748b; margin-top: auto; padding-top: 2rem; border-top: 1px solid #334155; }
  `]
})
export class AboutComponent {
  time = new Date().toLocaleTimeString();
  id = Math.random().toString(36).substr(2, 9);
}