#!/usr/bin/env node
// deploy-helper.mjs
// Kleines Hilfsskript: meldet Bereitschaft und gibt das aktuelle Datum (ISO) aus.

const jetzt = new Date().toISOString();

console.log('Deploy-Helper bereit');
console.log(jetzt);
