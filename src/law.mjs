import { readFileSync } from "node:fs";
import { compileRmlLaw } from "@emsenn/rmn-semantic-conformance/law";
export const HIERARCHICAL_CIRCUIT_EQUIVALENCE_LAW = compileRmlLaw(readFileSync(new URL("../content/contracts/assay-hierarchical-circuit-equivalence.rml", import.meta.url), "utf8"));

