import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';

import { weatherAgent, weatherAgent2 } from './agents';
import { 
  webSearchAssistant,
  fileSystemNavigator,
  packageInstallationManager,
  githubRepositoryManager
} from './agents/mcpAgent';

export const mastra = new Mastra({
  agents: { 
    // 天気関連エージェント
    weatherAgent,
    weatherAgent2,
    
    // MCP関連の特化型エージェント
    webSearchAssistant,
    fileSystemNavigator,
    packageInstallationManager,
    githubRepositoryManager
  },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
