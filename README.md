# TypeScript / Typed DAG Workflow Orchestrator

**States, events and workflows as explicit contracts.**

<sub>Source-run engineering project / Workflow engineering / Portfolio study</sub>

---

## What this explores

Strongly typed event-sourced state transitions with immutable event history, replay, dependency gates, validation and deterministic tests. Uses TypeScript strict mode.

## Run the project

Inspect `package.json` for the development and test scripts, then install dependencies with `npm install`.

## Explore the code

| Source | Role |
|---|---|
| [`README.md`](./README.md) | Project documentation |
| [`package.json`](./package.json) | Node package scripts |
| [`tsconfig.json`](./tsconfig.json) | TypeScript configuration |

## Reading the results

Inspect its tests and run a controlled local example before integrating it into a larger system. For meaningful experiments, vary one input at a time and compare the result with the implementation. Keep private datasets and credentials out of the repository.

<details><summary><strong>Original technical guide and test notes</strong></summary>

# TypeScript / Typed DAG Workflow Orchestrator

Strongly typed event-sourced state transitions with immutable event history, replay, dependency gates, validation and deterministic tests. Uses TypeScript strict mode.

```bash
npm install
npm test
```

This intentionally models an orchestrator's decision logic, not a distributed queue or production scheduler.

</details>

---

<sub>More projects in [Sharanya Pal's engineering portfolio](https://github.com/sharanyapal?tab=repositories).</sub>
