# mcpagent
# mcpagent

mcpagentは、Model Context Protocol（MCP）を活用したAIエージェントフレームワークです。このリポジトリでは、特化型のAIエージェントを簡単に構築・管理できるようになっています。

## 概要

mcpagentは以下の特化型エージェントを提供しています：

- **webSearchAssistant**: ウェブ検索に特化したエージェント
- **fileSystemNavigator**: ローカルファイルシステム操作に特化したエージェント
- **packageInstallationManager**: パッケージインストール管理に特化したエージェント
- **githubRepositoryManager**: GitHub操作に特化したエージェント

## インストール方法

```bash
# リポジトリをクローン
git clone https://github.com/KAFKA2306/mcpagent.git

# プロジェクトディレクトリに移動
cd mcpagent

# 必要なパッケージをインストール
npm install @mastra/mcp@latest
npm install @ai-sdk/google
```

## 環境設定

以下の環境変数を設定する必要があります：

```
BRAVE_API_KEY=your_brave_api_key
GITHUB_API_KEY=your_github_personal_access_token
```

## 使用方法

### 基本的な使い方

```typescript
import { mastra } from './src/mastra';

// ウェブ検索アシスタントを使用
const response = await mastra.agents.webSearchAssistant.run({
  messages: [
    { role: 'user', content: '最新のMCP技術について教えてください' }
  ]
});

console.log(response);
```

### 各エージェントの使用例

#### ウェブ検索アシスタント

```typescript
const searchResponse = await mastra.agents.webSearchAssistant.run({
  messages: [
    { role: 'user', content: '2025年の人工知能の最新トレンドは？' }
  ]
});
```

#### ファイルシステムナビゲーター

```typescript
const filesResponse = await mastra.agents.fileSystemNavigator.run({
  messages: [
    { role: 'user', content: 'プロジェクト内のTypeScriptファイルを一覧表示して' }
  ]
});
```

#### パッケージインストールマネージャー

```typescript
const installResponse = await mastra.agents.packageInstallationManager.run({
  messages: [
    { role: 'user', content: 'このプロジェクトにAxiosをインストールしてください' }
  ]
});
```

#### GitHubリポジトリマネージャー

```typescript
const githubResponse = await mastra.agents.githubRepositoryManager.run({
  messages: [
    { role: 'user', content: 'このリポジトリの最新コミット情報を教えて' }
  ]
});
```

## MCP Serverの設定

mcpagentは以下のMCP Serverを使用しています：

- **Brave Search**: ウェブ検索機能を提供
- **File System**: ローカルファイルシステムへのアクセスを提供
- **GitHub**: GitHubリポジトリ操作機能を提供
- **MCP Installer**: パッケージインストール機能を提供

## カスタマイズ

新しいエージェントを追加する場合は、`src/mastra/agents`ディレクトリに新しいエージェント定義を作成し、`src/mastra/index.ts`にインポートして登録します。

```typescript
// 新しいエージェントの例
export const customAgent = new Agent({
  name: "Custom Agent",
  instructions: `
    あなたは特定のタスクを実行する専門アシスタントです。
    【基本方針】
    - タスクAを実行する際の手順
    - タスクBを実行する際の注意点
  `,
  model: google('gemini-1.5-pro-latest'),
  tools: await mcp.getTools(),
});
```

## 技術スタック

- **TypeScript**: 開発言語
- **Gemini 1.5 Pro**: 基盤AIモデル
- **MCP Protocol**: コンテキスト共有プロトコル
- **Mastra**: エージェントフレームワーク

## 注意事項

- アクセス可能なディレクトリは「M:/mastra」に限定されています
- APIキーは適切に管理してください
- 大規模なファイル操作やリポジトリ操作を行う場合は注意が必要です