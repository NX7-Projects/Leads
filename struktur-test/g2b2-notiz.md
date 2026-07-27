# Branch-Prefix vega/

Der Prefix `vega/` kennzeichnet Feature-Branches, die der Build-Agent automatisiert pro Task anlegt.
Er isoliert agentgenerierte Arbeit vom `main`-Branch und wird um Task-Typ und Task-ID ergaenzt (z. B. `vega/client_build-<id>`).
So bleibt jeder Bau nachvollziehbar einem Auftrag zugeordnet und laeuft ausschliesslich ueber Review und Merge-Gate in `main`.
