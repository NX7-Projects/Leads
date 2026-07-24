#!/usr/bin/env node
// build-info.mjs — kleines Hilfsskript.
// Gibt beim Ausfuehren das aktuelle Datum (ISO) und einen festen Kennzeichnungstext aus.
// ES-Module (.mjs). Ausfuehren mit: node scripts/build-info.mjs

const isoDate = new Date().toISOString();
const label = "NX7 Leads Demo-Fabrik";

console.log(isoDate);
console.log(label);
