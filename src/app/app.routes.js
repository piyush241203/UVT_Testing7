"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const about_component_1 = require("./about/about.component");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const products_component_1 = require("./products/products.component");
const settings_component_1 = require("./settings/settings.component");
const profile_component_1 = require("./profile/profile.component");
const analytics_component_1 = require("./analytics/analytics.component");
const contact_component_1 = require("./contact/contact.component");
exports.routes = [
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'analytics', component: analytics_component_1.AnalyticsComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
//# sourceMappingURL=app.routes.js.map