import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="page-header">
      <h1>Settings</h1>
      <p class="subtitle">Experience the power of settings with our modern interface.</p>
    </div>
    <div class="card-container">
      <div class="card"><h3>Profile Settings</h3><p>Update your personal information.</p><button class="btn">Edit Profile</button></div><div class="card"><h3>Preferences</h3><p>Toggle dark mode, notifications, and more.</p><button class="btn">Manage</button></div>
    </div>
    <div class="dynamic-footer">
      <small>System ID: {{ id }} | Last Sync: {{ time }}</small>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 3rem; }
    h1 { font-size: 3rem; margin: 0; background: linear-gradient(to right, #f43f5e, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .subtitle { color: #94a3b8; font-size: 1.2rem; margin-top: 0.5rem; }
    .card-container { display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); margin-bottom: 3rem; }
    .card { background: #1e293b; border-radius: 1rem; padding: 2rem; border: 1px solid #334155; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: transform 0.3s; }
    .card:hover { transform: translateY(-5px); border-color: #f43f5e; }
    .card h3 { color: #e2e8f0; margin-top: 0; }
    .card p { color: #94a3b8; line-height: 1.6; }
    .dynamic-footer { text-align: center; color: #64748b; margin-top: auto; padding-top: 2rem; border-top: 1px solid #334155; }
    .btn { display: inline-block; padding: 0.75rem 1.5rem; background: #f43f5e; color: #fff; font-weight: bold; border-radius: 0.5rem; text-decoration: none; margin-top: 1rem; cursor: pointer; border: none; }
    .btn:hover { background: #fb7185; }
    .stat { font-size: 2.5rem; font-weight: bold; color: #fb923c; margin: 1rem 0; }
  `]
})
export class SettingsComponent {
  time = new Date().toLocaleTimeString();
  id = Math.random().toString(36).substr(2, 9);
}