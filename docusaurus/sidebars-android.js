module.exports = {
  mySidebar: [
    {
        type: 'category',
        label: 'Basics',
        items: [
            {
              type: 'autogenerated',
              dirName: '01-basics'
            }
        ]
    },
    {
        type: 'category',
        label: 'Client',
            items: [
                {
                  type: 'doc',
                  id: 'client/guides/push-notifications',
                },
                {
                  type: 'doc',
                  id: 'client/guides/working-with-offline',
                },
            ]
//        items: [
//            {
//              type: 'autogenerated',
//              dirName: '02-client'
//            }
//        ]
    },
    {
        type: 'category',
        label: 'UI Components',
        items: [
            {
              type: 'autogenerated',
              dirName: '03-ui'
            }
        ]
    }
  ]
};
