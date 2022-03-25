export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "623e434da1b2ea10bd0e193e",
                  title: "Sanity Studio",
                  name: "sanity-nexbites-blog-studio",
                  apiId: "cc1db684-f08f-4157-85ca-970ccd0de658",
                },
                {
                  buildHookId: "623e434dc2ed3b092b7ecf50",
                  title: "Blog Website",
                  name: "sanity-nexbites-blog",
                  apiId: "e39b623d-6273-46ab-a8d4-889d04cbaffa",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/taylandenizuner/sanity-nexbites-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-nexbites-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
