// module.exports = ({ env }) => ({
//     "vercel-deploy": {
//       enabled: true,
//     },
//   });
module.exports = ({ env }) => ({
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook:
                "https://api.vercel.com/v1/integrations/deploy/prj_xcdcfW1Ayjr0WHI5tTpatFMroAPp/iKSn8lZiRP",
            apiToken: "oFaPzpoWQRBpoNIoaPQch3ky",
            appFilter: "psc-indo-strapi",
            roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
    },
});