
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  template: `
    <div class="app-container">
      <nav class="sidebar">
        <div class="brand">AngularDemo✨</div>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">🏠 Home</a>
        <a routerLink="/about" routerLinkActive="active">✨ About</a>
        <a routerLink="/dashboard" routerLinkActive="active">✨ Dashboard</a>
        <a routerLink="/products" routerLinkActive="active">✨ Products</a>
        <a routerLink="/settings" routerLinkActive="active">✨ Settings</a>
        <a routerLink="/profile" routerLinkActive="active">✨ Profile</a>
        <a routerLink="/analytics" routerLinkActive="active">✨ Analytics</a>
        <a routerLink="/contact" routerLinkActive="active">✨ Contact</a>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
        
        <div *ngIf="isHome()" class="home-page">
          <div class="page-header">
            <h1>Home <span style="font-size: 1rem; background: #f43f5e; color: #fff; padding: 0.25rem 0.5rem; border-radius: 0.25rem; vertical-align: middle; margin-left: 1rem;">v1.0.0</span></h1>
            <p class="subtitle">Experience the power of home with our modern interface.</p>
          </div>
          <div class="card-container">
            <div class="card"><h3>Welcome</h3><p>This is the central hub. Discover your potential.</p><button class="btn">Get Started</button></div>
            <div class="card"><h3>Quick Actions</h3><p>Access your most used tools instantly.</p><button class="btn">View Tools</button></div>
          </div>
          <div class="dynamic-footer">
            <small>System ID: {{ id }} | Last Sync: {{ time }}</small>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter', sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; }
    .app-container { display: flex; min-height: 100vh; }
    .sidebar { width: 250px; background: #1e293b; padding: 2rem 1rem; display: flex; flex-direction: column; gap: 0.5rem; border-right: 1px solid #334155; }
    .brand { font-size: 1.5rem; font-weight: bold; margin-bottom: 2rem; color: #f43f5e; text-align: center; }
    .sidebar a { color: #cbd5e1; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.5rem; transition: all 0.3s ease; }
    .sidebar a:hover, .sidebar a.active { background: #334155; color: #fff; transform: translateX(5px); }
    .content { flex: 1; padding: 3rem; overflow-y: auto; }
    
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
  `]
})
export class AppComponent {
  title = 'angular-demo';
  time = new Date().toLocaleTimeString();
  id = Math.random().toString(36).substr(2, 9);
  
  isHome() {
    return window.location.pathname === '/';
  }
}
