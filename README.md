# sql-to-dbt-converter

A tool that takes SQL code and breaks it down into a more dbt-friendly query with Jinja templating format. This will help users to easily convert their SQL queries into dbt-compatible formats, making it simpler to integrate with dbt for data transformation and analysis. The tool will provide an interface where users can input their SQL code, and it will output the equivalent dbt (Data Build Tool) Jinja template. The focus will be on creating a user-friendly UI that guides the user through the process of converting their SQL into the dbt Jinja format, including helpful tips and examples.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/sql-to-dbt-converter.git
cd sql-to-dbt-converter
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
