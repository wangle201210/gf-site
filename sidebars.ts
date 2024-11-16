import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [{
      type: 'autogenerated',
      dirName: 'docs'
    }
  ],
  quickSidebar: [{
      type: 'autogenerated',
      dirName: 'quick'
    }
  ],
  releaseSidebar: [{
      type: 'autogenerated',
      dirName: 'release'
    }
  ],
  supportusSidebar: [{
      type: 'autogenerated',
      dirName: 'supportus'
    }
  ],
  shareSidebar: [{
      type: 'autogenerated',
      dirName: 'share'
    }
  ],
};

export default sidebars;
