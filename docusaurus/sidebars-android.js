module.exports = {
  "mySidebar": [
    {
      "type": "category",
      "label": "Basics",
      "items": [
        "basics/overview",
        "basics/dependencies",
        "client/overview",
      ]
    },
    {
      "type": "category",
      "label": "UI Components",
      "items": [
        "ui/overview",
        "ui/general-customization/theming",
        "ui/general-customization/chatui",
        {
          "Channel List": [
            "ui/channel-components/channel-list-screen",
            "ui/channel-components/channel-list-header",
            "ui/channel-components/channel-list",
            "ui/guides/building-channel-list-screen"
          ]
        },
        {
          "Message List": [
            "ui/message-components/message-list-screen",
            "ui/message-components/message-list-header",
            "ui/message-components/message-list",
            "ui/utility-components/search-view",
            "ui/utility-components/mention-list",
            "ui/utility-components/pinned-message-list",
            "ui/guides/building-message-list-screen",
            "ui/guides/providing-custom-reactions",
            "ui/guides/customizing-message-list-scroll-behavior",
          ]
        },
        {
          "Message Composer": [
            "ui/message-components/message-composer",
            "ui/utility-components/attachment-gallery",
            "ui/guides/custom-message-composer",
            "ui/guides/adding-custom-attachments",
          ]
        },
        "ui/guides/custom-translations",
        "ui/formatting",
        "ui/guides/enabling-audio-recording",
        "ui/guides/customizing-image-and-video-previews",
        "ui/guides/app-startup-initializers",
        "ui/guides/implementing-own-capabilities",
      ]
    },
    {
      "type": "category",
      "label": "Compose UI Components",
      "items": [
        "compose/overview",
        "compose/component-architecture",
        "compose/general-customization/chat-theme",
        {
          "Channel List": [
            "compose/channel-components/channels-screen",
            "compose/channel-components/channel-list-header",
            "compose/channel-components/channel-list",
            "compose/channel-components/channel-item",
            "compose/channel-components/selected-channel-menu",
          ],
        },
        {
          "Message List": [
            "compose/message-components/messages-screen",
            "compose/message-components/message-list-header",
            "compose/message-components/message-list",
            "compose/message-components/selected-message-menu",
            "compose/message-components/selected-reactions-menu",
            "compose/guides/providing-custom-reactions",
            "compose/utility-components/pinned-message-list",
          ],
        },
        {
          "Message Composer": [
            "compose/message-components/message-composer",
            "compose/message-components/attachments-picker",
            "compose/general-customization/attachment-factory",
          ],
        },
        {
          "Utility Components": [
            "compose/utility-components/user-avatar",
            "compose/utility-components/channel-avatar",
            "compose/utility-components/search-input",
          ],
        },
        "compose/guides/custom-translations",
        "compose/guides/enabling-audio-recording",
        "compose/guides/customizing-image-and-video-previews",
        "compose/guides/implementing-own-capabilities",
      ]
    },
    {
      "type": "category",
      "label": "Compose Cookbook",
      "items": [
        {
          "type": "autogenerated",
          "dirName": "compose-cookbook"
        }
      ]
    },
    {
      "type": "category",
      "label": "State & Offline",
      "items": [
        "client/guides/state-plugin",
        "client/guides/offline-support"
      ]
    },
    {
      "type": "category",
      "label": "Advanced Guides",
      "items": [
        {
          "type": "category",
          "label": "Push Notifications",
          "items": [
            {
              "type": "autogenerated",
              "dirName": "client/guides/push-notifications"
            }
          ]
        },
        "basics/logging",
        "basics/debugging",
        "client/moderation-tools",
        "client/guides/channel-list-updates",
        "client/guides/listening-for-events",
        "client/guides/optimizations"
      ]
    },
    {
      "type": "category",
      "label": "Migration Guides",
      "items": [
        {
          "type": "autogenerated",
          "dirName": "migration-guides"
        }
      ]
    },
    {
      "type": "category",
      "label": "Reference",
      "items": [
        {
          "type": "autogenerated",
          "dirName": "resources"
        }
      ]
    }
  ]
};
