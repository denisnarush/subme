import type { Routes } from "@angular/router";

export const RootRoutes: Routes = [
    {
        path: "home",
        loadChildren: () =>
            import("@s/flowers/pages/feature-home").then(
                (m) => m.FlowersPagesFeatureHomeModule
            )
    },
    {
        path: "about",
        loadChildren: () =>
            import("@s/flowers/pages/feature-about").then(
                (m) => m.FlowersPagesFeatureAboutModule
            )
    },
    {
        path: "dashboard",
        loadChildren: () =>
            import("@s/flowers/pages/feature-dashboard").then(
                (m) => m.FlowersPagesFeatureDashboardModule
            )
    },
    {
        path: "delivery-confirmed",
        loadChildren: () =>
            import("@s/flowers/pages/feature-delivery-confirmed").then(
                (m) => m.FlowersPagesFeatureDeliveryConfirmedModule
            )
    },
    {
        path: "delivery-reschedule-confirmed",
        loadChildren: () =>
            import("@s/flowers/pages/feature-delivery-reschedule-confirmed").then(
                (m) => m.FlowersPagesFeatureDeliveryRescheduleConfirmedModule
            )
    },
    {
        path: "order",
        loadChildren: () =>
            import("@s/flowers/pages/feature-order").then(
                (m) => m.FlowersPagesFeatureOrderModule
            )
    },
    {
        path: "payment-confirmed",
        loadChildren: () =>
            import("@s/flowers/pages/feature-payment-confirmed").then(
                (m) => m.FlowersPagesFeaturePaymentConfirmedModule
            )
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "**",
        loadChildren: () =>
            import("@s/shared/pages/feature-not-found").then(
                (m) => m.SharedPagesFeatureNotFoundModule
            )
    }
];
