export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1083529ef74e75736c789c',
                  title: 'Sanity Studio',
                  name: 'test-sanity-gatsby-blog-studio-z6j6c9v4',
                  apiId: 'c4571d5a-d408-48ff-b0e6-3cc22646a3c4'
                },
                {
                  buildHookId: '5d108352e67e35c61ded44bd',
                  title: 'Blog Website',
                  name: 'test-sanity-gatsby-blog-web-2ypq6odk',
                  apiId: '88249acd-3808-448b-95a4-8ab63973640a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mralbertchen/test-sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sanity-gatsby-blog-web-2ypq6odk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
