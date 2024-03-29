const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/flowers',
    '<rootDir>/apps/api',
    '<rootDir>/libs/theme',
    '<rootDir>/libs/flowers/pages/feature-about',
    '<rootDir>/libs/flowers/pages/feature-dashboard',
    '<rootDir>/libs/flowers/pages/feature-delivery-confirmed',
    '<rootDir>/libs/flowers/pages/feature-delivery-reschedule-confirmed',
    '<rootDir>/libs/flowers/pages/feature-home',
    '<rootDir>/libs/flowers/pages/feature-order',
    '<rootDir>/libs/flowers/pages/feature-payment-confirmed',
    '<rootDir>/libs/shared/directives',
    '<rootDir>/libs/shared/pages/feature-confirmed',
    '<rootDir>/libs/shared/pages/feature-not-found',
    '<rootDir>/libs/ui',
    '<rootDir>/libs/ui/ui-content',
    '<rootDir>/libs/ui/ui-header',
    '<rootDir>/libs/ui/ui-footer',
    '<rootDir>/libs/ui/ui-modal',
    '<rootDir>/libs/ui/ui-slider',
    '<rootDir>/libs/ui/ui-tabs',
    '<rootDir>/libs/ui/ui-tab',
    '<rootDir>/libs/ui/ui-fieldset',
  ],
};
