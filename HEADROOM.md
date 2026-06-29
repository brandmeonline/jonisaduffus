# Headroom Integration — jonisaduffus

**Assessment: nothing to integrate.**

This repository currently contains only a one-line `README.md` — no source code, no
LLM call sites, no provider SDKs, and no high-volume context (tool outputs, logs,
RAG chunks, file reads, or conversation history). Headroom
([github.com/chopratejas/headroom](https://github.com/chopratejas/headroom)) only
provides value where LLM message payloads exist to compress, so there is no surface
to wire it into here.

This file is recorded for traceability alongside the Headroom integration work on the
sibling repositories (`Hyper_Trade`, `Agentic_Trading_OS`), where the adapter,
opt-in proxy/MCP routes, eval harness, and measured results are documented in their
own `HEADROOM.md`.

**When code lands here**, the same pattern applies: add a lazy, default-off
`compress_messages` adapter (identity unless an env flag is set), wire it at any
high-volume seam (large tool outputs / retrieved chunks), keep decision-path inputs
uncompressed unless paired with `headroom_retrieve`, and prove no regression with a
byte-identical accuracy guard.
