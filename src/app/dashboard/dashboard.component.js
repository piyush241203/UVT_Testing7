"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardComponent = void 0;
const core_1 = require("@angular/core");
let DashboardComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-dashboard',
            standalone: true,
            template: `
    <div class="page-header">
      <h1>Dashboard</h1>
      <p class="subtitle">Experience the power of dashboard with our modern interface.</p>
    </div>
    <div class="card-container">
      <div class="card"><h3>Total Users</h3><div class="stat">24,592</div><p>+12% from last week</p></div><div class="card"><h3>Revenue</h3><div class="stat">$45.2K</div><p>+5% from last week</p></div><div class="card"><h3>Active Sessions</h3><div class="stat">1,204</div><p>Currently online</p></div>
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
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var DashboardComponent = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DashboardComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        time = new Date().toLocaleTimeString();
        id = Math.random().toString(36).substr(2, 9);
    };
    return DashboardComponent = _classThis;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map